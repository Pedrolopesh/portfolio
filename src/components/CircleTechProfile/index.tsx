import React, { useState, useEffect } from 'react';
import style from '../../styles/CircleTechProfile.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { photos } from '../../assets/mock-images';
import { useRouter } from 'next/router';
import { useTranslation } from "react-i18next";

export interface ISelectedStack {
    name: string;
    image: string;
    colors: Array<string>;
    usedStacks: Array<string>;
}

const CircleTechProfile = () => {
    const router = useRouter();
    const { t } = useTranslation();
    const [selectedStack, setSelectedStack] = useState<ISelectedStack>({
        name: '',
        image: '',
        colors: [],
        usedStacks: [],
    })

    const stackArray = [
        {
            name: 'Docker',
            image: '/img/circleTechProfile/Docker.svg',
            colors: ['#2497ED', '#89E3FF'],
            usedStacks: ['the_chat', 'quest_game', 'link_leito']
        },
        {
            name: 'Java',
            image: '/img/circleTechProfile/Java.svg',
            colors: ['#E76F00', '#5382A1'],
            usedStacks: ['link_leito']
        },
        {
            name: 'Typescript',
            image: '/img/circleTechProfile/Typescript.svg',
            colors: ['#89E3FF', '#2497ED'],
            usedStacks: ['Electrolux', 'Tripper', 'genesis_bank']
        },
        {
            name: 'Node',
            image: '/img/circleTechProfile/Node.svg',
            colors: ['#539E43', '#7BFF5F'],
            usedStacks: ['Electrolux', 'the_chat', 'quest_game']
        },
        {
            name: 'Python',
            image: '/img/circleTechProfile/Python.svg',
            colors: ['#5A9FD4', '#FFD43B'],
            usedStacks: ['the_chat']
        },
        {
            name: 'React',
            image: '/img/circleTechProfile/React.svg',
            colors: ['#00D8FF', '#00D8FF'],
            usedStacks: ['Electrolux', 'Tripper']
        },
        {
            name: 'SQL',
            image: '/img/circleTechProfile/SQL.svg',
            colors: ['#00D8FF', '#03ABEB'],
            usedStacks: ['link_leito', 'the_chat', 'quest_game']
        },
        {
            name: 'Vue',
            image: '/img/circleTechProfile/Vue.svg',
            colors: ['#41B883', '#35495E'],
            usedStacks: ['link_leito', 'the_chat', 'quest_game', 'blue_token', 'toro_token']
        },
    ]

    const findStackData = (searchItem: string) => {
        const findStack = photos.find((projects) => {
            return projects.name === searchItem
        })
        return findStack;
        // return findStack
    }

    const findStackImg = (searchItem: string) => {
        const findStackImg = findStackData(searchItem)
        return findStackImg.buttonImg;
    }

    const redirectToProjectPage = (routerParam: string) => {
        const findProject = findStackData(routerParam)
        router.push(findProject.url)
    }

    useEffect(() => {
        const locateModal: any = document.querySelector('#stackModalContainer')
        locateModal.style.display = 'none';
        
        setTimeout(() => {
            locateModal.style.display = 'block';
        }, 200)
    }, [])

    return (
        <div>
            <div className={style.orbit}>
                <div className={style.centerImage}>
                    <img src="/img/LogoType.png" alt="" className={style.imageCenter} />
                    <img src="/img/self-img-600.png" alt="" className={style.imageCenter} />
                </div>
                <ul className={style.containerTechIcons}>
                    {stackArray.map((stack, index) => {
                        return (
                            <li 
                                key={index} 
                                onClick={() => {setSelectedStack(stack)}}
                            >
                                <button className={style.buttonTechIcons}>
                                    <img src={stack.image} alt={stack.name} />
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div id='stackModalContainer' className={style.stackModalContainer}>
                <div className={`${selectedStack.name !== '' ? style.showStackModalBg : style.hidestackModalBg} ${style.stackModalBg}`}>
                    <div 
                        style={{ background: `linear-gradient(white, white) padding-box, linear-gradient(to right, ${selectedStack.colors[0]}, ${selectedStack.colors[1]}) border-box` }}
                        className={`${selectedStack.name !== '' ? style.showStackModal : style.hideStackModal} ${style.stackModalBox} ${style.dockerStyle}`}>
                        
                        <div className={style.headerStackModa}>
                            <h2>{selectedStack.name}</h2>
                            <button
                                className={style.closeModalStackButton}
                                onClick={() => {
                                    setSelectedStack({name: '', image: '', colors: [], usedStacks: []})
                                }}
                            >
                                <AiOutlineClose size={20} />
                            </button>
                        </div>

                        <div>
                            <p>{t(`stack.${selectedStack.name}`)}</p>
                            <hr />
                            <p className='text-center'>{t('click_know_more')}</p>
                            <div className={style.containerStackButton}>
                                {selectedStack.usedStacks.map((stacksArray, index) => {
                                    return (
                                     <div key={index*5} className={style.boxStackButton}>
                                        <button
                                            key={index}
                                            style={{ backgroundImage: `url(${findStackImg(stacksArray)})` }}
                                            onClick={() => {
                                                redirectToProjectPage(stacksArray)
                                            }}
                                            className={style.stackButton}
                                        >
                                        </button>
                                     </div>   
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CircleTechProfile