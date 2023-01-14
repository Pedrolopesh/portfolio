import React from "react";

import { photos } from '../assets/mock-images';
import { useRouter } from 'next/router'
// import type {IImageObject} from '../typings/IImageObject'

import GalleryImagens from "../components/MainContent/GalleryImagens";
import ProjectComponent from '../components/MainContent/ProjectItem'

import {TripperInfo} from '../assets/ProjectContent/Triper';
import {LinkLeitoInfo} from '../assets/ProjectContent/LinkLeito';
import {EluxInfo} from '../assets/ProjectContent/Electrolux';

import {ComunityAlertInfo} from '../assets/ProjectContent/ComunityAlert'
import {MatchCoderInfo} from '../assets/ProjectContent/MatchCoder'
import {PetCaretInfo} from '../assets/ProjectContent/PetCare'

import {TheChatInfo} from '../assets/ProjectContent/TheChat'

import type { IProjectInfoItem } from '../typings/IProjectContent'

import HeadPages from '../components/HeadPages'
import FooterDesign from '../components/MainContent/FooterDesign'
import ChangeLang from '../components/ChangeLang'
import HeaderOptions from '../components/HeaderOptions'

const Project = () => {
  const router = useRouter()
  const [projectParam, setProjectParam] = React.useState<IProjectInfoItem>({
    projectInfo: {
      title: '',
      fisrtDescription: '',
      projectDate: '',
      urlBanner: '',
      problemDescription: {
          title: '',
          description: '',
      },
      solutionDescription: {
          title: '',
          description: '',
      },
      exampleDescription: {
          title: '',
          description: '',
          imageUrl: '',
      },
      finalDescription: {
          title: '',
          description: '',
      }
    }
  })

  console.log(router.query.name)

  const ProjectContentOption = [
    { projectName: 'electrolux', projectInfo: EluxInfo },
    { projectName: 'link-leito', projectInfo: LinkLeitoInfo },
    { projectName: 'triper', projectInfo: TripperInfo },
    { projectName: 'comunity-alert', projectInfo: ComunityAlertInfo },
    { projectName: 'match-coder', projectInfo: MatchCoderInfo },
    { projectName: 'pet-care', projectInfo: PetCaretInfo },
    { projectName: 'the-chat', projectInfo: TheChatInfo },
    { projectName: 'quest-game', projectInfo: TripperInfo },
    { projectName: 'blue-token', projectInfo: TripperInfo },
    { projectName: 'toro-token', projectInfo: TripperInfo },
    { projectName: 'genesis-bank', projectInfo: TripperInfo },
    { projectName: 'pet-system', projectInfo: TripperInfo }
  ]

  React.useEffect(() => {
    if (router.query.name !== undefined) {
      const findProject = ProjectContentOption.find((project) => {
        console.log(project)
        return project.projectName === router.query.name
      })
      // console.log('aqui aqui: ', findProject.projectInfo.projectInfo)
      setProjectParam(findProject.projectInfo)
    }
  }, [router.query.name])

  return (
    <div>
      <HeadPages />
      <HeaderOptions />
      <ChangeLang />
      {
        Object.keys(router.query).length === 0 ? 
          <GalleryImagens
            images={photos}
          /> 
        : 
        <>
          <ProjectComponent 
            projectInfo={projectParam.projectInfo}
          />
        </>
      }
      <FooterDesign />
    </div>
  );
}
export default Project
