import React, { useEffect } from "react";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const handlePath = (currentPath: string) => {
    localStorage.setItem("sourceRoute", currentPath);
  };

  const setbodyBg = () => {
    const body = document.querySelector("body");
    body.classList.add("darken_blue_bg");
  };

  useEffect(() => {
    setbodyBg();
    handlePath(router.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
