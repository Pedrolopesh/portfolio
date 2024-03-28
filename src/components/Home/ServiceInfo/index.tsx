import { useTranslation } from "react-i18next";
import { BsArrowRight, BsCodeSquare } from "react-icons/bs";
import style from "./style.module.css";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuComputer } from "react-icons/lu";
import CustomDividerService from "../../../assets/icons/CustomDividerService";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ServiceInfo = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const [showAnimation, setShowAnimation] = useState({
    textAnimation: false,
    serviceBlocksAnimation: false,
  });

  const handleScroll = () => {
    const scrollPos = window.scrollY;

    if (window.screen.width < 700) {
      if (scrollPos >= 100) {
        setShowAnimation((prevState) => ({
          ...prevState,
          textAnimation: true,
        }));
      }
      if (scrollPos >= 180) {
        setShowAnimation((prevState) => ({
          ...prevState,
          serviceBlocksAnimation: true,
        }));
      }
    } else if (window.screen.width > 700 && window.screen.width < 1200) {
      if (scrollPos >= 800) {
        setShowAnimation((prevState) => ({
          ...prevState,
          textAnimation: true,
        }));
      }
      if (scrollPos >= 890) {
        setShowAnimation((prevState) => ({
          ...prevState,
          serviceBlocksAnimation: true,
        }));
      }
    } else {
      if (scrollPos >= 400) {
        setShowAnimation((prevState) => ({
          ...prevState,
          textAnimation: true,
        }));
      }
      if (scrollPos >= 490) {
        setShowAnimation((prevState) => ({
          ...prevState,
          serviceBlocksAnimation: true,
        }));
      }
    }
  };

  useEffect(() => {
    const handleScrollWithRAF = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollWithRAF);

    return () => {
      window.removeEventListener("scroll", handleScrollWithRAF);
    };
  }, []);

  const redirectTo = (url: string) => {
    router.push(url);
  };

  return (
    <>
      <div className={style.containerServiceInfo_Cards_Blocks}>
        <div className={style.containerServiceInfo}>
          <div className={style.containerLeftBlock}>
            <div
              className={`${
                showAnimation.textAnimation
                  ? style.showTextLeft
                  : style.hideTextLeft
              } ${style.textBlockLeft}`}
            >
              <h3> {t("homeServicesInfo.title_left")} </h3>
              <p> {t("homeServicesInfo.text_left")} </p>

              <a
                className={style.containerService}
                target="_blank"
                href="mailto: pedrolopeshls@gmail.com"
                rel="noopener noreferrer"
              >
                pedrolopeshls@gmail.com
                <BsArrowRight size={20} />
              </a>
            </div>
          </div>

          <div
            className={`${
              showAnimation.textAnimation
                ? style.showTextRight
                : style.hideTextRight
            } ${style.containerRightBlock}`}
          >
            <div className={style.containerFootRightBlock}>
              <h3 className={style.containerFootRightBlock_title}>
                {t("homeServicesInfo.title_rigth")}
              </h3>
              <p className={style.containerFootRightBlock_text}>
                {t("homeServicesInfo.text_rigth_0")}
              </p>

              <div className={style.blockTextFoot}>
                <div className={style.blockTextFootInfo}>
                  <h3> 5 </h3>
                  <p> {t("homeServicesInfo.text_rigth_1")} </p>
                </div>

                <div className={style.blockTextFootInfo}>
                  <h3> 16 </h3>
                  <p> {t("homeServicesInfo.text_rigth_2")} </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.containerServiceBlocks}>
          <div
            onClick={() => {
              redirectTo("/Project");
            }}
            className={`${
              showAnimation.serviceBlocksAnimation
                ? style.showBlockServiceCard1
                : style.hideBlockServiceCard
            } ${style.blockServiceCard}`}
          >
            <div className={style.titleCardBlock}>
              <HiOutlineLightBulb size={70} color={"#fff"} />
              <h3>{t("homeServicesInfo.title_box_service_0")}</h3>
            </div>
            <div className={style.firstContainerFootCardLink}>
              <p>{t("homeServicesInfo.text_box_service_foot")}</p>
              <BsArrowRight size={20} />
            </div>
          </div>

          <div
            className={`${
              showAnimation.serviceBlocksAnimation
                ? style.showBlockServiceCard2
                : style.hideBlockServiceCard
            } ${style.blockServiceCard}`}
          >
            <div className={style.titleCardBlock}>
              <LuComputer size={60} color={"#fff"} />
              <h3>{t("homeServicesInfo.title_box_service_1")}</h3>
            </div>
            <div className={style.containerFootCardLink}>
              <p>{t("homeServicesInfo.text_box_service_foot")}</p>
              <BsArrowRight size={20} />
            </div>
          </div>

          <div
            className={`${
              showAnimation.serviceBlocksAnimation
                ? style.showBlockServiceCard3
                : style.hideBlockServiceCard
            } ${style.blockServiceCard}`}
          >
            <div className={style.titleCardBlock}>
              <BsCodeSquare size={60} color={"#fff"} />
              <h3>{t("homeServicesInfo.title_box_service_2")}</h3>
            </div>
            <div className={style.containerFootCardLink}>
              <p>{t("homeServicesInfo.text_box_service_foot")}</p>
              <BsArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.containerDivederServices}>
        <CustomDividerService />
      </div>
    </>
  );
};

export default ServiceInfo;
