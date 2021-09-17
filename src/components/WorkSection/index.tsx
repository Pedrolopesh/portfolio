import uxData from '../../utils/works_UX.json'
import webData from '../../utils/works_web.json'
import backendData from '../../utils/works_backend.json'
import { useState, useEffect } from 'react'

import { 
    Container, 
    ContainerButtons,
    ContainerWorksSection,
    WorkButton,
} from './style'
import WorkCard from '../WorkCard'

const WorkSection = () => {
    const [visibleModal, setVisibleModal] = useState(false)
    const [selectedItem, setSelectedItem]:any = useState(uxData)

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

    useEffect(() => {
        setSelectedItem(uxData)
    }, [])

    return (
        <>
            <Container>
                
                <ContainerButtons>
                    <WorkButton onClick={() => {openUXModal()} }> Trabalhos Design </WorkButton>
                    <WorkButton onClick={() => {openWebModal()} }> Trabalhos WEB </WorkButton>
                    <WorkButton onClick={() => {openBackendModal()} }> Trabalhos backend </WorkButton>
                </ContainerButtons>
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