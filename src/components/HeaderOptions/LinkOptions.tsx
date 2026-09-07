import React from "react";
import Link from "next/link";
import type { NextRouter } from "next/router";
import style from "./style.module.css";
import { useTranslation } from "react-i18next";

interface ILinkOptionsProps {
  routerParam: NextRouter;
}

const LinkOptions = ({ routerParam: router }: ILinkOptionsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={style.containerLeftHeaderOptions}>
        <div className={style.containerLinks}>
          <Link href="/">
            <a
              className={`${
                router.pathname === "/"
                  ? style.selectedPath
                  : style.unSelectedPath
              }`}
            >
              {t("header_options.home")}
            </a>
          </Link>

          <Link href="/Project">
            <a
              className={`${
                router.pathname === "/Project"
                  ? style.selectedPath
                  : style.unSelectedPath
              }`}
            >
              {t("header_options.projects")}
            </a>
          </Link>

          <Link href="/Stacks">
            <a
              className={`${
                router.pathname === "/Stacks"
                  ? style.selectedPath
                  : style.unSelectedPath
              }`}
            >
              {t("header_options.stacks")}
            </a>
          </Link>

          <Link href="/Contact">
            <a
              className={`${
                router.pathname === "/Contact"
                  ? style.selectedPath
                  : style.unSelectedPath
              }`}
            >
              {t("header_options.contact")}
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LinkOptions;
