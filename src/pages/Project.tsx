import React from "react";

import { photos } from "../assets/mock-images";
import { useRouter } from "next/router";
// import type {IImageObject} from '../typings/IImageObject'

import GalleryImagens from "../components/Project/GalleryImagens";
import ProjectComponent from "../components/Project/ProjectItem";

import { TripperInfo } from "../assets/ProjectContent/Triper";
import { LinkLeitoInfo } from "../assets/ProjectContent/LinkLeito";
import { EluxInfo } from "../assets/ProjectContent/Electrolux";

import { ComunityAlertInfo } from "../assets/ProjectContent/ComunityAlert";
import { MatchCoderInfo } from "../assets/ProjectContent/MatchCoder";
import { PetCaretInfo } from "../assets/ProjectContent/PetCare";

import { TheChatInfo } from "../assets/ProjectContent/TheChat";
import { questGameInfo } from "../assets/ProjectContent/QuestGame";
import { BlueTokenInfo } from "../assets/ProjectContent/BlueToken";

import { ToroTokennInfo } from "../assets/ProjectContent/ToroToken";
import { GenesisBanknInfo } from "../assets/ProjectContent/GenesisBank";
import { PetSystemInfo } from "../assets/ProjectContent/PetSystem";

import type { IProjectInfoItem } from "../typings/IProjectContent";

import HeadPages from "../components/HeadPages";
import Header from "../components/Header";
import Footer from "../components/Home/Footer";

const Project = () => {
  const router = useRouter();
  const [projectParam, setProjectParam] = React.useState<IProjectInfoItem>({
    projectInfo: {
      title: "",
      fisrtDescription: "",
      projectDate: "",
      urlBanner: "",
      problemDescription: {
        title: "",
        description: "",
      },
      solutionDescription: {
        title: "",
        description: "",
      },
      exampleDescription: {
        title: "",
        description: "",
        imageUrl: "",
      },
      finalDescription: {
        title: "",
        description: "",
      },
      projectLink: "",
    },
  });

  const ProjectContentOption = [
    { projectName: "electrolux", projectInfo: EluxInfo },
    { projectName: "link-leito", projectInfo: LinkLeitoInfo },
    { projectName: "triper", projectInfo: TripperInfo },
    { projectName: "comunity-alert", projectInfo: ComunityAlertInfo },
    { projectName: "match-coder", projectInfo: MatchCoderInfo },
    { projectName: "pet-care", projectInfo: PetCaretInfo },
    { projectName: "the-chat", projectInfo: TheChatInfo },
    { projectName: "quest-game", projectInfo: questGameInfo },
    { projectName: "blue-token", projectInfo: BlueTokenInfo },
    { projectName: "toro-token", projectInfo: ToroTokennInfo },
    { projectName: "genesis-bank", projectInfo: GenesisBanknInfo },
    { projectName: "pet-system", projectInfo: PetSystemInfo },
  ];

  React.useEffect(() => {
    if (router.query.name !== undefined) {
      const findProject = ProjectContentOption.find((project) => {
        return project.projectName === router.query.name;
      });

      if (findProject) {
        // sincronizando o estado com a URL (?name=) — fonte externa,
        // é exatamente pra isso que serve o efeito aqui.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setProjectParam(findProject.projectInfo);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.name]);

  const returnPage = () => {
    router.back();
  };

  const projectSlug =
    typeof router.query.name === "string" ? router.query.name : undefined;
  const projectTitle = projectSlug
    ?.split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div>
      <HeadPages
        title={
          projectTitle
            ? `${projectTitle} | Projetos de Pedro Lopes`
            : "Projetos | Pedro Lopes"
        }
        description="Projetos desenvolvidos por Pedro Lopes."
        path={projectSlug ? `/Project?name=${projectSlug}` : "/Project"}
      />
      <Header />
      {Object.keys(router.query).length === 0 ? (
        <GalleryImagens images={photos} />
      ) : (
        <>
          <ProjectComponent
            returnPage={() => returnPage()}
            projectInfo={projectParam.projectInfo}
          />
        </>
      )}
      <Footer />
    </div>
  );
};
export default Project;
