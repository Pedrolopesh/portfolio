#!/usr/bin/env node
/**
 * Conta as linhas de código escritas por mim (linhas adicionadas nos meus
 * commits) em todos os repositórios git encontrados no computador, e grava
 * o total em src/content/code-stats.json — usado no contador ao vivo de
 * /Project.
 *
 *   node scripts/update-code-stats.mjs [pasta-raiz ...]   (padrão: ~/Documents)
 *
 * Meus e-mails de autor vêm de scripts/.code-stats.local.json (ignorado
 * pelo git — e-mails de trabalho não vão pro repositório público):
 *   { "emails": ["eu@exemplo.com", ...], "excludeAuthors": ["Ralph Agent"] }
 * Sem o arquivo, usa só o `git config user.email`.
 *
 * Regras pra não inflar o número:
 *  - só arquivos de CÓDIGO (lista CODE_EXT): documentação (.md), dados
 *    (.json), textos e binários ficam de fora;
 *  - cada commit conta uma vez (clones repetidos têm o mesmo hash);
 *  - sem merges;
 *  - ignora gerados: lockfiles, dist/build/.next, node_modules/vendor,
 *    Yarn PnP, minificados e alterações de mais de 5.000 linhas num
 *    arquivo (import em massa).
 * Grava também a média diária dos últimos 365 dias, usada pra estimar o
 * crescimento desde a data do snapshot.
 */
import { execFileSync, execSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const here = fileURLToPath(new URL(".", import.meta.url));
const localCfg = join(here, ".code-stats.local.json");
const cfg = existsSync(localCfg) ? JSON.parse(readFileSync(localCfg, "utf8")) : {};
const emails = new Set(
  (cfg.emails ?? [execSync("git config user.email", { encoding: "utf8" }).trim()]).map((e) =>
    e.toLowerCase()
  )
);
const excludeAuthors = new Set(cfg.excludeAuthors ?? []);
const roots = process.argv.slice(2).length ? process.argv.slice(2) : [join(homedir(), "Documents")];

const CODE_EXT =
  /\.(ts|tsx|js|jsx|mjs|cjs|vue|svelte|css|scss|sass|less|html|py|kt|kts|java|swift|go|rs|rb|php|dart|sh|bash|zsh|sql|prisma|graphql|gql|yml|yaml|tf|hcl|astro)$/i;

const IGNORE = [
  /(^|\/)\.pnp\./,
  /(^|\/)(node_modules|vendor|dist|build|out|\.next|\.nuxt|coverage|\.expo|Pods|DerivedData)\//,
  /(^|\/)(package-lock\.json|yarn\.lock|pnpm-lock\.yaml|bun\.lockb?|Podfile\.lock|composer\.lock|Gemfile\.lock|poetry\.lock|Cargo\.lock)$/,
  /\.min\.(js|css)$/,
  /\.map$/,
  /\.snap$/,
  /\.(png|jpe?g|gif|webp|ico|svg|pdf|mp4|mov|woff2?|ttf|otf|eot|zip)$/i,
];
const MAX_LINES_PER_FILE_CHANGE = 5000;

function findRepos(dir, depth = 0, acc = []) {
  if (depth > 7) return acc;
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return acc;
  }
  if (entries.includes(".git")) acc.push(dir);
  for (const name of entries) {
    if (name === "node_modules" || name === ".git" || name.startsWith(".")) continue;
    const p = join(dir, name);
    try {
      if (statSync(p).isDirectory()) findRepos(p, depth + 1, acc);
    } catch {
      /* sem permissão */
    }
  }
  return acc;
}

const seen = new Set();
const yearAgo = Date.now() / 1000 - 365 * 86400;
let total = 0;
let lastYear = 0;
let commits = 0;
let repos = 0;

for (const repo of roots.flatMap((r) => findRepos(r))) {
  let log;
  try {
    log = execFileSync(
      "git",
      ["-C", repo, "log", "--all", "--no-merges", "--numstat", "--format=@@%H|%ae|%an|%at"],
      { encoding: "utf8", maxBuffer: 1 << 30, stdio: ["ignore", "pipe", "ignore"] }
    );
  } catch {
    continue;
  }
  let mine = false;
  let counted = false;
  let recent = false;
  for (const line of log.split("\n")) {
    if (line.startsWith("@@")) {
      const [hash, email, name, at] = line.slice(2).split("|");
      mine = emails.has(email.toLowerCase()) && !excludeAuthors.has(name) && !seen.has(hash);
      if (mine) {
        seen.add(hash);
        commits++;
        counted = true;
        recent = Number(at) >= yearAgo;
      }
      continue;
    }
    if (!mine || !line) continue;
    const [added, , file] = line.split("\t");
    if (added === "-" || !file || !CODE_EXT.test(file) || IGNORE.some((re) => re.test(file))) continue;
    const n = Number(added);
    if (!Number.isFinite(n) || n > MAX_LINES_PER_FILE_CHANGE) continue;
    total += n;
    if (recent) lastYear += n;
  }
  if (counted) repos++;
}

const stats = {
  linesOfCode: total,
  /** média de linhas/dia nos últimos 365 dias (pra estimar o crescimento) */
  dailyRate: Math.round(lastYear / 365),
  commits,
  repositories: repos,
  updatedAt: new Date().toISOString(),
};
const out = fileURLToPath(new URL("../src/content/code-stats.json", import.meta.url));
writeFileSync(out, JSON.stringify(stats, null, 2) + "\n");
console.log(stats);
