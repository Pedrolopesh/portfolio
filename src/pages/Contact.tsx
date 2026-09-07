import React, { useEffect } from "react";
import HeadPages from "../components/HeadPages";
import HeaderOptions from "../components/HeaderOptions";
import ChangeLang from "../components/ChangeLang";
import style from "../styles/contactStyles.module.css";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillYoutube,
  AiFillBehanceSquare,
} from "react-icons/ai";

const Contact = () => {
  const contactLinks = [
    {
      nameLink: "linkedin",
      externalLink: "https://www.linkedin.com/in/pedro-lopes-50b3b818a/",
      icon: <AiFillLinkedin size={40} />,
    },
    {
      nameLink: "github",
      externalLink: "https://github.com/Pedrolopesh",
      icon: <AiFillGithub size={40} />,
    },
    {
      nameLink: "youtube",
      externalLink: "https://www.youtube.com/channel/UCEnWEeD27gzyliBYhRkcnzQ",
      icon: <AiFillYoutube size={40} />,
    },
    {
      nameLink: "behance",
      externalLink: "https://www.behance.net/pedrohenrique139",
      icon: <AiFillBehanceSquare size={40} />,
    },
  ];

  const redirectTo = (routerPath: string) => {
    window.open(routerPath, "_blank");
  };

  const setbodyBg = () => {
    const body = document.querySelector("body");
    body.classList.add("darken_blue_bg");
  };

  useEffect(() => {
    setbodyBg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <HeadPages
        title="Contato | Pedro Lopes"
        description="Fale com Pedro Lopes — redes sociais e formas de contato."
        path="/Contact"
      />
      <HeaderOptions
        props={{
          showHeaderProps: true,
          startHidenHeader: false,
          hideOnScrollTop: false,
        }}
      />
      <ChangeLang />

      <div className={style.containerContentContactPage}>
        <span
          style={{ backgroundImage: `url(/img/pedro-img1.jpg)` }}
          className={style.imageSelf}
        />

        <div className={style.containerSocialLinks}>
          {contactLinks.map((item, index) => {
            return (
              <button
                onClick={() => {
                  redirectTo(item.externalLink);
                }}
                key={index}
              >
                {item.icon}
                <p>{item.nameLink}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
