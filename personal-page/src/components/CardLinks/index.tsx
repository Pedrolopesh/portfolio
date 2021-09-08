import { Card, WorkButton, Container } from './style'
import ModalWork from '../ModalWork';
const CardLinks = () => {
    return (
        <>
            <ModalWork />
            <Container>
                <Card>
                    <WorkButton> Trabalhos com Design </WorkButton>
                    <WorkButton> Trabalhos com desenvolvimento WEB </WorkButton>
                    <WorkButton> Trabalhos com desenvolvimento backend </WorkButton>
                </Card>
            </Container>
        </>
    )
}


export default CardLinks;