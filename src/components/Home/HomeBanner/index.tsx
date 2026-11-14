import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";
import CodePortrait from "./CodePortrait";

const HomeBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      {/* grade sutil + brilhos da marca no fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #72A1FF 1px, transparent 1px), linear-gradient(to bottom, #72A1FF 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 60% 45%, black 20%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-1/4 h-[420px] w-[420px] rounded-full bg-brand-to/20 blur-[120px]"
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr]">
        {/* texto */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="font-mono text-sm text-brand-from">
            <span className="text-ink-muted">{"<"}</span>
            {t("homeBanner.greeting")}
            <span className="text-ink-muted">{" />"}</span>
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-ink sm:text-6xl">
            Pedro Lopes
          </h1>

          <p className="mt-3 text-xl text-ink-muted sm:text-2xl">
            {t("homeBanner.role")}
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 text-2xl font-bold text-ink sm:text-3xl lg:justify-start">
            <span>Web</span>
            <span className="bg-gradient-to-r from-brand-from to-brand-to bg-clip-text text-transparent">
              <Typewriter
                words={[
                  t("homeBanner.title_typing_0"),
                  t("homeBanner.title_typing_1"),
                  t("homeBanner.title_typing_2"),
                  t("homeBanner.title_typing_3"),
                ]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </span>
          </div>

          <p className="mx-auto mt-6 max-w-lg text-ink-muted lg:mx-0">
            {t("overview_text_banner")}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-brand-from to-brand-to px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(46,111,239,0.35)] transition hover:brightness-110"
            >
              {t("homeBanner.cta_projects")}
            </a>
            <a
              href="#emailMe"
              className="rounded-full border border-border px-6 py-3 font-semibold text-ink transition hover:border-brand-from hover:text-brand-from"
            >
              {t("homeBanner.cta_contact")}
            </a>
          </div>
        </div>

        {/* retrato foto → código */}
        <div className="order-1 mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:order-2 lg:max-w-[440px]">
          <CodePortrait
            src="/img/profile-cutout.webp"
            precut
            alt={t("homeBanner.portrait_alt")}
            mode="mix"
            density={80}
            loop
            hold={10000}
            delay={2500}
            duration={2200}
          />
          <p className="mt-3 text-center font-mono text-xs text-ink-muted/70">
            {"// "}
            {t("homeBanner.portrait_hint")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
