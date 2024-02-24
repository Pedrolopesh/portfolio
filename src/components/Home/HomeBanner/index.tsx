import React, { useEffect, useRef } from "react";
// import style from 'SecondBanner.module.css'
import { useTranslation } from "react-i18next";
import {
  ContainerContentBanner,
  ContainerHomeBanner,
  ContainerLogo,
  ContentHomeBannerBlock,
} from "./styles";
import Logo from "../../../assets/icons/logo";
import style from "../../../styles/Home/HomeBanner.module.css";
import { Typewriter } from "react-simple-typewriter";
import CustomDivider from "../../../assets/icons/CustomDivider";

const HomeBanner = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current.playbackRate = 0.9;
  }, []);

  return (
    <div className={style.ContainerHomeBanner}>
      <video
        id="homebanner-video-bg"
        autoPlay
        muted
        loop
        ref={videoRef}
        width={"100%"}
      >
        <source src="videos/particles.mp4" type="video/mp4" />
        {/* <source src="meu-video.webm" type="video/webm" /> */}
        Desculpe, seu navegador não suporta vídeos HTML5.
      </video>
      <div className={style.ContainerContentBannerBG}></div>
      <div className={style.ContainerContentBanner}>
        <div className={style.ContentHomeBannerBlock}>
          <div className={style.ContainerLogo}>
            <Logo />
          </div>
          <div>
            <div className={style.ContainerTypingTitle}>
              <h1> {t("homeBanner.title_banner")} </h1>
              <Typewriter
                words={[
                  `${t("homeBanner.title_typing_0")}`,
                  `${t("homeBanner.title_typing_1")}`,
                  `${t("homeBanner.title_typing_2")}`,
                  `${t("homeBanner.title_typing_3")}`,
                ]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </div>
            <p>{t("overview_text_banner")}</p>
          </div>
        </div>
      </div>
      <div className={style.CustomDividerBlock}>
        <CustomDivider />
      </div>
    </div>
  );
};

export default HomeBanner;
