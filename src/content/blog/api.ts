import type { BlogPost } from "./types";
import { LOCAL_POSTS } from "./posts";
import { getDraftPosts } from "./drafts";

/**
 * Camada de dados do blog. Junta duas fontes:
 *  - posts locais (src/content/blog/posts) — versionados no repositório;
 *  - posts publicados na API (pedro-portfolio-backend, api.pedrolopes.tech).
 *
 * Só roda no servidor (getStaticProps), com ISR: posts novos publicados na
 * API aparecem sem novo deploy. Se a API estiver fora do ar ou lenta, o
 * blog segue só com os posts locais — o build nunca quebra por causa dela.
 * Em caso de slug repetido, o post da API vence (dá pra "editar" um post
 * local publicando uma versão nova pela API).
 */

const API_URL = process.env.BLOG_API_URL ?? "https://api.pedrolopes.tech";
const TIMEOUT_MS = 5000;
const PAGE_SIZE = 50; // máximo aceito pela API

/** Re-gera as páginas do blog no máximo a cada 5 min (ISR). */
export const BLOG_REVALIDATE_SECONDS = 300;

type ApiPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  tags: string[];
  publishedAt: string | null;
  createdAt: string;
};

type ApiPage = { items: ApiPost[]; totalPages: number };

const fromApi = (p: ApiPost): BlogPost => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  content: p.content,
  coverImage: p.coverImage,
  tags: p.tags ?? [],
  category: "artigos",
  publishedAt: p.publishedAt ?? p.createdAt,
});

async function getJson<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { accept: "application/json" },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

async function fetchApiPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];
  for (let page = 1; page <= 20; page++) {
    const data = await getJson<ApiPage>(`/posts?page=${page}&pageSize=${PAGE_SIZE}`);
    if (!data) break;
    posts.push(...data.items.map(fromApi));
    if (page >= data.totalPages) break;
  }
  return posts;
}

const byDateDesc = (a: BlogPost, b: BlogPost) =>
  b.publishedAt.localeCompare(a.publishedAt);

export async function getAllPosts(): Promise<BlogPost[]> {
  const [apiPosts, drafts] = await Promise.all([fetchApiPosts(), getDraftPosts()]);
  const apiSlugs = new Set(apiPosts.map((p) => p.slug));
  const local = LOCAL_POSTS.filter((p) => !apiSlugs.has(p.slug));
  // rascunhos (só em dev) primeiro, depois posts da API (mais novos) e os
  // locais na ordem curada
  return [...drafts, ...apiPosts.sort(byDateDesc), ...local];
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fromApiPost = await getJson<ApiPost>(`/posts/${encodeURIComponent(slug)}`);
  if (fromApiPost) return fromApi(fromApiPost);
  const local = LOCAL_POSTS.find((p) => p.slug === slug);
  if (local) return local;
  return (await getDraftPosts()).find((p) => p.slug === slug) ?? null;
}

/** Tempo de leitura estimado (~200 palavras/min). */
export const readingMinutes = (content: string) =>
  Math.max(1, Math.round(content.split(/\s+/).filter(Boolean).length / 200));
