import React from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import style from "./style.module.css";
import { useRouter } from "next/router";
import LinkOptions from "./LinkOptions";
import useHeaderOptions from "./useHeaderOptions";
import { IPropsHeader } from "./headerOptions";

const HeaderOptions = (props: IPropsHeader) => {
  const router = useRouter();
  const [visibleModal, setVisibleModal] = React.useState(false);

  const {
    showHeaderProps = false,
    startHidenHeader,
    hideOnScrollTop,
  } = props.props || {};

  const { showHeader, alreadyTriggered } = useHeaderOptions({
    props: { showHeaderProps, hideOnScrollTop, startHidenHeader },
  });

  return (
    <div
      className={`
      ${startHidenHeader && !alreadyTriggered ? style.startHidenHeader : ""}
      ${showHeader ? style.ShowHeaderAnimation : style.HideHeaderAnimation}  ${
        style.containerHeaderOptions
      }`}
    >
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
            color="#fff"
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
