import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import useRevealOnScroll from "../../../utils/useRevealOnScroll";

const COMPANIES = [
  "/img/company_1.png",
  "/img/company_2.png",
  "/img/company_3.png",
  "/img/company_4.png",
  "/img/company_5.png",
];

const AboutMe = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  const redirectToProjects = () => router.push("/Project");
  const redirectToContact = () => router.push("/Contact");

  return (
    <section
      ref={ref}
      className={`mx-auto max-w-6xl px-6 py-24 transition-all duration-700 sm:px-10 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70 grayscale">
        {COMPANIES.map((src) => (
          <img key={src} src={src} alt="" className="h-8 object-contain sm:h-10" />
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-ink-muted">
        Copyright ©️ todos os direitos reservados a todas as marcas — parcerias
        anteriores e empresas que passei
      </p>

      <div className="mt-16 grid gap-10 rounded-3xl border border-border bg-surface p-8 sm:p-10 lg:grid-cols-[auto_1fr] lg:items-center">
        <img
          src="/img/profile-pic.png"
          alt="Pedro Lopes"
          className="h-32 w-32 rounded-2xl object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            {t("home_about_me.about_me_title")}
          </h2>
          <p className="mt-4 text-ink-muted">
            {t("home_about_me.bout_me_description_0")}
          </p>
          <p className="mt-4 text-ink-muted">
            {t("home_about_me.bout_me_description_1")}
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-6 text-center">
        <div>
          <h3 className="text-xl font-semibold text-ink">
            {t("home_about_me.contact_me_title")}
          </h3>
          <p className="mt-2 text-ink-muted">
            {t("home_about_me.contact_me_text")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={redirectToContact}
            className="rounded-full bg-gradient-to-r from-brand-from to-brand-to px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            {t("button_about_me_hire")}
          </button>
          <button
            type="button"
            onClick={redirectToProjects}
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand-to"
          >
            {t("button_about_me_know_more")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
