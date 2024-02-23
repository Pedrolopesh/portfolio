import React, { useEffect } from 'react';
import HeadPages from '../components/HeadPages';
import ChangeLang from "../components/ChangeLang";
// import InitialBanner from '../components/MainContent/InitialBanner';
import SecondBanner from '../components/MainContent/SecondBanner';
import AboutMe from '../components/MainContent/AboutMe';
import Services from '../components/MainContent/Services';
import SliderComents from '../components/MainContent/SliderComents';
import HomeProjects from '../components/MainContent/HomeProjects';
import Companys from '../components/MainContent/Companys';
import FooterDesign from '../components/MainContent/FooterDesign';
import CircleTechProfile from '../components/CircleTechProfile';
import HomeBanner from '../components/Home/HomeBanner';
import HeaderOptions from '../components/HeaderOptions';
import { useRouter } from 'next/router';

const DesignPage = () => {

    const router = useRouter()
    const handlePath = (currentPath: string) => {
      localStorage.setItem('sourceRoute', currentPath)
    }

    const setbodyBg = () => {
        const body = document.querySelector('body');
        body.classList.add('design_bg');
        body.classList.remove('it_bg');
      }
    
      useEffect(() => {
        setbodyBg();
        handlePath(router.pathname);
      }, [])

    return (
        <div>
            <HeadPages />
            <HeaderOptions />
            <ChangeLang />
            {/* <InitialBanner /> */}
            <SecondBanner />
            <CircleTechProfile />

            <AboutMe />
            <Services />
            <Companys />
            <SliderComents />
            <HomeProjects />

            <FooterDesign />
        </div>
    )
}

export default DesignPage;