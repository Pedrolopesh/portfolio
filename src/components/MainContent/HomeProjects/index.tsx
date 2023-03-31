import React, { useState } from "react"
import style from '../../../styles/HomeProjects.module.css'
import { useRouter } from 'next/router'
import { t } from "i18next"

const HomeProjects = () => {
    const router = useRouter()
    const [showAnimation, setShowAnimation] = useState(-1)

    const projectCards = [
        {
            image: './img/projects/project_1.png',
            title: "projects.electrolux.title",
            description: "projects.electrolux.banner_description",
            url: '/Project?name=electrolux'
        },
        {
            image: './img/projects/project_2.png',
            title: "projects.the_chat.title",
            description: "projects.the_chat.banner_description",
            url: '/Project?name=the-chat'
        },
        {
            image: './img/projects/project_3.png',
            title: "projects.link_leito.title",
            description: "projects.link_leito.banner_description",
            url: '/Project?name=link-leito'
        },
    ]

    const redirectTo = (url: string) => {
        router.push(url)
    }

    return (
        <div>
            <div className={`${style.ContainerSectionText} main-body-container ac`}>
                <h3>{t('cases')}</h3>
                <h2><strong>{t('project')}</strong> {t('andWorks')}</h2>

                <button onClick={() => {redirectTo('/Project')}}> {t('all_projects')} </button>
            </div>

            <div className={`${style.ContainerProjectCards}`}>
                {projectCards.map((card, index) => (
                    <div
                        className={style.CardItemProjects} 
                        onMouseOver={() => { setShowAnimation(index) }} 
                        onMouseOut={() => { setShowAnimation(-1) }}
                        // onClick={() => { setShowAnimation(index) }}
                        // eslint-disable-next-line react/jsx-no-duplicate-props
                        onClick={ () => { redirectTo(card.url) } }
                        key={index}
                    >
                        <img
                            className={
                                showAnimation === index ? 
                                style.showImageEffect :
                                style.hideImageEffect
                            } 
                            src={card.image} 
                            alt=""
                        />

                        <div
                            className={
                                showAnimation === index ? 
                                style.containerShowDescriptions :
                                style.containerHideDescriptions
                            }
                            >
                                <div className={
                                    showAnimation === index ? 
                                    style.showTextContainer : 
                                    style.hideTextContainer
                                }>
                                    <div>
                                        <h3
                                            className={
                                                showAnimation === index ? 
                                                style.showTitle : 
                                                style.hideTitle
                                            }
                                        >{t(card.title)}</h3>

                                        <p
                                            className={
                                                showAnimation === index ? 
                                                style.showDescription :
                                                style.hideDescription
                                            }
                                        >{t(card.description)}</p>
                                    </div>
                                </div>
                        </div>

                        {/* <h3>{card.title}</h3> */}
                        {/* <p>{card.description}</p> */}
                    </div>
                ))}
            </div>

        </div>
    )
}


export default HomeProjects