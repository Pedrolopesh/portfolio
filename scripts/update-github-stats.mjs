#!/usr/bin/env node
/**
 * Atualiza os números do GitHub mostrados em /Project.
 *
 *   node scripts/update-github-stats.mjs
 *
 * Usa GITHUB_TOKEN do ambiente ou, se não houver, o login do `gh`
 * (`gh auth token`). Grava src/content/github-stats.json — commite o
 * arquivo pra publicar. Só totais vão pro repositório (que é público):
 * nenhum nome de repositório privado.
 *
 * - contributions: soma do gráfico de contribuições do perfil, ano a ano,
 *   desde a criação da conta (commits, PRs, issues e revisões, incluindo
 *   repositórios privados).
 * - commits: commits em repositórios que o token consegue ver.
 * - repositories: repositórios próprios (sem forks) + de terceiros com
 *   commit ou PR do usuário.
 */
import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const token =
  process.env.GITHUB_TOKEN || execSync("gh auth token", { encoding: "utf8" }).trim();

async function gql(query) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { authorization: `bearer ${token}`, "content-type": "application/json" },
    body: JSON.stringify({ query: `{ viewer ${query} }` }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data.viewer;
}

const base = await gql(`{
  login
  contributionsCollection { contributionYears }
  own: repositories(ownerAffiliations: OWNER, isFork: false) { totalCount }
  others: repositoriesContributedTo(contributionTypes: [COMMIT, PULL_REQUEST], includeUserRepositories: false) { totalCount }
}`);

let contributions = 0;
let commits = 0;
for (const year of base.contributionsCollection.contributionYears) {
  const c = (
    await gql(`{ contributionsCollection(from: "${year}-01-01T00:00:00Z", to: "${year}-12-31T23:59:59Z") {
      contributionCalendar { totalContributions }
      totalCommitContributions
    } }`)
  ).contributionsCollection;
  contributions += c.contributionCalendar.totalContributions;
  commits += c.totalCommitContributions;
}

const stats = {
  login: base.login,
  since: Math.min(...base.contributionsCollection.contributionYears),
  contributions,
  commits,
  repositories: base.own.totalCount + base.others.totalCount,
  ownRepositories: base.own.totalCount,
  contributedRepositories: base.others.totalCount,
  updatedAt: new Date().toISOString().slice(0, 10),
};

const out = fileURLToPath(new URL("../src/content/github-stats.json", import.meta.url));
writeFileSync(out, JSON.stringify(stats, null, 2) + "\n");
console.log(stats);
