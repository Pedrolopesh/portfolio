import React, { useCallback, useEffect, useRef, useState } from "react";
// import style from 'SecondBanner.module.css'
import { useTranslation } from "react-i18next";
import Logo from "../../../assets/icons/logo";
import style from "./HomeBanner.module.css";
import { Typewriter } from "react-simple-typewriter";
import CustomDivider from "../../../assets/icons/CustomDivider";

const HomeBanner = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideo, setCurrentVideo] = useState("videos/particles.mp4");

  useEffect(() => {
    if (window.innerWidth <= 900) {
      setCurrentVideo("videos/particles_mobile.mp4");
    }

    videoRef.current.playbackRate = 0.9;
  }, []);

  const VideoBanner = useCallback(() => {
    return (
      <video
        id="homebanner-video-bg"
        autoPlay
        muted
        loop
        ref={videoRef}
        width={"100%"}
      >
        <source src={currentVideo} type="video/mp4" />
        Desculpe, seu navegador não suporta vídeos HTML5.
      </video>
    );
  }, [currentVideo]);

  return (
    <div className={style.ContainerHomeBanner}>
      <div className={style.ContentVideoBanner}>
        <VideoBanner />
      </div>
      <div className={style.ContainerContentBannerBG}></div>
      <div className={style.ContainerContentBanner}>
        <div className={style.ContentHomeBannerBlock}>
          <div className={style.ContainerLogo}>
            <Logo />
          </div>
          <div>
            <div className={style.ContainerTypingTitle}>
              <h1> WEB </h1>
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
