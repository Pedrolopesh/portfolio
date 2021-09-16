import InitialBanner from "../InitialBanner";
import { Container } from './style';
import CardInfos from "../CardInfos";
import Footer from '../Footer';

const MainContent = () => {
    return (
        <>
            <Container>
                <InitialBanner/>
                <CardInfos />
                <Footer />
            </Container>
        </>
    )
}

export default MainContent;