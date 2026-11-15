import type { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import type { Project } from "../../content/projects";
import useSpotlight from "../ui/useSpotlight";
import { ProjectIcon, StatusBadge, useLocalized } from "./parts";

/**
 * Linha da vitrine "No ar agora": print do site dentro de uma moldura de
 * navegador (com o domínio na barra) + texto ao lado, alternando os lados.
 */
const ShowcaseRow = ({ project, index }: { project: Project; index: number }) => {
  const { t } = useTranslation();
  const local = useLocalized();
  const onPointerMove = useSpotlight();
  const reversed = index % 2 === 1;
  const domain = project.url ? new URL(project.url).hostname.replace(/^www\./, "") : "";

  return (
    <article id={project.slug} className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-14">
      {/* moldura de navegador */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        onPointerMove={onPointerMove}
        style={{ "--spot": project.accent } as CSSProperties}
        className={`spotlight group block overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_30px_70px_-35px_rgba(46,111,239,0.5)] transition duration-500 hover:-translate-y-1 hover:border-brand-from/50 ${
          reversed ? "lg:order-2" : ""
        }`}
      >
        <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
          <span className="h-2 w-2 rounded-full bg-ink-muted/30" />
          <span className="h-2 w-2 rounded-full bg-ink-muted/30" />
          <span className="h-2 w-2 rounded-full bg-ink-muted/30" />
          <span className="ml-2 flex-1 truncate rounded-md bg-bg px-3 py-1 font-mono text-[11px] text-ink-muted">
            {domain}
          </span>
        </div>
        <div className="aspect-[16/10] overflow-hidden bg-bg">
          {project.image && (
            <img
              src={project.image}
              alt={t("projects_page.screenshot_alt", { name: project.name })}
              loading="lazy"
              className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
            />
          )}
        </div>
      </a>

      {/* texto */}
      <div className={reversed ? "lg:order-1" : ""}>
        <p className="font-mono text-sm text-brand-from">{String(index + 1).padStart(2, "0")}</p>
        <div className="mt-3 flex items-center gap-4">
          <ProjectIcon project={project} size={52} />
          <div>
            <h3 className="text-2xl font-bold text-ink sm:text-3xl">{project.name}</h3>
            {project.role && <p className="font-mono text-xs text-brand-from">{local(project.role)}</p>}
          </div>
        </div>
        <p className="mt-5 text-lg text-ink-muted">{local(project.tagline)}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {[...project.platforms, ...project.stack].map((s) => (
            <span key={s} className="rounded-full border border-border px-2.5 py-1 text-xs text-ink-muted">
              {s}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-5">
          <StatusBadge status={project.status} />
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-brand-from transition hover:text-ink"
          >
            {t("projects_page.visit")} ↗
          </a>
        </div>
      </div>
    </article>
  );
};

export default ShowcaseRow;
