import Link from "next/link";
import { useTranslation } from "react-i18next";
import type { BlogPost } from "../../content/blog/types";

/** Post já preparado pra listagem (sem o conteúdo completo). */
export type PostSummary = Omit<BlogPost, "content"> & { minutes: number };

// data fixa em pt-BR/UTC: servidor e navegador formatam igual (sem
// mismatch de hidratação por fuso ou idioma do sistema)
export const formatDate = (iso: string, lang = "pt") =>
  new Intl.DateTimeFormat(lang === "en" ? "en-US" : "pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));

type Props = { post: PostSummary; featured?: boolean };

const PostCard = ({ post, featured = false }: Props) => {
  const { t, i18n } = useTranslation();

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex h-full overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand-from/60 hover:shadow-[0_20px_60px_-20px_rgba(46,111,239,0.45)] ${
        featured ? "flex-col lg:flex-row" : "flex-col"
      }`}
    >
      {post.coverImage && (
        <div
          className={`relative overflow-hidden bg-bg ${
            featured ? "aspect-[16/9] lg:aspect-auto lg:w-[55%]" : "aspect-[16/9]"
          }`}
        >
          <img
            src={post.coverImage}
            alt=""
            loading={featured ? "eager" : "lazy"}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/70 to-transparent" />
        </div>
      )}

      <div className={`flex flex-1 flex-col ${featured ? "p-8 lg:p-10" : "p-6"}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-brand-from">
          {post.draft && (
            <span className="rounded-full border border-amber-400/50 px-2 py-0.5 text-amber-300">
              {t("blog.draft")}
            </span>
          )}
          <span>{t(`blog.categories.${post.category}.label`)}</span>
          <span className="text-ink-muted/50">•</span>
          <span className="text-ink-muted">
            {t("blog.read_time", { min: post.minutes })}
          </span>
        </div>

        <h3
          className={`mt-3 font-bold text-ink transition-colors group-hover:text-brand-from ${
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {post.title}
        </h3>
        <p className={`mt-3 text-ink-muted ${featured ? "text-base" : "line-clamp-3 text-sm"}`}>
          {post.excerpt}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {post.tags.slice(0, featured ? 4 : 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 text-xs text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {featured && (
          <div className="mt-6 flex items-center justify-between text-sm">
            <span className="text-ink-muted">
              {formatDate(post.publishedAt, i18n.language)}
            </span>
            <span className="font-semibold text-brand-from">
              {t("blog.read_more")} →
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default PostCard;
