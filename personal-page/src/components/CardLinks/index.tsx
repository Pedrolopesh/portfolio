import { Card, WorkButton, Container } from './style'
import ToolTip from '../ToolTip';
const CardLinks = () => {
    return (
        <>
            <Container>
                {/* <ToolTip /> */}
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