import React, { useState } from 'react';
import style from '../../styles/ModalOption.module.css'
import { AiFillEye, AiOutlineClose } from 'react-icons/ai';
import { HiOutlineTerminal } from 'react-icons/hi';
import { useTranslation } from "react-i18next";
import { useRouter } from 'next/router'

const MoldalOptionPage = () => {
    const router = useRouter()
    const { t } = useTranslation();

    const [visibleModal, setVisibleModal] = useState(true)

    const handleClick = (route: string) => {
        setVisibleModal(!visibleModal)
        router.push(route)
    }

    return (
        <div className={ visibleModal ? style.containerBgModal : style.hideModal}>
            <div className={style.containerModal}>
                <div className={style.containerHeaderModal}>
                    <h3></h3>
                    {/* <button 
                        className={style.closeItem}
                        onClick={() => { setVisibleModal(!visibleModal) }}
                    ><AiOutlineClose size={25} /></button> */}
                </div>

                <div className={style.contentModalOption}>
                    <img
                        className={style.imgModal}
                        src="/animations/animation_thinking.gif" 
                        alt="Thinking animation"
                    />

                    <div className={style.containerTextDisclaimer}>
                        <p>{t('modal_option_text')}</p>
                    </div>

                    <div className={style.containerActionsModal}>
                        <button onClick={() => { handleClick('DesignPage') }} className={style.design_button}>
                            <AiFillEye size={30} />
                            <p className={style.buttonTextModalOptions}> {t('button_design_option')} </p>
                        </button>
                        
                        <button onClick={() => { handleClick('TiPage') }} className={style.code_button}>
                            <HiOutlineTerminal size={30} />
                            <p className={style.buttonTextModalOptions}> {t('button_code_option')} </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoldalOptionPage;