import { useCallback, useMemo } from "react";
import style from "./style.module.css";
import useProjectWorks from "./useProjectWorks";
import { t } from "i18next";

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
  const {
    projectAndWorks,
    redirectTo,
    selectedSection,
    setSelectedSection,
    setShowAnimation,
    showAnimation,
  } = useProjectWorks();

  const CardWorkMemo = useCallback(
    () => {
      const selectedSectionIndex = projectAndWorks.findIndex(
        (section) => section.name === selectedSection
      );

      return (
        <>
          {projectAndWorks[selectedSectionIndex]?.projects.map(
            (card, index) => (
              <div key={index} className={`${style.ContainerProjectCards}`}>
                <div
                  className={style.CardItemProjects}
                  onMouseOver={() => {
                    setShowAnimation(index);
                  }}
                  onMouseOut={() => {
                    setShowAnimation(-1);
                  }}
                  // onClick={() => { setShowAnimation(index) }}
                  // eslint-disable-next-line react/jsx-no-duplicate-props
                  onClick={() => {
                    redirectTo(card.url);
                  }}
                  key={index}
                >
                  <img
                    className={
                      showAnimation === index
                        ? style.showImageEffect
                        : style.hideImageEffect
                    }
                    src={card.image}
                    alt=""
                  />

                  <div
                    className={
                      showAnimation === index
                        ? style.containerShowDescriptions
                        : style.containerHideDescriptions
                    }
                  >
                    <div
                      className={
                        showAnimation === index
                          ? style.showTextContainer
                          : style.hideTextContainer
                      }
                    >
                      <div>
                        <h3
                          className={
                            showAnimation === index
                              ? style.showTitle
                              : style.hideTitle
                          }
                        >
                          {t(card.title)}
                        </h3>

                        <p
                          className={
                            showAnimation === index
                              ? style.showDescription
                              : style.hideDescription
                          }
                        >
                          {t(card.description)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <h3>{card.title}</h3> */}
                  {/* <p>{card.description}</p> */}
                </div>
              </div>
            )
          )}
        </>
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [showAnimation, selectedSection]
  );

  return (
    <div>
      <h1>Works and Projects</h1>

      <div>
        {projectAndWorks.map((section, index) => (
          <div key={index}>
            <button onClick={() => setSelectedSection(section.name)}>
              <p>{section.name}</p>
            </button>
          </div>
        ))}
      </div>

      <div>
        <CardWorkMemo />
      </div>
    </div>
  );
};

export default ProjectsAndWorks;
