import { useTranslation } from "react-i18next";
import { BsArrowRight, BsCodeSquare } from "react-icons/bs";
import style from "./style.module.css";
import { HiDesktopComputer, HiOutlineLightBulb } from "react-icons/hi";

const ServiceInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={style.containerServiceInfo_Cards_Blocks}>
      <div className={style.containerServiceInfo}>
        <div className={style.containerLeftBlock}>
          <div className={style.textBlockLeft}>
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

        <div className={style.containerRightBlock}>
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
        <div className={style.blockServiceCard}>
          <div className={style.titleCardBlock}>
            <HiOutlineLightBulb size={40} color={"#fff"} />
            <h3>{t("homeServicesInfo.title_box_service_0")}</h3>
          </div>
          <div>
            <p>{t("homeServicesInfo.text_box_service_foot")}</p>
            <BsArrowRight size={20} />
          </div>
        </div>

        <div className={style.blockServiceCard}>
          <div className={style.titleCardBlock}>
            <HiDesktopComputer size={40} color={"#fff"} />
            <h3>{t("homeServicesInfo.title_box_service_1")}</h3>
          </div>
          <div>
            <p>{t("homeServicesInfo.text_box_service_foot")}</p>
            <BsArrowRight size={20} />
          </div>
        </div>

        <div className={style.blockServiceCard}>
          <div className={style.titleCardBlock}>
            <BsCodeSquare size={40} color={"#fff"} />
            <h3>{t("homeServicesInfo.title_box_service_2")}</h3>
          </div>
          <div>
            <p>{t("homeServicesInfo.text_box_service_foot")}</p>
            <BsArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
