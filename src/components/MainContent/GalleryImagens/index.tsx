import React from 'react';
import style from '../../../styles/mainStyles/GalleryImagens.module.css'
import type { IImageObject } from '../../../typings/IImageObject'

const GalleryImagens = ({images}) => {
    return (
        <div className={style.containerCardsGallery}>
            {
                images.map((image: IImageObject, index: number) => {
                    return (
                        <div className={style.cardGallery} key={index}>
                            <img className={style.cardImage} src={image.src} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default GalleryImagens