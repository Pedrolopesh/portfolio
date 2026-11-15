import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { useTranslation } from "react-i18next";

import HeadPages from "../../components/HeadPages";
import Header from "../../components/Header";
import Footer from "../../components/Home/Footer";
import Markdown, { headingsOf } from "../../components/Blog/Markdown";
import PostCard, { formatDate, type PostSummary } from "../../components/Blog/PostCard";
import Reveal from "../../components/ui/Reveal";
import {
  BLOG_REVALIDATE_SECONDS,
  getAllPosts,
  getPostBySlug,
  readingMinutes,
} from "../../content/blog/api";
import type { BlogPost } from "../../content/blog/types";

const SITE_URL = "https://pedrolopes.tech";

type Props = {
  post: BlogPost & { minutes: number };
  related: PostSummary[];
};

const absolute = (src: string | null) =>
  src ? (src.startsWith("http") ? src : `${SITE_URL}${src}`) : undefined;

const BlogPostPage = ({ post, related }: Props) => {
  const { t, i18n } = useTranslation();
  const headings = headingsOf(post.content);

  return (
    <div>
      <HeadPages
        path={`/blog/${post.slug}`}
        title={`${post.title} | Pedro Lopes`}
        description={post.excerpt}
        image={absolute(post.coverImage)}
        type="article"
      />
      <Header />

      <main className="pt-32 sm:pt-40">
        <article>
          {/* cabeçalho do post */}
          {/* mesma grade do conteúdo, pra título e texto ficarem alinhados */}
          <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 lg:grid-cols-[1fr_220px]">
          <header className="mx-auto w-full max-w-3xl">
            <Link
              href="/blog"
              className="font-mono text-sm text-ink-muted transition hover:text-brand-from"
            >
              ← {t("blog.back")}
            </Link>

            {post.draft && (
              <p className="mt-6 rounded-xl border border-amber-400/40 bg-amber-400/5 px-4 py-3 text-sm text-amber-200">
                {t("blog.draft_notice")}
              </p>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-brand-from">
              <span>{t(`blog.categories.${post.category}.label`)}</span>
              <span className="text-ink-muted/50">•</span>
              <span className="text-ink-muted">
                {formatDate(post.publishedAt, i18n.language)}
              </span>
              <span className="text-ink-muted/50">•</span>
              <span className="text-ink-muted">
                {t("blog.read_time", { min: post.minutes })}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg text-ink-muted sm:text-xl">{post.excerpt}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs text-ink-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>
          </div>

          {post.coverImage && (
            <div className="mx-auto mt-12 grid max-w-6xl gap-12 px-6 sm:px-10 lg:grid-cols-[1fr_220px]">
              <img
                src={post.coverImage}
                alt=""
                className="mx-auto aspect-[2/1] w-full max-w-3xl rounded-3xl border border-border object-cover"
              />
            </div>
          )}

          {/* conteúdo + sumário */}
          <div className="mx-auto mt-14 grid max-w-6xl gap-12 px-6 sm:px-10 lg:grid-cols-[1fr_220px]">
            <div className="mx-auto w-full max-w-3xl">
              <Markdown content={post.content} />
            </div>

            {headings.length > 1 && (
              <aside className="hidden lg:block">
                <nav className="sticky top-28">
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                    {t("blog.on_this_page")}
                  </p>
                  <ul className="mt-4 space-y-3 border-l border-border">
                    {headings.map((h) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="-ml-px block border-l border-transparent pl-4 text-sm text-ink-muted transition hover:border-brand-from hover:text-ink"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            )}
          </div>
        </article>

        {/* cta */}
        <section className="mx-auto mt-20 max-w-3xl px-6 sm:px-10">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-brand-to/20 via-surface to-surface p-8 text-center">
            <h2 className="text-xl font-bold text-ink sm:text-2xl">{t("blog.cta_title")}</h2>
            <p className="mx-auto mt-2 max-w-lg text-ink-muted">{t("blog.cta_text")}</p>
            <Link
              href="/Contact"
              className="mt-5 inline-block rounded-full bg-gradient-to-r from-brand-from to-brand-to px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              {t("blog.cta_button")}
            </Link>
          </div>
        </section>

        {/* continue lendo */}
        {related.length > 0 && (
          <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
            <h2 className="text-2xl font-bold text-ink">{t("blog.more_posts")}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 70} className="h-full">
                  <PostCard post={p} />
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    // posts novos da API que ainda não existiam no build são gerados na
    // primeira visita
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = String(params?.slug ?? "");
  const post = await getPostBySlug(slug);
  if (!post) return { notFound: true, revalidate: BLOG_REVALIDATE_SECONDS };

  const all = await getAllPosts();
  const others = all.filter((p) => p.slug !== slug);
  // mesma categoria primeiro, depois o resto
  const related = [
    ...others.filter((p) => p.category === post.category),
    ...others.filter((p) => p.category !== post.category),
  ]
    .slice(0, 3)
    .map(({ content, ...meta }) => ({ ...meta, minutes: readingMinutes(content) }));

  return {
    props: { post: { ...post, minutes: readingMinutes(post.content) }, related },
    revalidate: BLOG_REVALIDATE_SECONDS,
  };
};

export default BlogPostPage;
