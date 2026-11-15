import type { BlogCategory, BlogPost } from "./types";

/**
 * Rascunhos locais do blog.
 *
 * Ficam em `src/content/blog/drafts/*.md` — pasta ignorada pelo git (só o
 * README dela é versionado), então rascunho nunca vai pro repositório
 * público nem pra produção. Só são lidos quando o site roda com
 * `next dev`; no build de produção esta função devolve [] sem tocar no
 * disco.
 *
 * Formato do arquivo (o nome do arquivo vira o slug):
 *
 *   ---
 *   title: Título do post
 *   excerpt: Resumo de uma ou duas frases
 *   category: trabalho | projetos-pessoais | faculdade | artigos
 *   tags: React, Next.js, Carreira
 *   coverImage: /img/alguma-imagem.webp   (opcional)
 *   ---
 *   Conteúdo em markdown (mesmo subconjunto do componente Markdown).
 *
 * Pra publicar: mova o texto pra um arquivo em `posts/` (post local) ou
 * publique pela API — aí ele deixa de ser rascunho.
 */

const CATEGORIES: BlogCategory[] = ["trabalho", "projetos-pessoais", "faculdade", "artigos"];

export const draftsEnabled = () => process.env.NODE_ENV === "development";

function parse(slug: string, raw: string): BlogPost | null {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return null;

  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  if (!meta.title) return null;

  const category = CATEGORIES.includes(meta.category as BlogCategory)
    ? (meta.category as BlogCategory)
    : "artigos";

  return {
    slug,
    title: meta.title,
    excerpt: meta.excerpt ?? "",
    content: match[2].trim(),
    coverImage: meta.coverImage || null,
    tags: (meta.tags ?? "").split(",").map((t) => t.trim()).filter(Boolean),
    category,
    publishedAt: new Date().toISOString().slice(0, 10),
    draft: true,
  };
}

export async function getDraftPosts(): Promise<BlogPost[]> {
  if (!draftsEnabled()) return [];

  // imports dinâmicos: módulos de Node só carregam em dev, no servidor
  const fs = await import("node:fs/promises");
  const path = await import("node:path");
  const dir = path.join(process.cwd(), "src/content/blog/drafts");

  let files: string[];
  try {
    files = (await fs.readdir(dir)).filter((f) => f.endsWith(".md") && f !== "README.md");
  } catch {
    return [];
  }

  const posts = await Promise.all(
    files.sort().map(async (file) =>
      parse(file.replace(/\.md$/, ""), await fs.readFile(path.join(dir, file), "utf8"))
    )
  );
  return posts.filter((p): p is BlogPost => p !== null);
}
