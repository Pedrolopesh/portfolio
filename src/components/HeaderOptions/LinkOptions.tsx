import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import style from '../../styles/HeaderOption.module.css'
import { useTranslation } from "react-i18next";

const LinkOptions = (routerParam: any) => {
    const { t } = useTranslation();
    const router = routerParam.routerParam
    const [sourceRoute, setSourceRoute] = useState('')
    
    
    const checkPath = () => {
        if(sourceRoute === '/DesignPage') {
            return '/DesignPage'
        }
        else {
            return '/TiPage'
        }
    }
    
    useEffect(() => {
        const sourceRoute = localStorage.getItem('sourceRoute')
        setSourceRoute(sourceRoute)
    }, [sourceRoute])

    return (
        <>
            {/* <Link href={(router.pathname === '/DesignPage' || router.pathname === '/Project') ? "/DesignPage" : "TiPage"}> */}
            <Link href={checkPath()}>
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

            <Link href="/Contact">
                <a
                    className={
                        `${
                            (router.pathname === '/Contact') ? 
                            style.selectedPath : 
                            style.unSelectedPath
                        }`
                    }
                >{t('header_options.contact')}</a>
            </Link>

            {/* <button className={style.contactButton}>{t('header_options.contact')}</button> */}
        </>
    )
}

export default LinkOptions;