import React, { useEffect } from 'react';
import HeadPages from '../components/HeadPages';
import ChangeLang from "../components/ChangeLang";
// import InitialBanner from '../components/MainContent/InitialBanner';
import SecondBanner from '../components/MainContent/SecondBanner';
import AboutMe from '../components/MainContent/AboutMe';
import Services from '../components/MainContent/Services';
import SliderComents from '../components/MainContent/SliderComents';
import Companys from '../components/MainContent/Companys';
import Footer from '../components/MainContent/Footer';

const DesignPage = () => {

    const setbodyBg = () => {
        const body = document.querySelector('body');
        body.classList.add('design_bg');
      }
    
      useEffect(() => {
        setbodyBg();
      }, [])

    return (
        <div>
            <HeadPages />
            <ChangeLang />
            {/* <InitialBanner /> */}
            <SecondBanner />

            <AboutMe />
            <Services />
            <Companys />
            <SliderComents />

            <Footer />
        </div>
    )
}

export default DesignPage;