import React from "react"
// import style from 'SecondBanner.module.css'
import style from '../../../styles/mainStyles/InitialBanner.module.css'
import { useTranslation } from "react-i18next";
const SecondBanner = () => {
    const { t } = useTranslation();
    
    return (
        <div className={style.secondBg}>
        {/* <img className={style.BgSecondWhite} src='img/home-2-bg.png'  alt="Home White BG" /> */}

        <div className={style.ContainerSecondBanner}>
            <div className={style.containerAnimation}>
                <img className={style.animationBanner} src='/animations/animation_design_banner.gif' alt='animation person work' />
            </div>

            <div>
            <div className={style.ContainerLeft}>
                    <div className={style.ContainerTexts}>

                        {/* <BannerTitle> Pedro Lopes </BannerTitle> */}
                        <h1 className={style.SecondBannerTitle}> {t('title_banner')} </h1>
                        <hr className={style.UnderScore} />
                        <p className={style.secondTextDescription}>{t('overview_text_banner')}</p>
                    </div>
                 </div>
            </div>
        </div>
        </div>
    )
}

export default SecondBanner