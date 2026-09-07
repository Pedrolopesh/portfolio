import { useTranslation } from "react-i18next";
import { BsArrowRight, BsCodeSquare } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuComputer } from "react-icons/lu";
import { useRouter } from "next/router";
import useRevealOnScroll from "../../../utils/useRevealOnScroll";

const SERVICE_CARDS = [
  { icon: HiOutlineLightBulb, titleKey: "homeServicesInfo.title_box_service_0" },
  { icon: LuComputer, titleKey: "homeServicesInfo.title_box_service_1" },
  { icon: BsCodeSquare, titleKey: "homeServicesInfo.title_box_service_2" },
];

const ServiceInfo = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  const redirectTo = (url: string) => router.push(url);

  return (
    <section
      ref={ref}
      className={`mx-auto max-w-6xl px-6 py-24 transition-all duration-700 sm:px-10 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            {t("homeServicesInfo.title_left")}
          </h2>
          <p className="mt-4 text-ink-muted">
            {t("homeServicesInfo.text_left_1")}
          </p>
          <p className="mt-4 text-ink-muted">
            {t("homeServicesInfo.text_left_2")}
          </p>

          <a
            href="mailto: pedrolopeshls@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-medium text-ink transition-colors hover:text-brand-from"
          >
            pedrolopeshls@gmail.com
            <BsArrowRight size={18} />
          </a>
        </div>

        <div className="rounded-3xl border border-border bg-surface p-8">
          <h3 className="text-xl font-semibold text-ink">
            {t("homeServicesInfo.title_rigth")}
          </h3>
          <p className="mt-4 text-ink-muted">
            {t("homeServicesInfo.text_rigth_0")}
          </p>
          <p className="mt-4 text-ink-muted">
            {t("homeServicesInfo.text_rigth_1")}
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {SERVICE_CARDS.map(({ icon: Icon, titleKey }) => (
          <button
            key={titleKey}
            type="button"
            onClick={() => redirectTo("/Project")}
            className="group flex flex-col items-start gap-4 rounded-2xl border border-border bg-surface p-6 text-left transition-colors hover:border-brand-to"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-from to-brand-to text-white">
              <Icon size={24} />
            </span>
            <h3 className="text-lg font-semibold text-ink">{t(titleKey)}</h3>
            <span className="flex items-center gap-2 text-sm text-ink-muted transition-colors group-hover:text-brand-from">
              {t("homeServicesInfo.text_box_service_foot")}
              <BsArrowRight size={16} />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ServiceInfo;
