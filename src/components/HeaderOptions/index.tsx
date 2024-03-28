import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiFillEye } from "react-icons/ai";
import { HiOutlineTerminal, HiMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import style from "./style.module.css";
import { useRouter } from "next/router";
import Logo from "../../assets/icons/logo";
import LinkOptions from "./LinkOptions";
const HeaderOptions = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [sourceRoute, setSourceRoute] = useState("");

  const handleClick = (route: string) => {
    // setVisibleModal(!visibleModal)
    router.push(route);
  };

  const [visibleModal, setVisibleModal] = React.useState(false);

  const checkPath = () => {
    if (sourceRoute === "/DesignPage") {
      return "/DesignPage";
    } else {
      return "/TiPage";
    }
  };

  useEffect(() => {
    const sourceRoute = localStorage.getItem("sourceRoute");
    setSourceRoute(sourceRoute);
  }, [sourceRoute]);

  return (
    <div className={style.containerHeaderOptions}>
      <div className={style.containerHeaderOptionsContent}>
        <Link href="/" passHref>
          {/* <Logo classParam={style.logoHeaderOptions}/> */}
          <div>
            <img
              src="./img/logo-gradient-blue.png"
              alt="pedrolopes logo"
              className={style.logoHeaderOptions}
            />
          </div>
        </Link>
        <div className={style.containerDesktop}>
          <LinkOptions routerParam={router} />
        </div>

        <div className={style.containerMenuMobile}>
          <HiMenu
            onClick={() => {
              setVisibleModal(!visibleModal);
            }}
            size={45}
          />
        </div>
      </div>

      <div
        className={`${
          style.containerMobileOptions +
          " " +
          (visibleModal ? style.showMobileOptions : style.hideMobileOptions)
        }`}
      >
        <GrClose
          onClick={() => {
            setVisibleModal(!visibleModal);
          }}
          className={style.closeButton}
          size={30}
        />

        <div className={style.containerMobileLinks}>
          <LinkOptions routerParam={router} />
        </div>
      </div>
    </div>
  );
};

export default HeaderOptions;
