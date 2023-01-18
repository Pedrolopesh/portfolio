import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import style from '../../styles/HeaderOption.module.css'
import { useTranslation } from "react-i18next";

import { AiFillEye } from 'react-icons/ai';
import { HiOutlineTerminal } from 'react-icons/hi';

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
            <div className={style.containerLeftHeaderOptions}>

                <div className={style.containerLinks}>
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
                </div>

                {
                    (checkPath() === '/DesignPage') ? 
                    <div>
                        <button onClick={() => { router.push('TiPage') }} className={style.code_button}>
                            <HiOutlineTerminal size={30} />
                            <p className={style.buttonTextModalOptions}> {t('header_options.button_code_option')} </p>
                        </button>
                    </div> :
                    <div>
                        <button onClick={() => { router.push('DesignPage') }} className={style.design_button}>
                            <AiFillEye size={30} />
                            <p className={style.buttonTextModalOptions}> {t('header_options.button_design_option')} </p>
                        </button>

                    </div>
                }
            </div>
            {/* <button className={style.contactButton}>{t('header_options.contact')}</button> */}
        </>
    )
}

export default LinkOptions;