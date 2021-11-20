import InitialBanner from "./InitialBanner";
import { Container } from './style';
import CardInfos from "./CardInfos";
import WorkSection from "./WorkSection";
// import Footer from './Footer';

const MainContent = () => {
    return (
        <>
            <Container>
                <InitialBanner/>
                <CardInfos />
                <WorkSection />
                {/* <Footer /> */}
            </Container>
        </>
    )
}

export default MainContent;