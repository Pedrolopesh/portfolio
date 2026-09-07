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
          <Link
            href="/"
            className={
              router.pathname === "/" ? style.selectedPath : style.unSelectedPath
            }
          >
            {t("header_options.home")}
          </Link>

          <Link
            href="/Project"
            className={
              router.pathname === "/Project"
                ? style.selectedPath
                : style.unSelectedPath
            }
          >
            {t("header_options.projects")}
          </Link>

          <Link
            href="/Stacks"
            className={
              router.pathname === "/Stacks"
                ? style.selectedPath
                : style.unSelectedPath
            }
          >
            {t("header_options.stacks")}
          </Link>

          <Link
            href="/Contact"
            className={
              router.pathname === "/Contact"
                ? style.selectedPath
                : style.unSelectedPath
            }
          >
            {t("header_options.contact")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default LinkOptions;
