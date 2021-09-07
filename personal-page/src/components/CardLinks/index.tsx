import { Card, WorkButton, Container } from './style'

const CardLinks = () => {
    return (
        <>
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