import React, { useState } from "react"
import style from '../../../styles/HomeProjects.module.css'
import { useRouter } from 'next/router'
import {
    ContainerSectionText,
    CardItemProjects,
    ContainerProjectCards,
} from './style'

const HomeProjects = () => {
    const router = useRouter()
    const [showAnimation, setShowAnimation] = useState(0)

    const projectCards = [
        {
            image: './img/projects/project_1.png',
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia.",
            url: '/Project?name=the-chat'
        },
        {
            image: './img/projects/project_2.png',
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia.",
            url: '/Project?name=link-leito'
        },
        {
            image: './img/projects/project_3.png',
            title: "Project 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia.",
            url: '/Project?name=triper'
        },
    ]

    const redirectTo = (url: string) => {
        router.push(url)
    }

    return (
        <div>
            <ContainerSectionText className="main-body-container ac">
                <h3>CASES</h3>
                <h2><strong>Projetos</strong> e trabalhos</h2>

                <button>
                    TODOS OS PROJETOS
                </button>
            </ContainerSectionText>

            <ContainerProjectCards>
                {projectCards.map((card, index) => (
                    <CardItemProjects 
                        onMouseOver={() => { setShowAnimation(index) }} 
                        onMouseOut={() => { setShowAnimation(-1) }}
                        onClick={() => { setShowAnimation(index) }}
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
                                            onClick={ () => { redirectTo(card.url) } }
                                            className={
                                                showAnimation === index ? 
                                                style.showTitle : 
                                                style.hideTitle
                                            }
                                        >{card.title}</h3>

                                        <p
                                            className={
                                                showAnimation === index ? 
                                                style.showDescription :
                                                style.hideDescription
                                            }
                                        >{card.description}</p>
                                    </div>
                                </div>
                        </div>

                        {/* <h3>{card.title}</h3> */}
                        {/* <p>{card.description}</p> */}
                    </CardItemProjects>
                ))}
            </ContainerProjectCards>

        </div>
    )
}


export default HomeProjects