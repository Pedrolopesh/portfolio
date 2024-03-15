import React, { useEffect } from "react";
import HeadPages from "../components/HeadPages";
import ChangeLang from "../components/ChangeLang";
import HomeBanner from "../components/Home/HomeBanner";
import { useRouter } from "next/router";
import ServiceInfo from "../components/Home/ServiceInfo";
import ProjectsAndWorks from "../components/Home/ProjectsAndWorks";
import EmailMe from "../components/Home/EmailMe";
import AboutMe from "../components/Home/AboutMe";
import Footer from "../components/Home/Footer";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  setTimeout(() => {
    window.addEventListener(
      "scroll",
      function (event) {
        // var firstLocator:any = document.querySelector("#locator");
        // const test = firstLocator.offsetTop
        console.log("width => ", window.screen.width);
        if (window.screen.width < 700) {
          console.log("#Mobile");
          console.log("Mobile => ", window.pageYOffset);
        }

        if (window.screen.width > 700 && window.screen.width < 1100) {
          console.log("#Table");
          console.log("Table => ", window.pageYOffset);
        }

        if (window.screen.width > 1100) {
          console.log("#Desktop");
          console.log("Desktop => ", window.pageYOffset);
        }
      },
      true
    );
  }, 1000);

  return (
    <div>
      <HeadPages />
      <ChangeLang />
      <HomeBanner />
      <ServiceInfo />
      <ProjectsAndWorks />
      <EmailMe />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default DesignPage;
