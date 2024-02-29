import Wave from "react-wavify";
import style from "./style.module.css";

const Footer = () => {
  return (
    <div className={style.containerWazes}>
      <Wave
        fill="#223c73"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 40,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
      />
    </div>
  );
};

export default Footer;
