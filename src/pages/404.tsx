import Link from "next/link";
import { useTranslation } from "react-i18next";

import HeadPages from "../components/HeadPages";
import Header from "../components/Header";
import Footer from "../components/Home/Footer";

/** 404 no visual do site (terminal + caminhos pra seguir). */
const NotFound = () => {
  const { t } = useTranslation();

  const links = [
    { href: "/", label: t("not_found.home") },
    { href: "/Project", label: t("not_found.projects") },
    { href: "/blog", label: t("not_found.blog") },
  ];

  return (
    <div>
      <HeadPages title={t("not_found.meta_title")} />
      <Header />

      <main className="relative overflow-hidden px-6 pb-24 pt-36 sm:px-10 sm:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #72A1FF 1px, transparent 1px), linear-gradient(to bottom, #72A1FF 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at 50% 30%, black 15%, transparent 65%)",
          }}
        />

        <div className="relative mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-[#070b14]">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-ink-muted">~/pedro</span>
            </div>
            <div className="space-y-2 p-6 font-mono text-sm sm:p-8">
              <p className="text-ink-muted">
                <span className="text-emerald-400">$</span> cd ./esta-pagina
              </p>
              <p className="text-red-300">cd: no such file or directory (404)</p>
              <p className="text-ink-muted">
                <span className="text-emerald-400">$</span>
                <span className="ml-1 inline-block h-3.5 w-2 translate-y-[2px] animate-pulse bg-brand-from" aria-hidden="true" />
              </p>
            </div>
          </div>

          <p className="mt-10 font-mono text-sm text-brand-from">{t("not_found.label")}</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-5xl sm:leading-[1.2]">{t("not_found.title")}</h1>
          <p className="mt-4 text-lg text-ink-muted">{t("not_found.text")}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className={
                  i === 0
                    ? "rounded-full bg-gradient-to-r from-brand-from to-brand-to px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                    : "rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand-from hover:text-brand-from"
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer thanksForVisit={false} />
    </div>
  );
};

export default NotFound;
