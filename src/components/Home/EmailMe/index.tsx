import { MdOutlineEmail } from "react-icons/md";
import style from "./style.module.css";
import useEmailMe from "./useEmailme";
import { IoCloseCircleOutline } from "react-icons/io5";
import { t } from "i18next";
const EmailMe = () => {
  const { email, sendEmail, setEmail, setViewToast, viewToast, showAnimation } =
    useEmailMe();

  return (
    <>
      {viewToast && (
        <div
          className={`${style.containerToast} ${
            viewToast ? style.showToastMessage : style.hideToastMessage
          }`}
        >
          <p>{t("emailMe.tost_message")}</p>
          <IoCloseCircleOutline
            size={30}
            color="#fff"
            onClick={() => setViewToast(false)}
          />
        </div>
      )}
      <div className={style.containerEmailMe}>
        <div
          className={
            showAnimation ? style.showContainerText : style.hideContainerText
          }
        >
          <h3 className={style.titleEmailMe}>{t("emailMe.about_me_title")} </h3>
          <h3 className={style.subTitleEmailMe}>
            {t("emailMe.bout_me_subtitle")}
          </h3>
        </div>

        <div
          className={`${style.containerInputEmailMe} ${
            showAnimation ? style.showContainerInput : style.hideContainerInput
          }`}
        >
          <div className={style.boerderInputEmailMe}>
            <div className={style.emailIconEmailMe}>
              <MdOutlineEmail size={30} />
            </div>
            <input
              name="email"
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className={style.buttonSendEmailMe}>
              <button onClick={sendEmail}>{t("emailMe.button_send")}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailMe;
