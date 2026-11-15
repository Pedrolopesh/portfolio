import Link from "next/link";
import type { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import type { Project } from "../../content/projects";
import useSpotlight from "../ui/useSpotlight";
import { StatusBadge, useLocalized } from "./parts";

/**
 * Faixa larga do projeto em destaque (Next Journey) em /Project, no clima
 * do app: "capítulo atual", ícone em pixel art e selos de EXP flutuando.
 * Sem arte do jogo (licenças LPC exigem crédito) — só o ícone do app.
 */
const XP = [
  { label: "+10 EXP", className: "left-[12%] top-[18%]", delay: "0s" },
  { label: "+5 🪙", className: "right-[10%] top-[30%]", delay: "1.2s" },
  { label: "LVL 2", className: "left-[18%] bottom-[16%]", delay: "2.1s" },
  { label: "+25 EXP", className: "right-[16%] bottom-[22%]", delay: "0.6s" },
];

const HighlightBanner = ({ project }: { project: Project }) => {
  const { t } = useTranslation();
  const local = useLocalized();
  const onPointerMove = useSpotlight();

  return (
    <article
      id={project.slug}
      onPointerMove={onPointerMove}
      style={{ "--spot": "#A78BFA" } as CSSProperties}
      className="spotlight relative grid scroll-mt-28 overflow-hidden rounded-3xl border border-violet-400/30 bg-[#140c2b] lg:grid-cols-[1.15fr_0.85fr]"
    >
      <div className="relative z-10 flex flex-col p-8 sm:p-10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-violet-500/20 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-violet-200">
            {t("projects_page.highlight_chapter")}
          </span>
          <StatusBadge status={project.status} />
        </div>

        <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">{project.name}</h2>
        <p className="mt-2 font-mono text-xs text-violet-200/80">{project.platforms.join(" · ")}</p>
        <p className="mt-5 max-w-xl text-lg text-violet-100/85">{local(project.tagline)}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="rounded-full border border-violet-300/20 px-2.5 py-1 text-xs text-violet-100/80">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/Contact"
            className="rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
          >
            {t("projects_page.notify")}
          </Link>
          <span className="text-sm text-violet-100/70">{t("projects_page.coming_soon")}</span>
        </div>
      </div>

      {/* painel decorativo */}
      <div aria-hidden="true" className="relative min-h-[260px] border-t border-violet-400/20 lg:border-l lg:border-t-0">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #a78bfa 1px, transparent 1px), linear-gradient(to bottom, #a78bfa 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            maskImage: "radial-gradient(circle at 50% 50%, black 30%, transparent 75%)",
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/40 blur-[70px]" />
        {project.icon && (
          <img
            src={project.icon}
            alt=""
            width={144}
            height={144}
            style={{ imageRendering: "pixelated" }}
            className="nj-float absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 shadow-2xl"
          />
        )}
        {XP.map((xp) => (
          <span
            key={xp.label}
            style={{ animationDelay: xp.delay }}
            className={`nj-xp absolute rounded-md border border-violet-300/30 bg-[#1d1240]/90 px-2 py-1 font-mono text-[11px] text-amber-200 ${xp.className}`}
          >
            {xp.label}
          </span>
        ))}
      </div>
    </article>
  );
};

export default HighlightBanner;
