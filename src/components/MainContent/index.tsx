import InitialBanner from "./InitialBanner";
import CardInfos from "./CardInfos";
import WorkSection from "./WorkSection";
import Footer from './Footer';

import Style from '../../styles/mainStyles/MainContent.module.css'

const MainContent = () => {
    return (
        <>
            <div className={Style.mainITContainer}>
                <InitialBanner/>
                <CardInfos />
                <WorkSection />
                <Footer />
            </div>
        </>
    )
}

export default MainContent;