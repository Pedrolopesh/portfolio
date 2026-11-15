import { useMemo, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import HeadPages from "../components/HeadPages";
import Header from "../components/Header";
import Footer from "../components/Home/Footer";
import Reveal from "../components/ui/Reveal";
import HighlightCard from "../components/Projects/HighlightCard";
import ProductCard from "../components/Projects/ProductCard";
import ProjectCard from "../components/Projects/ProjectCard";
import {
  CATEGORY_ORDER,
  PROJECTS,
  highlightProject,
  liveProducts,
  type ProjectCategory,
} from "../content/projects";

/**
 * Landing de projetos: destaque (Next Journey) → produtos no ar com print
 * → todos os projetos com filtro por categoria. Sem página por projeto:
 * cada card leva pro site e/ou pra história no blog. Links antigos
 * /Project?name=… são redirecionados pro post (next.config.js).
 */
const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const counts = useMemo(() => {
    const c = new Map<ProjectCategory, number>();
    for (const p of PROJECTS) {
      if (p.highlight) continue; // o destaque fica fora da lista
      c.set(p.category, (c.get(p.category) ?? 0) + 1);
    }
    return c;
  }, []);

  const list = PROJECTS.filter(
    (p) => !p.highlight && (filter === "all" || p.category === filter)
  );
  const stats = [
    { label: t("projects_page.stats.projects"), value: PROJECTS.length },
    { label: t("projects_page.stats.live"), value: PROJECTS.filter((p) => p.status === "live").length },
    { label: t("projects_page.stats.posts"), value: PROJECTS.filter((p) => p.blogSlug).length },
  ];

  return (
    <div>
      <HeadPages
        path="/Project"
        title={t("projects_page.meta_title")}
        description={t("projects_page.meta_description")}
      />
      <Header />

      <main>
        {/* hero + destaque */}
        <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #72A1FF 1px, transparent 1px), linear-gradient(to bottom, #72A1FF 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse at 30% 30%, black 15%, transparent 65%)",
            }}
          />
          <div className="relative mx-auto grid max-w-6xl items-stretch gap-10 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-center">
              <p className="font-mono text-sm text-brand-from">{t("projects_page.label")}</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-6xl">
                {t("projects_page.title")}
              </h1>
              <p className="mt-6 max-w-xl text-lg text-ink-muted">{t("projects_page.intro")}</p>

              <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="text-xs text-ink-muted">{s.label}</dt>
                    <dd className="mt-1 text-4xl font-bold text-ink">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <HighlightCard project={highlightProject} />
          </div>
        </section>

        {/* produtos no ar */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
          <Reveal className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-bold text-ink">{t("projects_page.live_title")}</h2>
            <p className="text-sm text-ink-muted">{t("projects_page.live_subtitle")}</p>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {liveProducts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 80} className="h-full">
                <ProductCard project={p} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* todos */}
        <section id="todos" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:px-10">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-ink">{t("projects_page.all_title")}</h2>
              <p className="mt-2 text-sm text-ink-muted">
                {t("projects_page.all_count", { count: list.length })}
              </p>
            </div>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label={t("projects_page.all_title")}>
              {(["all", ...CATEGORY_ORDER] as const).map((id) => {
                const active = filter === id;
                const count = id === "all" ? PROJECTS.length - 1 : counts.get(id) ?? 0;
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
                    {id === "all" ? t("projects_page.filter_all") : t(`projects_page.categories.${id}`)}
                    <span className="ml-1.5 font-mono text-[11px] text-ink-muted">{count}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={`${filter}-${p.slug}`} delay={(i % 3) * 70} className="h-full">
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* cta */}
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-8 sm:px-10">
          <Reveal className="grid gap-6 rounded-3xl border border-border bg-gradient-to-br from-brand-to/20 via-surface to-surface p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-ink sm:text-3xl">{t("projects_page.cta_title")}</h2>
              <p className="mt-2 max-w-xl text-ink-muted">{t("projects_page.cta_text")}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand-from hover:text-brand-from"
              >
                {t("projects_page.cta_blog")}
              </Link>
              <Link
                href="/Contact"
                className="rounded-full bg-gradient-to-r from-brand-from to-brand-to px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                {t("projects_page.cta_contact")}
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
