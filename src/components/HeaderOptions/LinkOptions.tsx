import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "./style.module.css";
import { useTranslation } from "react-i18next";

const LinkOptions = (routerParam: any) => {
  const { t } = useTranslation();
  const router = routerParam.routerParam;
  const [sourceRoute, setSourceRoute] = useState("");

  useEffect(() => {
    const sourceRoute = localStorage.getItem("sourceRoute");
    setSourceRoute(sourceRoute);
  }, [sourceRoute]);

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
