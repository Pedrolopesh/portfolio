import React from 'react';
import type { IProjectInfoItem } from '../../../typings/IProjectContent'
import { useTranslation } from "react-i18next";
import style from '../../../styles/mainStyles/ProjectItem.module.css'
import { BsArrowLeft } from 'react-icons/bs'

const ProjectItem = (props: IProjectInfoItem) => {
    const { t } = useTranslation();
    
    React.useEffect(() => {
        // console.log('aqui? ', props.projectInfo)
    }, [props])

    const redirectNewTab = (routerPath:string) => {
        window.open(routerPath,'_blank');
    }


    return (
        <>

            {
                props &&
                <div className='main-body-container-fit ac'>
                    <BsArrowLeft
                        size={50}
                        className={style.arrowBack} 
                        onClick={() => props.returnPage()} 
                    />
                    <div className={style.containerFirstText}>
                        <h2>{t(props.projectInfo.title)}</h2>
                        <p className={style.firstDescription}>{t(props.projectInfo.fisrtDescription)}</p>
                        <p>PUBLICADO EM</p>
                        <p>{t(props.projectInfo.projectDate)}</p>
                    </div>

                    <div className={style.containerBanner}>
                        <img className={style.imageBanner} src={props.projectInfo.urlBanner} alt="" />
                    </div>

                    <div className={style.containerContent}>
                        <div className='flex'>
                            <h3 className={style.firstContentTitle}>{t(props.projectInfo.problemDescription.title)}</h3>
                            <hr />
                        </div>

                        <p dangerouslySetInnerHTML={{ __html: t(props.projectInfo.problemDescription.description) }}></p>
                    </div>

                    <div className={style.containerContent}>
                        <div className='flex'>
                            <h3 className={style.firstContentTitle}>{t(props.projectInfo.solutionDescription.title)}</h3>
                            <hr />
                        </div>

                        <p dangerouslySetInnerHTML={{ __html: t(props.projectInfo.solutionDescription.description) }}></p>
                    </div>

                    <div className={style.containerContent}>
                        <div className='flex'>
                            <h3 className={style.firstContentTitle}>{t(props.projectInfo.exampleDescription.title)}</h3>
                            <hr />
                        </div>

                        <p>{t(props.projectInfo.exampleDescription.description)}</p>

                        <div className={style.containerLastImageBanner}>
                            <img className={style.lastImageBanner} src={props.projectInfo.exampleDescription.imageUrl} alt="" />
                        </div>
                    </div>

                    {
                        t(props.projectInfo.finalDescription.title) !== '' && 
                        t(props.projectInfo.finalDescription.description) !== '' &&

                        <div className={style.containerContent}>
                            <div className='flex'>
                                <h3 className={style.firstContentTitle}>{t(props.projectInfo.finalDescription.title)}</h3>
                                <hr />
                            </div>

                            <p dangerouslySetInnerHTML={{ __html: t(props.projectInfo.finalDescription.description) }}></p>
                        </div>
                    }

                    <div className={style.containerButtonKnowMore}>
                        <button onClick={ () => { redirectNewTab(props.projectInfo.projectLink) } } className={style.buttonKnowMore}> { t('know_more_about_project') } </button>
                    </div>
                </div>
            }
        </>
    )
}

export default ProjectItem;