import React, { useEffect } from "react";

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
import {questGameInfo} from '../assets/ProjectContent/QuestGame'
import {BlueTokenInfo} from '../assets/ProjectContent/BlueToken'

import {ToroTokennInfo} from '../assets/ProjectContent/ToroToken'
import {GenesisBanknInfo} from '../assets/ProjectContent/GenesisBank'
import {PetSystemInfo} from '../assets/ProjectContent/PetSystem'

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
      },
      projectLink: ''
    }
  })


  const ProjectContentOption = [
    { projectName: 'electrolux', projectInfo: EluxInfo },
    { projectName: 'link-leito', projectInfo: LinkLeitoInfo },
    { projectName: 'triper', projectInfo: TripperInfo },
    { projectName: 'comunity-alert', projectInfo: ComunityAlertInfo },
    { projectName: 'match-coder', projectInfo: MatchCoderInfo },
    { projectName: 'pet-care', projectInfo: PetCaretInfo },
    { projectName: 'the-chat', projectInfo: TheChatInfo },
    { projectName: 'quest-game', projectInfo: questGameInfo },
    { projectName: 'blue-token', projectInfo: BlueTokenInfo },
    { projectName: 'toro-token', projectInfo: ToroTokennInfo },
    { projectName: 'genesis-bank', projectInfo: GenesisBanknInfo },
    { projectName: 'pet-system', projectInfo: PetSystemInfo }
  ]

  React.useEffect(() => {
    if (router.query.name !== undefined) {
      const findProject = ProjectContentOption.find((project) => {
        return project.projectName === router.query.name
      })
      setProjectParam(findProject.projectInfo)
    }
  }, [router.query.name])

  const setbodyBg = () => {
    const body = document.querySelector('body');
    body.classList.add('design_bg');
    body.classList.remove('it_bg');
  }

  useEffect(() => {
    setbodyBg();
  }, [router])

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
            returnPage={() => router.push('/Project')}
            projectInfo={projectParam.projectInfo}
          />
        </>
      }
      <FooterDesign />
    </div>
  );
}
export default Project
