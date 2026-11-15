import Link from "next/link";
import { useTranslation } from "react-i18next";

import HeadPages from "../components/HeadPages";
import Header from "../components/Header";
import Footer from "../components/Home/Footer";
import Reveal from "../components/ui/Reveal";
import StatsTerminal from "../components/Projects/StatsTerminal";
import HighlightBanner from "../components/Projects/HighlightBanner";
import ShowcaseRow from "../components/Projects/ShowcaseRow";
import ArchiveList from "../components/Projects/ArchiveList";
import { PROJECTS, highlightProject, liveProducts } from "../content/projects";

/**
 * Landing de projetos, com cara própria (código/terminal):
 *  1. abertura + terminal com números do portfólio e do GitHub;
 *  2. faixa do projeto em destaque (Next Journey);
 *  3. "No ar agora": vitrine em zigue-zague com moldura de navegador;
 *  4. "Arquivo": demais projetos em lista, filtrados por pasta.
 * Links antigos /Project?name=… redirecionam pro blog (next.config.js).
 */
const Projects = () => {
  const { t } = useTranslation();

  const showcased = new Set([highlightProject.slug, ...liveProducts.map((p) => p.slug)]);
  const archive = PROJECTS.filter((p) => !showcased.has(p.slug));

  return (
    <div>
      <HeadPages
        path="/Project"
        title={t("projects_page.meta_title")}
        description={t("projects_page.meta_description")}
      />
      <Header />

      <main>
        {/* abertura + terminal */}
        <section className="relative overflow-hidden pb-14 pt-32 sm:pt-40">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #72A1FF 1px, transparent 1px), linear-gradient(to bottom, #72A1FF 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse at 70% 40%, black 15%, transparent 65%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[10%] top-24 h-[340px] w-[480px] rounded-full bg-brand-to/20 blur-[120px]"
          />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <p className="font-mono text-sm text-brand-from">{t("projects_page.label")}</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-6xl">
                {t("projects_page.title")}
              </h1>
              <p className="mt-6 max-w-xl text-lg text-ink-muted">{t("projects_page.intro")}</p>
              <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
                <a href="#no-ar" className="rounded-lg border border-border px-3 py-2 text-ink-muted transition hover:border-brand-from hover:text-ink">
                  ./{t("projects_page.jump_live")}
                </a>
                <a href="#arquivo" className="rounded-lg border border-border px-3 py-2 text-ink-muted transition hover:border-brand-from hover:text-ink">
                  ./{t("projects_page.jump_archive")}
                </a>
              </div>
            </div>
            <StatsTerminal projects={PROJECTS.length} />
          </div>
        </section>

        {/* destaque */}
        <section className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
          <Reveal>
            <HighlightBanner project={highlightProject} />
          </Reveal>
        </section>

        {/* vitrine */}
        <section id="no-ar" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:px-10">
          <Reveal>
            <p className="font-mono text-sm text-brand-from">{t("projects_page.live_label")}</p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">{t("projects_page.live_title")}</h2>
            <p className="mt-3 max-w-xl text-ink-muted">{t("projects_page.live_subtitle")}</p>
          </Reveal>

          <div className="mt-14 space-y-20 lg:space-y-28">
            {liveProducts.map((p, i) => (
              <Reveal key={p.slug}>
                <ShowcaseRow project={p} index={i} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* arquivo */}
        <section id="arquivo" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:px-10">
          <Reveal className="mb-8">
            <p className="font-mono text-sm text-brand-from">{t("projects_page.archive_label")}</p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">{t("projects_page.archive_title")}</h2>
            <p className="mt-3 max-w-xl text-ink-muted">{t("projects_page.archive_subtitle")}</p>
          </Reveal>
          <Reveal>
            <ArchiveList projects={archive} />
          </Reveal>
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
