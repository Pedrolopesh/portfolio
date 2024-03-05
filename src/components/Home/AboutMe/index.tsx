import style from "./style.module.css";
import Logo from "../../../assets/icons/logo";

const AbaoutMe = () => {
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
              <h3>About me</h3>
              <p>
                I start at tecnology through Quality and assurance job doing
                tests in financial products, after I implement maintenance in
                frontend of this products, in this moment i learn some
                javascript frameworks like vue.js, react, react-native and
                angular.
              </p>
            </div>
          </div>
        </div>

        <div className={style.containerLeftAboutMe}>
          <div className={style.containerTextLeftAboutMe}>
            <h3>Contact</h3>
            <p>
              You can contact me by email or social midia, I usualy answer in 3
              days
            </p>
          </div>

          <div className={style.containerAboutMeActions}>
            <div className={style.buttonActions}>
              <button>HIRE ME</button>
              <button>KNOW MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbaoutMe;
