import { MdOutlineEmail } from "react-icons/md";
import style from "./style.module.css";
import useEmailMe from "./useEmailme";
import { IoCloseCircleOutline } from "react-icons/io5";
import { t } from "i18next";
const EmailMe = () => {
  const {
    email,
    sendEmail,
    setEmail,
    website,
    setWebsite,
    setViewToast,
    viewToast,
    toastHasError,
    showAnimation,
  } = useEmailMe();

  return (
    <>
      {viewToast && (
        <div
          className={`${style.containerToast} ${
            viewToast ? style.showToastMessage : style.hideToastMessage
          }`}
        >
          <p>
            {toastHasError
              ? t("emailMe.toast_error_message")
              : t("emailMe.tost_message")}
          </p>
          <IoCloseCircleOutline
            size={30}
            color="#fff"
            onClick={() => setViewToast(false)}
          />
        </div>
      )}
      <div className={style.containerEmailMe} id="emailMe">
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
            {/* honeypot anti-spam: invisível e fora da navegação por
                teclado para usuários reais, bots costumam preenchê-lo */}
            <input
              name="website"
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
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
