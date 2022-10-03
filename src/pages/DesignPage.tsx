import React from 'react';
import HeadPages from '../components/HeadPages';
import ChangeLang from "../components/ChangeLang";
import InitialBanner from '../components/MainContent/InitialBanner';
import AboutMe from '../components/MainContent/AboutMe';
import Services from '../components/MainContent/Services';
import SliderComents from '../components/MainContent/SliderComents';
import Footer from '../components/MainContent/Footer';

const DesignPage = () => {
    return (
        <div>
            <HeadPages />
            <ChangeLang />
            <InitialBanner />

            <AboutMe />
            <Services />
            <SliderComents />

            <Footer />
        </div>
    )
}

export default DesignPage;