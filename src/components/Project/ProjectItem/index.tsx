import type { IProjectInfoItem } from "../../../typings/IProjectContent";
import { useTranslation } from "react-i18next";
import { BsArrowLeft } from "react-icons/bs";

// nesta tela returnPage sempre é fornecido pelo caller (Project.tsx),
// diferente de IProjectInfoItem onde ele é opcional
interface IProjectItemProps extends IProjectInfoItem {
  returnPage: () => void;
}

const ProjectItem = ({ projectInfo, returnPage }: IProjectItemProps) => {
  const { t } = useTranslation();

  const redirectNewTab = (routerPath: string) => {
    window.open(routerPath, "_blank");
  };

  const hasFinalSection =
    t(projectInfo.finalDescription.title) !== "" &&
    t(projectInfo.finalDescription.description) !== "";

  return (
    <article className="mx-auto max-w-3xl px-6 pt-36 pb-24 sm:px-10">
      <button
        type="button"
        onClick={returnPage}
        aria-label="Voltar"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-brand-to"
      >
        <BsArrowLeft size={20} />
      </button>

      <header className="mt-8">
        <h1 className="text-2xl font-bold text-ink sm:text-3xl">
          {t(projectInfo.title)}
        </h1>
        <p className="mt-4 text-ink-muted">{t(projectInfo.fisrtDescription)}</p>
        <p className="mt-6 text-xs tracking-wide text-ink-muted uppercase">
          Publicado em {t(projectInfo.projectDate)}
        </p>
      </header>

      <img
        src={projectInfo.urlBanner}
        alt=""
        className="mt-8 w-full rounded-2xl border border-border"
      />

      <div className="mt-12 flex flex-col gap-10">
        <section>
          <h3 className="border-b border-border pb-3 text-lg font-semibold text-ink">
            {t(projectInfo.problemDescription.title)}
          </h3>
          <p
            className="mt-4 text-ink-muted"
            dangerouslySetInnerHTML={{
              __html: t(projectInfo.problemDescription.description),
            }}
          />
        </section>

        <section>
          <h3 className="border-b border-border pb-3 text-lg font-semibold text-ink">
            {t(projectInfo.solutionDescription.title)}
          </h3>
          <p
            className="mt-4 text-ink-muted"
            dangerouslySetInnerHTML={{
              __html: t(projectInfo.solutionDescription.description),
            }}
          />
        </section>

        <section>
          <h3 className="border-b border-border pb-3 text-lg font-semibold text-ink">
            {t(projectInfo.exampleDescription.title)}
          </h3>
          <p className="mt-4 text-ink-muted">
            {t(projectInfo.exampleDescription.description)}
          </p>
          <img
            src={projectInfo.exampleDescription.imageUrl}
            alt=""
            className="mt-6 w-full rounded-2xl border border-border"
          />
        </section>

        {hasFinalSection && (
          <section>
            <h3 className="border-b border-border pb-3 text-lg font-semibold text-ink">
              {t(projectInfo.finalDescription.title)}
            </h3>
            <p
              className="mt-4 text-ink-muted"
              dangerouslySetInnerHTML={{
                __html: t(projectInfo.finalDescription.description),
              }}
            />
          </section>
        )}
      </div>

      <div className="mt-12 flex justify-center">
        <button
          type="button"
          onClick={() => redirectNewTab(projectInfo.projectLink)}
          className="rounded-full bg-gradient-to-r from-brand-from to-brand-to px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          {t("know_more_about_project")}
        </button>
      </div>
    </article>
  );
};

export default ProjectItem;
