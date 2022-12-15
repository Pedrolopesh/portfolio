import React from 'react';
import type { IProjectInfoItem } from '../../../typings/IProjectContent'

const ProjectItem = (props: IProjectInfoItem) => {
    
    React.useEffect(() => {
        console.log('aqui? ', props.projectInfo)
    }, [props])

    return (
        <>
            {
                props &&
                <div>
                    <div>
                        <h2>{props.projectInfo.title}</h2>
                        <p>{props.projectInfo.fisrtDescription}</p>
                        <p>PUBLICADO EM</p>
                        <p>{props.projectInfo.projectDate}</p>
                    </div>

                    <div>
                        <img src={props.projectInfo.urlBanner} alt="" />
                    </div>

                    <div>
                        <div className='flex'>
                            <h3>{props.projectInfo.problemDescription.title}</h3>
                            <hr />
                        </div>

                        <p>{props.projectInfo.problemDescription.description}</p>
                    </div>

                    <div>
                        <div className='flex'>
                            <h3>{props.projectInfo.solutionDescription.title}</h3>
                            <hr />
                        </div>

                        <p>{props.projectInfo.solutionDescription.description}</p>
                    </div>

                    <div>
                        <div className='flex'>
                            <h3>{props.projectInfo.exampleDescription.title}</h3>
                            <hr />
                        </div>

                        <p>{props.projectInfo.exampleDescription.description}</p>

                        <div>
                            <img src={props.projectInfo.exampleDescription.imageUrl} alt="" />
                        </div>
                    </div>

                    <div>
                        <div className='flex'>
                            <h3>{props.projectInfo.finalDescription.title}</h3>
                            <hr />
                        </div>

                        <p>{props.projectInfo.finalDescription.description}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default ProjectItem;