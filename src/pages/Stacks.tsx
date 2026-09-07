import React from "react";
import HeadPages from "../components/HeadPages";
import Header from "../components/Header";
import Footer from "../components/Home/Footer";
import StackAndSkills from "../components/Stacks/StacksAndSkills";
import BannerStacks from "../components/Stacks/BannerStacks";

const StacksPage = () => {
  return (
    <div>
      <HeadPages
        title="Stack & Skills | Pedro Lopes"
        description="Tecnologias, ferramentas e habilidades que uso no dia a dia como desenvolvedor."
        path="/Stacks"
      />
      <Header />
      <BannerStacks />
      <StackAndSkills />
      <Footer thanksForVisit={false} />
    </div>
  );
};

export default StacksPage;
