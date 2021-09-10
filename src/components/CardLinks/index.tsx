import { Card, WorkButton, Container } from './style'
import ModalWork from '../ModalWork';
import { useState } from 'react';
// import { useEffect } from 'react';
const CardLinks = () => {

    const [visibleModal, setVisibleModal] = useState(false)

    const listenChieldEvent = (modalState: boolean) => {
        setVisibleModal(modalState)
    }

    const openModal = () => {
        console.log('CHANGE STATE')
        setVisibleModal(true)
    }
    
    // useEffect(() => {
    //     console.log('STATE',visibleModal)
        
    // }, [visibleModal])

    return (
        <>
            <ModalWork
                paramEvent={listenChieldEvent}
                modalState={visibleModal}
            />
            <Container>
                <Card>
                    <WorkButton onClick={() => {openModal()} }> Trabalhos com Design </WorkButton>
                    <WorkButton> Trabalhos com desenvolvimento WEB </WorkButton>
                    <WorkButton> Trabalhos com desenvolvimento backend </WorkButton>
                </Card>
            </Container>
        </>
    )
}


export default CardLinks;