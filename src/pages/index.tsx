import React from "react";

import HeadPages from "../components/HeadPages";
import Header from "../components/Header";
import HomeBanner from "../components/Home/HomeBanner";
import ServiceInfo from "../components/Home/ServiceInfo";
import ProjectsAndWorks from "../components/Home/ProjectsAndWorks";
import EmailMe from "../components/Home/EmailMe";
import AboutMe from "../components/Home/AboutMe";
import Footer from "../components/Home/Footer";
import StackAndSkills from "../components/Home/StackAndSkills";

const Home = () => {
  return (
    <div>
      <HeadPages path="/" />
      <Header />
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
