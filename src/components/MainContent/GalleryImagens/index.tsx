import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import style from '../../../styles/mainStyles/GalleryImagens.module.css'
import type { IImageObject } from '../../../typings/IImageObject'
import { useRouter } from 'next/router'

const GalleryImagens = ({images}) => {
    const router = useRouter()
    const { t } = useTranslation();

    const [showAnimationImage, setShowAnimationImage] = useState(0)

    const redirectTo = (url: string) => {
        router.push(url)
    }

    return (
        <div>
            <h1 className={style.titleCardsGallery}> Projetos e Clientes</h1>

            <div className={style.containerCardsGallery}>

            {
                images.map((image: IImageObject, index: number) => {
                    return (
                        <div
                            onMouseOver={() => { setShowAnimationImage(index) }} 
                            onMouseOut={() => { setShowAnimationImage(-1) }}
                            onClick={() => { setShowAnimationImage(index) }} 
                            className={style.cardGallery} 
                            key={index}
                        >
                            <div
                                style={{backgroundImage: `url(${image.src})`}}
                                className={`${
                                    showAnimationImage === index ? 
                                    style.showImageEffect : 
                                    style.hideImageEffect
                                }`
                                }
                            >
                                <div
                                    className={
                                        showAnimationImage === index ? 
                                        style.containerShowDescriptions :
                                        style.containerHideDescriptions
                                    }
                                >
                                    <div
                                        onClick={ () => { redirectTo(image.url) } }
                                        className={
                                            showAnimationImage === index ? 
                                            style.showTextContainer : 
                                            style.hideTextContainer
                                        }
                                    >
                                        <div
                                        className={style.containerTextHover}
                                        >
                                            <h3
                                                className={
                                                    showAnimationImage === index ? 
                                                    style.showTitle : 
                                                    style.hideTitle
                                                }
                                            >{t(image.title)}</h3>

                                            <p
                                                className={
                                                    showAnimationImage === index ? 
                                                    style.showDescription :
                                                    style.hideDescription
                                                }
                                            >{t(image.text)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default GalleryImagens