import React, { useEffect } from "react";
import HeadPages from "../components/HeadPages";
import ChangeLang from "../components/ChangeLang";
import HomeBanner from "../components/Home/HomeBanner";
import { useRouter } from "next/router";
import ServiceInfo from "../components/Home/ServiceInfo";

const DesignPage = () => {
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
  }, []);

  return (
    <div>
      <HeadPages />
      {/* <HeaderOptions /> */}
      <ChangeLang />
      {/* <InitialBanner /> */}
      <HomeBanner />
      <ServiceInfo />
      {/* <SecondBanner />
            <CircleTechProfile />

            <AboutMe />
            <Services />
            <Companys />
            <SliderComents />
            <HomeProjects />

            <FooterDesign /> */}
    </div>
  );
};

export default DesignPage;
