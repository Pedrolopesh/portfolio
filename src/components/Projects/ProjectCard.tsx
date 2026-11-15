import Link from "next/link";
import type { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import type { Project } from "../../content/projects";
import useSpotlight from "../ui/useSpotlight";
import { NewBadge, ProjectIcon, StatusBadge, metaLine, useLocalized } from "./parts";

/**
 * Card compacto de projeto (lista "Todos os projetos").
 * O card inteiro é clicável pelo link principal (história no blog ou
 * site); o link secundário fica por cima (z-10) pra continuar clicável.
 */
const ProjectCard = ({ project }: { project: Project }) => {
  const { t } = useTranslation();
  const local = useLocalized();
  const onPointerMove = useSpotlight();

  const primary = project.blogSlug
    ? { href: `/blog/${project.blogSlug}`, external: false, label: t("projects_page.story") }
    : project.url
      ? { href: project.url, external: true, label: t("projects_page.visit") }
      : null;
  const secondary =
    project.blogSlug && project.url
      ? { href: project.url, label: t("projects_page.visit") }
      : null;

  return (
    <article
      id={project.slug}
      onPointerMove={onPointerMove}
      style={{ "--spot": project.accent } as CSSProperties}
      className="spotlight group flex h-full scroll-mt-28 flex-col rounded-2xl border border-border bg-surface p-5 transition duration-300 hover:-translate-y-0.5 hover:border-brand-from/50"
    >
      <div className="flex items-start gap-4">
        <ProjectIcon project={project} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-ink">
              {primary ? (
                primary.external ? (
                  <a
                    href={primary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
                  >
                    {project.name}
                  </a>
                ) : (
                  <Link
                    href={primary.href}
                    className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
                  >
                    {project.name}
                  </Link>
                )
              ) : (
                project.name
              )}
            </h3>
            {project.isNew && <NewBadge />}
          </div>
          {project.role && (
            <p className="mt-0.5 font-mono text-[11px] text-brand-from/90">{local(project.role)}</p>
          )}
          <p className="mt-1.5 line-clamp-2 text-sm text-ink-muted">{local(project.tagline)}</p>
        </div>
      </div>

      <p className="mt-4 truncate font-mono text-[11px] text-ink-muted/80">{metaLine(project)}</p>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4 text-xs">
        <StatusBadge status={project.status} />
        <div className="flex items-center gap-4">
          {secondary && (
            <a
              href={secondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 text-ink-muted transition hover:text-ink"
            >
              {secondary.label} ↗
            </a>
          )}
          {primary && (
            <span className="font-semibold text-brand-from">
              {primary.label} {primary.external ? "↗" : "→"}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
