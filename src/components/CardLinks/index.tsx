// import { useEffect } from 'react';
import { Card, ContainerText, Hr, WorkButton, Container } from './style'
import ModalWork from '../ModalWork';
import { useState } from 'react';
import uxData from '../../utils/works_UX.json'
import webData from '../../utils/works_web.json'
import backendData from '../../utils/works_backend.json'
const CardLinks = () => {

    const [visibleModal, setVisibleModal] = useState(false)
    const [selectedItem, setSelectedItem]:any = useState(uxData)

    const listenChieldEvent = (modalState: boolean) => {
        setVisibleModal(modalState)
    }

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

    const lockScroll = () => {
        const bodyLocator:any = document.querySelector("body")
        bodyLocator.setAttribute("style", "overflow: hidden");
        window.scrollTo(0,0)
    }

    return (
        <>
            <ModalWork
                items={selectedItem} 
                paramEvent={listenChieldEvent}
                modalState={visibleModal}
            />
            <Container>
                <Card>
                    <ContainerText>
                        Veja a seguir alguns dos serviços que tenho a oferecer no mundo digital
                    </ContainerText>
                    <Hr />
                    <WorkButton onClick={() => {openUXModal()} }> Trabalhos com Design </WorkButton>
                    <WorkButton onClick={() => {openWebModal()} }> Trabalhos com desenvolvimento WEB </WorkButton>
                    <WorkButton onClick={() => {openBackendModal()} }> Trabalhos com desenvolvimento backend </WorkButton>
                </Card>
            </Container>
        </>
    )
}


export default CardLinks;