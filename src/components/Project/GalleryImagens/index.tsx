import { useTranslation } from "react-i18next";
import type { IImageObject } from "../../../typings/IImageObject";
import { useRouter } from "next/router";

interface IGalleryImagensProps {
  images: IImageObject[];
}

const GalleryImagens = ({ images }: IGalleryImagensProps) => {
  const router = useRouter();
  const { t } = useTranslation();

  const redirectTo = (url: string) => router.push(url);

  return (
    <section className="mx-auto max-w-6xl px-6 pt-36 pb-24 sm:px-10">
      <h1 className="text-2xl font-bold text-ink sm:text-3xl">
        {t("project_clients")}
      </h1>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <button
            key={image.url}
            type="button"
            onClick={() => redirectTo(image.url)}
            aria-label={t(image.title)}
            className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-border text-left"
          >
            <div
              style={{ backgroundImage: `url(${image.src})` }}
              className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-bg via-bg/40 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="font-semibold text-ink">{t(image.title)}</h3>
              <p className="mt-1 text-sm text-ink-muted">{t(image.text)}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default GalleryImagens;
