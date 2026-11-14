/**
 * Formato de um post do blog — igual ao modelo `Post` da API
 * (pedro-portfolio-backend), mais `category`, que só existe nos posts
 * locais. Posts vindos da API caem na categoria "artigos".
 */
export type BlogCategory = "trabalho" | "projetos-pessoais" | "faculdade" | "artigos";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** Markdown simples: ##/### títulos, parágrafos, listas "-", "> citação",
   *  ![imagem](src), **negrito**, `código` e [links](url). */
  content: string;
  coverImage: string | null;
  tags: string[];
  category: BlogCategory;
  /** ISO 8601 */
  publishedAt: string;
};
