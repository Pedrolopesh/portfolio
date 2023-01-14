import React from 'react';
import Link from 'next/link'
import style from '../../styles/HeaderOption.module.css'
import { useTranslation } from "react-i18next";

const LinkOptions = (routerParam: any) => {
    const { t } = useTranslation();
    const router = routerParam.routerParam
    return (
        <>
            <Link href={(router.pathname === '/DesignPage' || router.pathname === '/Project') ? "/DesignPage" : "TiPage"}>
                <a 
                    className={
                        `${
                            (router.pathname === '/DesignPage') ? 
                            style.selectedPath : 
                            style.unSelectedPath
                        }`
                    }
                    >{t('header_options.home')}</a>
            </Link>

            <Link href="/Project">
                <a
                    className={
                        `${
                            (router.pathname === '/Project') ? 
                            style.selectedPath : 
                            style.unSelectedPath
                        }`
                    }
                >{t('header_options.projects')}</a>
            </Link>

            <button className={style.contactButton}>{t('header_options.contact')}</button>
        </>
    )
}

export default LinkOptions;