import { useRouter } from "next/router";
import { useState } from "react";

const useProjectWorks = () => {
  const router = useRouter();
  const [showAnimation, setShowAnimation] = useState(-1);

  const redirectTo = (url: string) => {
    router.push(url);
  };

  const [selectedSection, setSelectedSection] = useState("Frontend");

  const projectAndWorks = [
    {
      name: "Frontend",
      projects: [
        {
          image: "./img/home_projects/project_gallery_3.png",
          title: "projects.triper.title",
          description: "projects.triper.banner_description",
          url: "/Project?name=triper",
        },
        {
          image: "./img/home_projects/project_gallery_11.png",
          title: "projects.pet_system.title",
          description: "projects.pet_system.banner_description",
          url: "/Project?name=pet-system",
        },
        {
          image: "./img/home_projects/project_gallery_10.png",
          title: "projects.toro_token.title",
          description: "projects.toro_token.banner_description",
          url: "/Project?name=toro-token",
        },
      ],
    },
    {
      name: "Backend",
      projects: [
        {
          image: "./img/home_projects/project_gallery_1.png",
          title: "projects.electrolux.title",
          description: "projects.electrolux.banner_description",
          url: "/Project?name=electrolux",
        },
        {
          image: "./img/home_projects/project_gallery_2.png",
          title: "projects.the_chat.title",
          description: "projects.the_chat.banner_description",
          url: "/Project?name=the-chat",
        },
        {
          image: "./img/home_projects/project_gallery_8.png",
          title: "projects.quest_game.title",
          description: "projects.quest_game.banner_description",
          url: "/Project?name=quest-game",
        },
        {
          image: "./img/home_projects/project_gallery_7.png",
          title: "projects.link_leito.title",
          description: "projects.link_leito.banner_description",
          url: "/Project?name=link-leito",
        },
      ],
    },
    {
      name: "Mobile",
      projects: [
        {
          image: "./img/home_projects/project_gallery_12.png",
          title: "projects.genesis_bank.title",
          description: "projects.genesis_bank.banner_description",
          url: "/Project?name=genesis-bank",
        },
        {
          image: "./img/home_projects/project_gallery_9.png",
          title: "projects.blue_token.title",
          description: "projects.blue_token.banner_description",
          url: "/Project?name=blue-token",
        },
      ],
    },
    {
      name: "Design",
      projects: [
        {
          image: "./img/home_projects/project_gallery_4.png",
          title: "projects.comunity_alert.title",
          description: "projects.comunity_alert.banner_description",
          url: "/Project?name=comunity-alert",
        },
        {
          image: "./img/home_projects/project_gallery_5.png",
          title: "projects.match_coder.title",
          description: "projects.match_coder.banner_description",
          url: "/Project?name=match-coder",
        },
        {
          image: "./img/home_projects/project_gallery_6.png",
          title: "projects.pet_care.title",
          description: "projects.pet_care.banner_description",
          url: "/Project?name=pet-care",
        },
      ],
    },
    // {
    //   name: "Tech Lead",
    //   projects: [
    //     {
    //       image: "./img/home_projects/project_gallery_4.png",
    //       title: "projects.electrolux.title",
    //       description: "projects.electrolux.banner_description",
    //       url: "/Project?name=electrolux",
    //     },
    //   ],
    // },
  ];

  return {
    showAnimation,
    setShowAnimation,
    redirectTo,
    projectAndWorks,
    selectedSection,
    setSelectedSection,
  };
};

export default useProjectWorks;
