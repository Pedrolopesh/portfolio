// import { useEffect } from 'react';
import { Card, WorkButton, Container } from './style'
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
    }
    

    const openWebModal = () => {
        setVisibleModal(true)
        setSelectedItem(webData)
    }

    const openBackendModal = () => {
        setVisibleModal(true)
        setSelectedItem(backendData)
    }
    
    // useEffect(() => {
    //     console.log('selectedItem', selectedItem)
    //     if(selectedItem === undefined){
    //         setSelectedItem(uxData)
    //     }
        
    // }, [selectedItem])

    return (
        <>
            <ModalWork
                items={selectedItem} 
                paramEvent={listenChieldEvent}
                modalState={visibleModal}
            />
            <Container>
                <Card>
                    <WorkButton onClick={() => {openUXModal()} }> Trabalhos com Design </WorkButton>
                    <WorkButton onClick={() => {openWebModal()} }> Trabalhos com desenvolvimento WEB </WorkButton>
                    <WorkButton onClick={() => {openBackendModal()} }> Trabalhos com desenvolvimento backend </WorkButton>
                </Card>
            </Container>
        </>
    )
}


export default CardLinks;