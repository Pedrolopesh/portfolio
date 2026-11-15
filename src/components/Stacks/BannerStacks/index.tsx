import { useTranslation } from "react-i18next";

const BannerStacks = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative flex h-[300px] items-end justify-center bg-cover bg-center pb-12 pt-28 sm:h-[380px] sm:items-center sm:pb-0"
      style={{ backgroundImage: "url(/img/stack-banner-bg.png)" }}
    >
      <div className="absolute inset-0 bg-bg/70" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg" />

      <h1 className="relative z-10 px-6 text-center text-3xl font-bold text-ink sm:text-4xl">
        {t("stacks_page.title_banner")}
      </h1>
    </section>
  );
};

export default BannerStacks;
