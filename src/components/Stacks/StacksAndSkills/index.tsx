import { useTranslation } from "react-i18next";
import { TbWorldCode } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import useStacksAndSkills from "./useStackAndSkills";

const StacksAndSkills = () => {
  const { t } = useTranslation();
  const { internStacksAndSkills } = useStacksAndSkills();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
      <p className="max-w-2xl text-ink-muted">
        {t("stacks_page.pre_description")}
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {internStacksAndSkills.map((stack) => (
          <div
            key={stack.name}
            className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <div
              className="flex flex-col items-center gap-2 px-6 py-8"
              style={{ backgroundColor: stack.bgColor }}
            >
              {stack.icon}
              <h2 className="font-semibold text-white">{stack.name}</h2>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6">
              <p className="text-sm text-ink-muted">{stack.description}</p>

              {(stack.projectLink || stack.githubLink) && (
                <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-4">
                  <p className="text-xs text-ink-muted">
                    {stack.callForLink}
                  </p>
                  <div className="flex items-center gap-3">
                    {stack.projectLink && (
                      <a
                        href={stack.projectLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Ver projeto usando ${stack.name}`}
                        className="text-ink-muted transition-colors hover:text-brand-from"
                      >
                        <TbWorldCode size={24} />
                      </a>
                    )}
                    {stack.githubLink && (
                      <a
                        href={stack.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Ver código de ${stack.name} no GitHub`}
                        className="text-ink-muted transition-colors hover:text-brand-from"
                      >
                        <FaGithub size={24} />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StacksAndSkills;
