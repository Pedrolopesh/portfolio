import Link from "next/link";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import type { Project, ProjectCategory } from "../../content/projects";
import { CATEGORY_ORDER } from "../../content/projects";
import { ProjectIcon, StatusBadge, useLocalized } from "./parts";

/**
 * "Arquivo": os demais projetos numa lista tipo índice de arquivos, com
 * filtro no estilo de pastas (`trabalho/`, `pessoais/`…). A linha inteira
 * leva pra história no blog (ou pro site); o link do site fica por cima.
 */
const ArchiveList = ({ projects }: { projects: Project[] }) => {
  const { t } = useTranslation();
  const local = useLocalized();
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const folders = useMemo(
    () => CATEGORY_ORDER.filter((c) => projects.some((p) => p.category === c)),
    [projects]
  );
  const list = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2 font-mono text-sm" role="tablist" aria-label={t("projects_page.archive_title")}>
        {(["all", ...folders] as const).map((id) => {
          const active = filter === id;
          const count = id === "all" ? projects.length : projects.filter((p) => p.category === id).length;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(id)}
              className={`rounded-lg border px-3 py-1.5 transition ${
                active ? "border-brand-from bg-brand-from/10 text-ink" : "border-border text-ink-muted hover:text-ink"
              }`}
            >
              {id === "all" ? "~/" : `${t(`projects_page.folders.${id}`)}/`}
              <span className="ml-2 text-[11px] text-ink-muted">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-border">
        <div className="hidden grid-cols-[minmax(0,2.4fr)_minmax(0,1fr)_minmax(0,1.3fr)_auto] gap-6 border-b border-border bg-surface/60 px-5 py-3 font-mono text-[11px] uppercase tracking-wider text-ink-muted md:grid">
          <span>{t("projects_page.col_project")}</span>
          <span>{t("projects_page.col_category")}</span>
          <span>{t("projects_page.col_stack")}</span>
          <span className="w-24 text-right">{t("projects_page.col_status")}</span>
        </div>

        <ul>
          {list.map((p) => {
            const href = p.blogSlug ? `/blog/${p.blogSlug}` : p.url;
            const internal = Boolean(p.blogSlug);
            return (
              <li
                key={`${filter}-${p.slug}`}
                id={p.slug}
                className="group relative grid scroll-mt-28 grid-cols-1 gap-3 border-b border-border px-5 py-4 transition last:border-b-0 hover:bg-surface md:grid-cols-[minmax(0,2.4fr)_minmax(0,1fr)_minmax(0,1.3fr)_auto] md:items-center md:gap-6"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <ProjectIcon project={p} size={40} />
                  <div className="min-w-0">
                    <p className="font-semibold text-ink">
                      {href &&
                        (internal ? (
                          <Link href={href} className="after:absolute after:inset-0 focus-visible:outline-none">
                            {p.name}
                          </Link>
                        ) : (
                          <a href={href} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0 focus-visible:outline-none">
                            {p.name}
                          </a>
                        ))}
                      <span className="ml-2 text-brand-from opacity-0 transition group-hover:opacity-100" aria-hidden="true">
                        {internal ? "→" : "↗"}
                      </span>
                    </p>
                    <p className="truncate text-sm text-ink-muted">{local(p.tagline)}</p>
                  </div>
                </div>
                <p className="font-mono text-xs text-ink-muted">
                  {t(`projects_page.folders.${p.category}`)}
                  {p.role && <span className="block text-brand-from/90">{local(p.role)}</span>}
                </p>
                <p className="truncate font-mono text-xs text-ink-muted">{p.stack.slice(0, 3).join(" · ")}</p>
                <div className="flex items-center gap-4 md:w-24 md:justify-end">
                  <StatusBadge status={p.status} />
                  {p.blogSlug && p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t("projects_page.visit")}: ${p.name}`}
                      className="relative z-10 text-ink-muted transition hover:text-ink md:hidden"
                    >
                      ↗
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ArchiveList;
