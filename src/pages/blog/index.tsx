import { useMemo, useState } from "react";
import Link from "next/link";
import type { GetStaticProps } from "next";
import { useTranslation } from "react-i18next";

import HeadPages from "../../components/HeadPages";
import Header from "../../components/Header";
import Footer from "../../components/Home/Footer";
import PostCard, { type PostSummary } from "../../components/Blog/PostCard";
import PodcastNote from "../../components/Blog/PodcastNote";
import {
  BLOG_REVALIDATE_SECONDS,
  getAllPosts,
  readingMinutes,
} from "../../content/blog/api";
import { CATEGORY_ORDER } from "../../content/blog/posts";
import type { BlogCategory } from "../../content/blog/types";

type Props = { posts: PostSummary[] };

type PageInfo = { path: string; text: string };

const BlogHome = ({ posts }: Props) => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<BlogCategory | "all">("all");

  const [featured, ...rest] = posts;
  const steps = t("blog.steps", { returnObjects: true }) as string[];
  const pages = t("blog.pages", { returnObjects: true }) as PageInfo[];
  const langNote = t("blog.posts_lang_note");

  const counts = useMemo(() => {
    const c = new Map<BlogCategory, number>();
    for (const p of posts) c.set(p.category, (c.get(p.category) ?? 0) + 1);
    return c;
  }, [posts]);
  const categories = CATEGORY_ORDER.filter((id) => counts.get(id));

  // com filtro, mostra tudo da categoria (inclusive o destaque); sem
  // filtro, o destaque já aparece lá em cima
  const visible =
    filter === "all" ? rest : posts.filter((p) => p.category === filter);

  return (
    <div>
      <HeadPages
        path="/blog"
        title={t("blog.meta_title")}
        description={t("blog.meta_description")}
      />
      <Header />

      <main>
        {/* hero */}
        <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #72A1FF 1px, transparent 1px), linear-gradient(to bottom, #72A1FF 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse at 50% 30%, black 15%, transparent 65%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-10 h-[360px] w-[620px] -translate-x-1/2 rounded-full bg-brand-to/20 blur-[120px]"
          />

          <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-10">
            <p className="font-mono text-sm text-brand-from">{t("blog.label")}</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-6xl">
              {t("blog.title")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted">
              {t("blog.intro")}
            </p>
            {langNote && (
              <p className="mt-3 font-mono text-xs text-ink-muted/70">{`// ${langNote}`}</p>
            )}

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {featured && (
                <Link
                  href={`/blog/${featured.slug}`}
                  className="rounded-full bg-gradient-to-r from-brand-from to-brand-to px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(46,111,239,0.35)] transition hover:brightness-110"
                >
                  {t("blog.read_latest")}
                </Link>
              )}
              <a
                href="#posts"
                className="rounded-full border border-border px-6 py-3 font-semibold text-ink transition hover:border-brand-from hover:text-brand-from"
              >
                {t("blog.see_all")}
              </a>
            </div>

            <p className="mt-6 font-mono text-xs text-ink-muted">
              {t("blog.posts_count", { count: posts.length })}
              {" · "}
              {t("blog.categories_count", { count: categories.length })}
            </p>
          </div>
        </section>

        {/* como funciona */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
          <h2 className="text-3xl font-bold text-ink">{t("blog.how_title")}</h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-border bg-surface p-7 lg:col-span-2">
              <h3 className="text-xl font-semibold text-ink">
                {t("blog.how_structure_title")}
              </h3>
              <p className="mt-2 text-ink-muted">{t("blog.how_structure_text")}</p>
              <ol className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {steps.map((step, i) => (
                  <li
                    key={step}
                    className="relative rounded-2xl border border-border bg-bg/60 p-4"
                  >
                    <span className="font-mono text-xs text-brand-from">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-sm font-semibold text-ink">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-3xl border border-border bg-surface p-7">
              <h3 className="text-xl font-semibold text-ink">{t("blog.how_pages_title")}</h3>
              <ul className="mt-5 space-y-4">
                {pages.map((page) => (
                  <li key={page.path}>
                    <code className="font-mono text-sm text-brand-from">{page.path}</code>
                    <p className="mt-1 text-sm text-ink-muted">{page.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-surface p-7 lg:col-span-3">
              <h3 className="text-xl font-semibold text-ink">
                {t("blog.how_categories_title")}
              </h3>
              <p className="mt-2 text-ink-muted">{t("blog.how_categories_text")}</p>
              <div
                className={`mt-6 grid gap-4 sm:grid-cols-2 ${
                  categories.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
                }`}
              >
                {categories.map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => {
                      setFilter(id);
                      document.getElementById("posts")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="rounded-2xl border border-border bg-bg/60 p-5 text-left transition hover:border-brand-from/60"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-semibold text-ink">
                        {t(`blog.categories.${id}.label`)}
                      </span>
                      <span className="font-mono text-xs text-brand-from">
                        {counts.get(id)}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-ink-muted">
                      {t(`blog.categories.${id}.description`)}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* destaque */}
        {featured && filter === "all" && (
          <section className="mx-auto max-w-6xl px-6 py-8 sm:px-10">
            <p className="mb-5 font-mono text-sm text-brand-from">{`// ${t("blog.featured")}`}</p>
            <PostCard post={featured} featured />
          </section>
        )}

        {/* lista */}
        <section id="posts" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-bold text-ink">{t("blog.all_posts")}</h2>
            <div className="flex flex-wrap gap-2" role="tablist">
              {(["all", ...categories] as const).map((id) => {
                const active = filter === id;
                return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(id)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      active
                        ? "border-brand-from bg-brand-from/10 text-ink"
                        : "border-border text-ink-muted hover:text-ink"
                    }`}
                  >
                    {id === "all" ? t("blog.filter_all") : t(`blog.categories.${id}.label`)}
                  </button>
                );
              })}
            </div>
          </div>

          {visible.length ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="mt-10 text-ink-muted">{t("blog.empty")}</p>
          )}
        </section>

        {/* veja também: podcast, discreto */}
        <section className="mx-auto max-w-3xl px-6 pb-16 sm:px-10">
          <PodcastNote />
        </section>

        {/* cta */}
        <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-brand-to/20 via-surface to-surface p-10 text-center">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">{t("blog.cta_title")}</h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-muted">{t("blog.cta_text")}</p>
            <Link
              href="/Contact"
              className="mt-6 inline-block rounded-full bg-gradient-to-r from-brand-from to-brand-to px-6 py-3 font-semibold text-white transition hover:brightness-110"
            >
              {t("blog.cta_button")}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts: posts.map(({ content, ...meta }) => ({
        ...meta,
        minutes: readingMinutes(content),
      })),
    },
    revalidate: BLOG_REVALIDATE_SECONDS,
  };
};

export default BlogHome;
