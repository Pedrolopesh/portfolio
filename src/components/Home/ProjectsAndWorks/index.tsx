import { useTranslation } from "react-i18next";
import useProjectWorks from "./useProjectWorks";
import useRevealOnScroll from "../../../utils/useRevealOnScroll";

export type CardWorkProps = {
  card: {
    image: string;
    title: string;
    description: string;
    url: string;
  };
  index: number;
};

const ProjectsAndWorks = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();
  const { projectAndWorks, redirectTo, selectedSection, setSelectedSection } =
    useProjectWorks();

  const selectedSectionIndex = projectAndWorks.findIndex(
    (section) => section.name === selectedSection.name
  );

  return (
    <section
      ref={ref}
      className={`mx-auto max-w-6xl px-6 py-24 transition-all duration-700 sm:px-10 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <h2 className="text-2xl font-bold text-ink sm:text-3xl">
        {t("project_clients")}
      </h2>

      <div className="mt-8 flex flex-wrap gap-2">
        {projectAndWorks.map((section, index) => (
          <button
            key={section.name}
            type="button"
            onClick={() =>
              setSelectedSection({ name: section.name, position: index + 1 })
            }
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              selectedSectionIndex === index
                ? "bg-gradient-to-r from-brand-from to-brand-to text-white"
                : "border border-border text-ink-muted hover:text-ink"
            }`}
          >
            {section.name}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectAndWorks[selectedSectionIndex]?.projects.map((card) => (
          <button
            key={card.url}
            type="button"
            onClick={() => redirectTo(card.url)}
            aria-label={t(card.title)}
            className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-border text-left"
          >
            <img
              src={card.image}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-bg via-bg/40 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="font-semibold text-ink">{t(card.title)}</h3>
              <p className="mt-1 text-sm text-ink-muted">
                {t(card.description)}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProjectsAndWorks;
