import { useTranslation } from "react-i18next";
import type { Project, ProjectStatus } from "../../content/projects";

/** Texto do projeto no idioma atual. */
export const useLocalized = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("pt") ? "pt" : "en";
  return (text: { pt: string; en: string }) => text[lang];
};

const STATUS_STYLE: Record<ProjectStatus, string> = {
  live: "border-emerald-400/40 text-emerald-300",
  dev: "border-amber-400/40 text-amber-300",
  archived: "border-border text-ink-muted",
  concept: "border-border text-ink-muted",
};

export const StatusBadge = ({ status }: { status: ProjectStatus }) => {
  const { t } = useTranslation();
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-medium ${STATUS_STYLE[status]}`}
    >
      {status === "live" && (
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
      )}
      {t(`projects_page.status.${status}`)}
    </span>
  );
};

export const NewBadge = () => {
  const { t } = useTranslation();
  return (
    <span className="rounded-full bg-brand-to/20 px-2 py-0.5 text-[11px] font-semibold text-brand-from">
      {t("projects_page.new")}
    </span>
  );
};

/** Ícone do projeto ou, sem ícone, um monograma na cor do projeto. */
export const ProjectIcon = ({ project, size = 48 }: { project: Project; size?: number }) => {
  const style = { width: size, height: size };
  if (project.icon) {
    return (
      <img
        src={project.icon}
        alt=""
        width={size}
        height={size}
        loading="lazy"
        style={{ ...style, imageRendering: project.slug === "next-journey" ? "pixelated" : "auto" }}
        className="shrink-0 rounded-xl border border-border object-cover"
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      style={{
        ...style,
        background: `linear-gradient(135deg, ${project.accent}, color-mix(in srgb, ${project.accent} 45%, #0A101E))`,
        fontSize: size * 0.42,
      }}
      className="flex shrink-0 items-center justify-center rounded-xl border border-white/10 font-bold text-white"
    >
      {project.name.charAt(0)}
    </span>
  );
};

/** "Web · Next.js · Tailwind" */
export const metaLine = (project: Project) =>
  [...project.platforms, ...project.stack].join(" · ");
