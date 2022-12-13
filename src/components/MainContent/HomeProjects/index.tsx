import React, { useState } from "react"
import style from '../../../styles/HomeProjects.module.css'
import {
    CardImage,
    CardItemProjects,
    ContainerProjectCards,
} from './style'

const HomeProjects = () => {
    const [showAnimation, setShowAnimation] = useState(0)

    const projectCards = [
        {
            image: './img/projects/project_1.png',
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia.",
        },
        {
            image: './img/projects/project_2.png',
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia.",
        },
        {
            image: './img/projects/project_3.png',
            title: "Project 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia.",
        },
    ]

    return (
        <ContainerProjectCards>
            <p>teste: {showAnimation}</p>
            {projectCards.map((card, index) => (
                <CardItemProjects 
                    onMouseOver={() => { setShowAnimation(index) }} 
                    onMouseOut={() => { setShowAnimation(-1) }}
                    key={index}
                >
                    <CardImage 
                        src={card.image} 
                        alt=""
                    />

                    <div 
                        className={
                            showAnimation === index ? 
                            style.containerShowDescriptions :
                            style.containerHideDescriptions
                        }>
                            <div>
                               <h3 
                                className={
                                    showAnimation === index ? 
                                    style.showTitle : 
                                    style.hideText
                                }>{card.title}</h3>

                                <p
                                className={
                                    showAnimation === index ? 
                                    style.showDescription :
                                    style.hideText
                                }
                                >{card.description}</p>
                            </div>
                    </div>

                    {/* <h3>{card.title}</h3> */}
                    {/* <p>{card.description}</p> */}
                </CardItemProjects>
            ))}
        </ContainerProjectCards>
    )
}


export default HomeProjects