import { useState } from "react";
import { useTranslation } from "react-i18next";

const VIDEO_ID = "txRuWn07YrU"; // mesmo episódio do About Me

/**
 * Nota discreta de "veja também" com o episódio de podcast. Mostra só uma
 * miniatura; o player do YouTube (youtube-nocookie) só é carregado quando
 * a pessoa clica — página mais leve e sem cookies até haver interesse.
 */
const PodcastNote = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <aside className="rounded-2xl border border-border/70 p-4 sm:p-5">
      {open ? (
        <div className="aspect-video w-full overflow-hidden rounded-xl">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1`}
            title={t("blog.podcast_title")}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group flex w-full items-center gap-4 text-left sm:gap-5"
        >
          <span className="relative aspect-video w-28 shrink-0 overflow-hidden rounded-lg bg-bg sm:w-36">
            <img
              src={`https://i.ytimg.com/vi/${VIDEO_ID}/mqdefault.jpg`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bg/80 text-ink transition group-hover:bg-brand-to">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </span>

          <span className="min-w-0 flex-1">
            <span className="block font-mono text-xs text-ink-muted/70">
              {t("blog.podcast_label")}
            </span>
            <span className="mt-1 block text-sm text-ink-muted">
              {t("home_about_me.podcast_title")}
            </span>
          </span>

          <span className="hidden shrink-0 text-sm text-ink-muted transition group-hover:text-brand-from sm:block">
            {t("blog.podcast_cta")} →
          </span>
        </button>
      )}
    </aside>
  );
};

export default PodcastNote;
