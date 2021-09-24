import { 
    Container, 
    ContainerLeft,
    ContainerRigth,
    ContainerTexts,
    // ContainerButtons,
    // WorkButton,
    ContainerAssetsAnimation, 
    BgWhite, 
    CubeAnimation,
    ComputerAnimation,
    BannerTitle,
    UnderScore,
    TextDescription,
    AnimationScroll,
} from './style'
import HomeBG from '../../assets/img/home-bg.png'
import ComputerAnimationAsset from '../../assets/img/computer.png'
import CubeAnimationAsset from '../../assets/img/cubeAsset.png'
import animationScroll from '../../assets/animations/animation_scroll.gif';
import { useTranslation } from "react-i18next";

const InitialBanner = () => {
    const { t } = useTranslation();

    return (
        <>

            <Container>
                 <ContainerLeft>
                    <ContainerTexts>

                        {/* <BannerTitle> Pedro Lopes </BannerTitle> */}
                        <BannerTitle> {t('title_banner')} </BannerTitle>
                        <UnderScore />
                        <TextDescription>{t('overview_text_banner')}</TextDescription>
                    </ContainerTexts>
                 </ContainerLeft>

                 <ContainerRigth>
                    <ContainerAssetsAnimation> 
                        <CubeAnimation src={CubeAnimationAsset} alt="Cube Animation asset" />
                        <ComputerAnimation src={ComputerAnimationAsset} alt="Computer Animation" />
                    </ContainerAssetsAnimation>
                    <BgWhite src={HomeBG}  alt="Home White BG" />
                 </ContainerRigth>
            </Container>

            <AnimationScroll src={animationScroll} alt="animation scroll" />
        </>
    )
}

export default InitialBanner;