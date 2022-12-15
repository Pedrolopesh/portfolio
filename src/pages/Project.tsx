import React from "react";

import { photos } from '../assets/mock-images';
import { useRouter } from 'next/router'
// import type {IImageObject} from '../typings/IImageObject'

import GalleryImagens from "../components/MainContent/GalleryImagens";
import ProjectComponent from '../components/MainContent/ProjectItem'

import {TripperInfo} from '../assets/ProjectContent/Triper'

import type { IProjectInfoItem } from '../typings/IProjectContent'

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
    { projectName: 'triper', projectInfo: TripperInfo }
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
      <h2>Sortable Gallery</h2>
      <h3>Drag photo to rearrange</h3>

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
    </div>
  );
}
export default Project
