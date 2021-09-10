import { Card, WorkButton, Container } from './style'
import ModalWork from '../ModalWork';
import { useState } from 'react';
import uxData from '../../utils/works_UX.json'
import webData from '../../utils/works_web.json'
// import { useEffect } from 'react';
const CardLinks = () => {

    const [visibleUXModal, setVisibleUXModal] = useState(false)
    const [visibleWebModal, setVisibleWebModal] = useState(false)
    const [selectedItem, setSelectedItem]:any = useState([])

    const listenChieldEvent = (modalState: boolean) => {
        setVisibleUXModal(modalState)
    }

    const openUXModal = () => {
        console.log('CHANGE STATE')
        setVisibleUXModal(true)
        setSelectedItem(uxData)
    }
    

    const openWebModal = () => {
        console.log('CHANGE STATE')
        setVisibleWebModal(true)
        setSelectedItem(webData)
    }
    
    // useEffect(() => {
    //     console.log('STATE',visibleModal)
        
    // }, [visibleModal])

    return (
        <>
            <ModalWork
                items={selectedItem === undefined ? selectedItem : uxData} 
                paramEvent={listenChieldEvent}
                modalState={visibleUXModal || visibleWebModal}
            />
            <Container>
                <Card>
                    <WorkButton onClick={() => {openUXModal()} }> Trabalhos com Design </WorkButton>
                    <WorkButton onClick={() => {openWebModal()} }> Trabalhos com desenvolvimento WEB </WorkButton>
                    <WorkButton> Trabalhos com desenvolvimento backend </WorkButton>
                </Card>
            </Container>
        </>
    )
}


export default CardLinks;