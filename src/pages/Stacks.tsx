import React, { useEffect } from "react";
import { useRouter } from "next/router";
import HeadPages from "../components/HeadPages";
import ChangeLang from "../components/ChangeLang";
import Footer from "../components/Home/Footer";
import HeaderOptions from "../components/HeaderOptions";
import StackAndSkills from "../components/Stacks/StacksAndSkills";
import BannerStacks from "../components/Stacks/BannerStacks";

const StacksPage = () => {
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
      <HeadPages
        title="Stack & Skills | Pedro Lopes"
        description="Tecnologias, ferramentas e habilidades que uso no dia a dia como desenvolvedor."
        path="/Stacks"
      />
      <HeaderOptions
        props={{
          startHidenHeader: true,
          hideOnScrollTop: true,
        }}
      />
      <BannerStacks />
      <ChangeLang />
      <StackAndSkills />
      <Footer thanksForVisit={false} />
    </div>
  );
};

export default StacksPage;
