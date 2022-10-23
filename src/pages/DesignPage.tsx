import React, { useEffect } from 'react';
import HeadPages from '../components/HeadPages';
import ChangeLang from "../components/ChangeLang";
// import InitialBanner from '../components/MainContent/InitialBanner';
import SecondBanner from '../components/MainContent/SecondBanner';
import AboutMe from '../components/MainContent/AboutMe';
import Services from '../components/MainContent/Services';
import SliderComents from '../components/MainContent/SliderComents';
import Companys from '../components/MainContent/Companys';
import FooterDesign from '../components/MainContent/FooterDesign';

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

            <FooterDesign />
        </div>
    )
}

export default DesignPage;