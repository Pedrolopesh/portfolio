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
// import { useState } from 'react';
// import uxData from '../../utils/works_UX.json'
// import webData from '../../utils/works_web.json'
// import backendData from '../../utils/works_backend.json'
// import ModalWork from '../ModalWork';


const InitialBanner = () => {
    // const [visibleModal, setVisibleModal] = useState(false)
    // const [selectedItem, setSelectedItem]:any = useState(uxData)

    // const openUXModal = () => {
    //     setVisibleModal(true)
    //     setSelectedItem(uxData)
    //     lockScroll()
    // }
    

    // const openWebModal = () => {
    //     setVisibleModal(true)
    //     setSelectedItem(webData)
    //     lockScroll()
    // }

    // const openBackendModal = () => {
    //     setVisibleModal(true)
    //     setSelectedItem(backendData)
    //     lockScroll()
    // }

    // const listenChieldEvent = (modalState: boolean) => {
    //     setVisibleModal(modalState)
    // }

    // const lockScroll = () => {
    //     console.log(visibleModal, selectedItem)
    //     // const bodyLocator:any = document.querySelector("body")
    //     // bodyLocator.setAttribute("style", "overflow: hidden");
    //     // window.scrollTo({top: 0, behavior: 'smooth'});
    // }

    return (
        <>
            {/* <ModalWork
                items={selectedItem} 
                paramEvent={listenChieldEvent}
                modalState={visibleModal}
            /> */}
            <Container>
                 <ContainerLeft>
                    <ContainerTexts>
                        <BannerTitle> Pedro Lopes </BannerTitle>
                        <UnderScore />
                        <TextDescription>
                            Olá, sou pedro Lopes, designer e programador, fique a vontade para conhecer mais sobre mim e mus trabalhos.
                        </TextDescription>
                    </ContainerTexts>

                    {/* <ContainerButtons>
                        <WorkButton onClick={() => {openUXModal()} }> Trabalhos Design </WorkButton>
                        <WorkButton onClick={() => {openWebModal()} }> Trabalhos WEB </WorkButton>
                        <WorkButton onClick={() => {openBackendModal()} }> Trabalhos backend </WorkButton>
                    </ContainerButtons> */}
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