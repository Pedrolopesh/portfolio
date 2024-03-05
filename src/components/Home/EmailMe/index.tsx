import { MdOutlineEmail } from "react-icons/md";
import style from "./style.module.css";

const EmailMe = () => {
  return (
    <div className={style.containerEmailMe}>
      <h3 className={style.titleEmailMe}>Have an Awesome Project Idea? </h3>
      <h3 className={style.subTitleEmailMe}>Let’s Discuss</h3>

      <div className={style.containerInputEmailMe}>
        <div className={style.boerderInputEmailMe}>
          <div className={style.emailIconEmailMe}>
            <MdOutlineEmail size={30} />
          </div>
          <input type="text" placeholder="Enter e-mail address" />
          <div className={style.buttonSendEmailMe}>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailMe;
