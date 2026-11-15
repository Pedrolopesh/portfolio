import Link from "next/link";
import { useTranslation } from "react-i18next";

import Reveal from "../../ui/Reveal";
import HighlightCard from "../../Projects/HighlightCard";
import ProjectCard from "../../Projects/ProjectCard";
import { highlightProject, liveProducts } from "../../../content/projects";

/**
 * Prévia de projetos na Home: o destaque (Next Journey) + os produtos no
 * ar em cards compactos, com link pra landing completa em /Project.
 */
const ProjectsAndWorks = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:px-10">
      <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-sm text-brand-from">{t("home_projects.label")}</p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">{t("home_projects.title")}</h2>
          <p className="mt-3 max-w-xl text-ink-muted">{t("home_projects.subtitle")}</p>
        </div>
        <Link
          href="/Project"
          className="shrink-0 text-sm font-semibold text-brand-from transition hover:text-ink"
        >
          {t("home_projects.see_all")} →
        </Link>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <Reveal className="h-full lg:row-span-2">
          <HighlightCard project={highlightProject} compact />
        </Reveal>
        {liveProducts.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 80} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ProjectsAndWorks;
