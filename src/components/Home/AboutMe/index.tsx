import { useTranslation } from "react-i18next";
import style from "./style.module.css";

const AbaoutMe = () => {
  const { t } = useTranslation();

  const companys = [
    { img: "/img/company_1.png" },
    { img: "/img/company_2.png" },
    { img: "/img/company_3.png" },
    { img: "/img/company_4.png" },
    { img: "/img/company_5.png" },
  ];

  return (
    <div className={style.containerAboutMeBg}>
      <div className={style.containerAboutMe}>
        <div className={style.containerCompanys}>
          {companys.map((item, index) => {
            return (
              <div key={index}>
                <img
                  className={style.imageCompany}
                  src={item.img}
                  alt="Companys"
                />
              </div>
            );
          })}
        </div>

        <div className={style.containerFirstTextAboutMe}>
          <div>
            <img
              src="./img/logo-gradient-blue.png"
              alt="pedrolopes logo"
              className={style.aboutMeIcon}
            />
          </div>

          <div className={style.containerRightAboutMe}>
            <div>
              <h3>{t("home_about_me.about_me_title")}</h3>
              <p>{t("home_about_me.bout_me_description")}</p>
            </div>
          </div>
        </div>

        <div className={style.containerLeftAboutMe}>
          <div className={style.containerTextLeftAboutMe}>
            <h3>{t("home_about_me.contact_me_title")}</h3>
            <p>{t("home_about_me.contact_me_text")}</p>
          </div>

          <div className={style.containerAboutMeActions}>
            <div className={style.buttonActions}>
              <button>{t("button_about_me_hire")}</button>
              <button>{t("button_about_me_know_more")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbaoutMe;
