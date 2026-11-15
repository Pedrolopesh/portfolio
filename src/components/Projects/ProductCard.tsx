import type { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import type { Project } from "../../content/projects";
import useSpotlight from "../ui/useSpotlight";
import { ProjectIcon, StatusBadge, useLocalized } from "./parts";

/** Card de produto no ar, com o print do site (seção "No ar agora"). */
const ProductCard = ({ project, large = false }: { project: Project; large?: boolean }) => {
  const { t } = useTranslation();
  const local = useLocalized();
  const onPointerMove = useSpotlight();

  return (
    <a
      id={project.slug}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onPointerMove={onPointerMove}
      style={{ "--spot": project.accent } as CSSProperties}
      className="spotlight group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-border bg-surface transition duration-300 hover:-translate-y-1 hover:border-brand-from/50 hover:shadow-[0_24px_60px_-24px_rgba(46,111,239,0.45)]"
    >
      <div className={`relative overflow-hidden bg-bg ${large ? "aspect-[16/10]" : "aspect-[16/9]"}`}>
        {project.image && (
          <img
            src={project.image}
            alt={t("projects_page.screenshot_alt", { name: project.name })}
            loading="lazy"
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
      </div>

      <div className="relative z-10 -mt-10 flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <ProjectIcon project={project} size={44} />
          <div className="min-w-0">
            <h3 className={`font-bold text-ink ${large ? "text-2xl" : "text-lg"}`}>{project.name}</h3>
            <p className="font-mono text-[11px] text-ink-muted">{project.stack.join(" · ")}</p>
          </div>
        </div>
        <p className={`mt-4 text-ink-muted ${large ? "text-base" : "line-clamp-2 text-sm"}`}>
          {local(project.tagline)}
        </p>
        <div className="mt-auto flex items-center justify-between pt-5 text-sm">
          <StatusBadge status={project.status} />
          <span className="font-semibold text-brand-from transition group-hover:translate-x-0.5">
            {t("projects_page.visit")} ↗
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
