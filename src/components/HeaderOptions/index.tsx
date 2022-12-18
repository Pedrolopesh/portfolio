import React from "react";
import Link from 'next/link'
import { AiFillEye } from 'react-icons/ai';
import { HiOutlineTerminal } from 'react-icons/hi';
import { useTranslation } from "react-i18next";
import style from '../../styles/HeaderOption.module.css'
import { useRouter } from 'next/router'
import Logo from '../../assets/icons/logo'
const HeaderOptions = () => {
    const router = useRouter()
    const { t } = useTranslation();

    const handleClick = (route: string) => {
        // setVisibleModal(!visibleModal)
        router.push(route)
    }

    console.log('route header component: ', router)

    return (
        <div className={style.containerHeaderOptions}>
            <div className={style.containerHeaderOptionsContent}>
                <Logo classParam={style.logoHeaderOptions}/>

                <div className={style.containerLeftHeaderOptions}>
                    <div className={style.containerLinks}>

                        <Link href={(router.pathname === '/DesignPage' || router.pathname === '/Project') ? "/DesignPage" : "TiPage"}>
                            <a>{t('header_options.home')}</a>
                        </Link>

                        <Link href="/about">
                            <a>{t('header_options.projects')}</a>
                        </Link>
                        <a href="">{t('header_options.contact')}</a>
                    </div>
                    {
                        (router.pathname === '/DesignPage' || router.pathname === '/Project') ? 
                        <div>
                            <button onClick={() => { handleClick('TiPage') }} className={style.code_button}>
                                <HiOutlineTerminal size={30} />
                                <p className={style.buttonTextModalOptions}> {t('header_options.button_code_option')} </p>
                            </button>
                        </div> :
                        <div>
                            <button onClick={() => { handleClick('DesignPage') }} className={style.design_button}>
                                <AiFillEye size={30} />
                                <p className={style.buttonTextModalOptions}> {t('header_options.button_design_option')} </p>
                            </button>

                        </div>
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default HeaderOptions;