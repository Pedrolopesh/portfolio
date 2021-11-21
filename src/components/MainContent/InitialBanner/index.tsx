// import HomeBG from '../../assets/img/home-bg.png'
// import ComputerAnimationAsset from '../../../assets/img/computer.png'
// import CubeAnimationAsset from '../../assets/img/cubeAsset.png'
// import CubeAnimationAsset from '../../../assets/img/cubeAsset.png'
// import animationScroll from '../../../assets/animations/animation_scroll.gif';
import { useTranslation } from "react-i18next";
import Style from '../../../styles/mainStyles/InitialBanner.module.css'
const InitialBanner = () => {
    const { t } = useTranslation();

    return (
        <>

            <div className={Style.Container}>
                 <div className={Style.ContainerLeft}>
                    <div className={Style.ContainerTexts}>

                        {/* <BannerTitle> Pedro Lopes </BannerTitle> */}
                        <h1 className={Style.BannerTitle}> {t('title_banner')} </h1>
                        <hr className={Style.UnderScore} />
                        <p className={Style.TextDescription}>{t('overview_text_banner')}</p>
                    </div>
                 </div>

                 <div className={Style.ContainerRigth}>
                    <div className={Style.ContainerAssetsAnimation}> 
                        <img className={Style.CubeAnimation} src='/img/cubeAsset.png' alt="Cube Animation asset" />
                        <img className={Style.ComputerAnimation} src='/img/computer.png' alt="Computer Animation" />
                    </div>
                    <img className={Style.BgWhite} src='/img/home-bg.png'  alt="Home White BG" />
                 </div>
            </div>

            {/* <AnimationScroll src={animationScroll} alt="animation scroll" /> */}
        </>
    )
}

export default InitialBanner;