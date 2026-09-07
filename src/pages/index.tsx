import React from "react";

import HeadPages from "../components/HeadPages";
import ChangeLang from "../components/ChangeLang";
import HomeBanner from "../components/Home/HomeBanner";
import ServiceInfo from "../components/Home/ServiceInfo";
import ProjectsAndWorks from "../components/Home/ProjectsAndWorks";
import EmailMe from "../components/Home/EmailMe";
import AboutMe from "../components/Home/AboutMe";
import Footer from "../components/Home/Footer";
import HeaderOptions from "../components/HeaderOptions";
import StackAndSkills from "../components/Home/StackAndSkills";

const Home = () => {
  return (
    <div>
      <HeadPages path="/" />
      <HeaderOptions
        props={{
          startHidenHeader: true,
          hideOnScrollTop: true,
        }}
      />
      <ChangeLang />
      <HomeBanner />
      <ServiceInfo />
      <ProjectsAndWorks />
      <StackAndSkills />
      <EmailMe />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default Home;
