import uxData from '../../utils/works_UX.json'
import webData from '../../utils/works_web.json'
import backendData from '../../utils/works_backend.json'
import { useState, useEffect } from 'react'
import animationLateralScroll from '../../assets/animations/scroll_rigth.gif'
import { 
    Container, 
    ContainerButtons,
    ContainerWorksSection,
    WorkButton,
    AnimationRigthScroll,
} from './style'
import WorkCard from '../WorkCard'

interface IOprtions {
    options: string
}

const WorkSection = () => {
    const [visibleModal, setVisibleModal] = useState(false)
    const [selectedItem, setSelectedItem]:any = useState(uxData)
    const [selectedButton, setSelectedButton]:any = useState(0)

    const options: IOprtions[] = [
        {
            options:'Trabalhos Design'
        },
        {
            options:'Trabalhos WEB'
        },
        {
            options:'Trabalhos backend'
        }
    ]

    const openUXModal = () => {
        setVisibleModal(true)
        setSelectedItem(uxData)
        lockScroll()
    }
    

    const openWebModal = () => {
        setVisibleModal(true)
        setSelectedItem(webData)
        lockScroll()
    }

    const openBackendModal = () => {
        setVisibleModal(true)
        setSelectedItem(backendData)
        lockScroll()
    }

    
    const listenChieldEvent = (modalState: boolean) => {
        setVisibleModal(modalState)
    }

    const lockScroll = () => {
        console.log(visibleModal, selectedItem)
        // const bodyLocator:any = document.querySelector("body")
        // bodyLocator.setAttribute("style", "overflow: hidden");
        // window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const switchOption = (option: string, index:any) => {
        if(option === 'Trabalhos Design') openUXModal()
        if(option === 'Trabalhos WEB') openWebModal()
        if(option === 'Trabalhos backend') openBackendModal()
        setSelectedButton(index)
    }

    useEffect(() => {
        setSelectedItem(uxData)
    }, [])

    return (
        <>
            <Container>
                
                <ContainerButtons>
                    {options.map((value:IOprtions, index:number) => {
                        return (
                            <>
                                <WorkButton
                                    style={{
                                        border: (selectedButton === index) ? '5px solid' :'',
                                        borderImage: (selectedButton === index) ? 'linear-gradient(45deg,#da926b,#2a0a7d) 10' : '',
                                        // padding: (selectedButton === index) ? '15px' : ''
                                    }} 
                                    onClick={() => {
                                        switchOption(value.options, index) 
                                    }}
                                > 
                                    {value.options}
                                </WorkButton>


                    {/* <WorkButton onClick={() => {openWebModal()} }> Trabalhos WEB </WorkButton> */}
                    {/* <WorkButton onClick={() => {openBackendModal()} }> Trabalhos backend </WorkButton> */}
                            </>
                        )
                    })}
                </ContainerButtons>

                <AnimationRigthScroll src={animationLateralScroll} alt="animation scroll" />

                <ContainerWorksSection>
                    <WorkCard
                        items={selectedItem}
                        paramEvent={listenChieldEvent}
                        modalState={visibleModal}
                    />
                </ContainerWorksSection>
            </Container>
        </>
    )
}

export default WorkSection;