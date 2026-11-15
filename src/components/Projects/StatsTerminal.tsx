import { useTranslation } from "react-i18next";
import CountUp from "../ui/CountUp";
import { formatDate } from "../Blog/PostCard";
import stats from "../../content/github-stats.json";

/**
 * Janela de "terminal" com os números do portfólio e do GitHub.
 * Os dados do GitHub vêm de src/content/github-stats.json
 * (scripts/update-github-stats.mjs).
 */
const StatsTerminal = ({ projects }: { projects: number }) => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language?.startsWith("pt") ? "pt-BR" : "en-US";

  const rows = [
    { key: "projects", value: projects, note: t("projects_page.terminal.projects_note") },
    {
      key: "contributions",
      value: stats.contributions,
      note: t("projects_page.terminal.contributions_note", { since: stats.since }),
    },
    {
      key: "repositories",
      value: stats.repositories,
      note: t("projects_page.terminal.repositories_note", {
        own: stats.ownRepositories,
        others: stats.contributedRepositories,
      }),
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-[#070b14] shadow-[0_30px_80px_-30px_rgba(46,111,239,0.45)]">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-ink-muted">~/pedro — github</span>
      </div>

      <div className="space-y-5 p-6 font-mono text-sm sm:p-7">
        <p className="text-ink-muted">
          <span className="text-emerald-400">$</span> portfolio stats --since {stats.since}
        </p>

        <dl className="space-y-4">
          {rows.map((row) => (
            <div key={row.key}>
              <div className="flex items-baseline gap-3">
                <dt className="shrink-0 text-ink-muted">{t(`projects_page.terminal.${row.key}`)}</dt>
                <span aria-hidden="true" className="min-w-4 flex-1 translate-y-[-3px] border-b border-dashed border-border" />
                <dd className="shrink-0 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  <CountUp value={row.value} locale={locale} />
                </dd>
              </div>
              <p className="mt-1 text-xs text-ink-muted/70">{`# ${row.note}`}</p>
            </div>
          ))}
        </dl>

        <p className="text-xs text-ink-muted/60">
          {t("projects_page.terminal.updated", {
            date: formatDate(stats.updatedAt, i18n.language),
          })}
          <span className="ml-1 inline-block h-3.5 w-2 translate-y-[2px] animate-pulse bg-brand-from" aria-hidden="true" />
        </p>
      </div>
    </div>
  );
};

export default StatsTerminal;
