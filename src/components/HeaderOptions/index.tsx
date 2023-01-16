import React from "react";
import Link from 'next/link'
import { AiFillEye } from 'react-icons/ai';
import { HiOutlineTerminal, HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { useTranslation } from "react-i18next";
import style from '../../styles/HeaderOption.module.css'
import { useRouter } from 'next/router'
import Logo from '../../assets/icons/logo';
import LinkOptions from "./LinkOptions";
const HeaderOptions = () => {
    const router = useRouter()
    const { t } = useTranslation();

    const handleClick = (route: string) => {
        // setVisibleModal(!visibleModal)
        router.push(route)
    }

    const [visibleModal, setVisibleModal] = React.useState(false)

    console.log('route header component: ', router)

    return (
        <div className={style.containerHeaderOptions}>
            <div className={style.containerHeaderOptionsContent}>
                <Logo classParam={style.logoHeaderOptions}/>

                <div className={style.containerLeftHeaderOptions}>
                    <div className={style.containerLinks}>
                        <LinkOptions routerParam={router} />
                        {/* <Link href={(router.pathname === '/DesignPage' || router.pathname === '/Project') ? "/DesignPage" : "TiPage"}>
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
                        </Link> */}

                        {/* <button className={style.contactButton}>{t('header_options.contact')}</button> */}
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

                <div className={style.containerMenuMobile}>
                    <HiMenu 
                        onClick={() => { setVisibleModal(!visibleModal) }}
                        size={45} 
                    />
                </div>
            </div>

            <div className={
                `${style.containerMobileOptions + ' ' + (visibleModal ? style.showMobileOptions : style.hideMobileOptions)}`
            }>

                <GrClose 
                    onClick={() => { setVisibleModal(!visibleModal) }}
                    className={style.closeButton} size={30} 
                />

                <div className={style.containerMobileLinks}>
                    <LinkOptions routerParam={router} />
                </div>
            </div>
        </div>
    );
}

export default HeaderOptions;