import { useTranslation } from "react-i18next";
import useStackAndSkills from "./useStackAndSkills";
import useRevealOnScroll from "../../../utils/useRevealOnScroll";

const StackAndSkills = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();
  const { internStacksAndSkills, showStacksQuantity, redirectToStackPage } =
    useStackAndSkills();

  return (
    <section
      ref={ref}
      className={`mx-auto max-w-6xl px-6 py-24 transition-all duration-700 sm:px-10 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <h2 className="text-2xl font-bold text-ink sm:text-3xl">
        {t("home_stacks_skills.title")}
      </h2>
      <p className="mt-3 max-w-2xl text-ink-muted">
        {t("home_stacks_skills.description")}
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {internStacksAndSkills.slice(0, showStacksQuantity).map((stack) => (
          <div
            key={stack.name}
            className="flex flex-col items-center gap-3 rounded-2xl border border-border p-6 text-center transition-transform hover:-translate-y-1"
            style={{ backgroundColor: stack.bgColor }}
          >
            {stack.icon}
            <span className="font-medium text-white">{stack.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={redirectToStackPage}
          className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand-to hover:text-brand-from"
        >
          {t("home_stacks_skills.see_more")}
        </button>
      </div>
    </section>
  );
};

export default StackAndSkills;
