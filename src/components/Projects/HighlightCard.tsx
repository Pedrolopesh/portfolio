import Link from "next/link";
import type { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import type { Project } from "../../content/projects";
import useSpotlight from "../ui/useSpotlight";
import { ProjectIcon, StatusBadge, useLocalized } from "./parts";

/**
 * Card de destaque (Next Journey). Visual próprio — grade de pixels e
 * brilho roxo — sem usar a arte do jogo (ela tem licenças LPC que exigem
 * crédito; ver CREDITS.md do repositório do app).
 */
const HighlightCard = ({ project, compact = false }: { project: Project; compact?: boolean }) => {
  const { t } = useTranslation();
  const local = useLocalized();
  const onPointerMove = useSpotlight();

  return (
    <article
      id={project.slug}
      onPointerMove={onPointerMove}
      style={{ "--spot": "#A78BFA" } as CSSProperties}
      className="spotlight relative h-full scroll-mt-28 overflow-hidden rounded-3xl border border-violet-400/30 bg-[#140c2b] p-7 sm:p-8"
    >
      {/* grade de pixels + brilho */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #a78bfa 1px, transparent 1px), linear-gradient(to bottom, #a78bfa 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(ellipse at 85% 0%, black 10%, transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-violet-600/40 blur-[90px]"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-violet-500/20 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-violet-200">
            {t("projects_page.highlight_badge")}
          </span>
          <StatusBadge status={project.status} />
        </div>

        <div className="mt-6 flex items-center gap-4">
          <ProjectIcon project={project} size={compact ? 56 : 72} />
          <div>
            <h3 className={`font-bold text-white ${compact ? "text-2xl" : "text-3xl"}`}>{project.name}</h3>
            <p className="mt-1 font-mono text-xs text-violet-200/80">
              {project.platforms.join(" · ")}
            </p>
          </div>
        </div>

        <p className={`mt-5 text-violet-100/80 ${compact ? "text-sm" : "text-base"}`}>
          {local(project.tagline)}
        </p>

        {!compact && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-violet-300/20 px-2.5 py-1 text-xs text-violet-100/80"
              >
                {s}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-7">
          <span className="text-sm text-violet-100/70">{t("projects_page.coming_soon")}</span>
          <Link
            href="/Contact"
            className="rounded-full bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-400"
          >
            {t("projects_page.notify")}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default HighlightCard;
