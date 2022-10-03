import React from 'react';
import { HiOutlineLightBulb, HiDesktopComputer } from 'react-icons/hi'
import { BsCodeSquare } from 'react-icons/bs';
import { useTranslation } from "react-i18next";
import style from '../../../styles/Services.module.css';

const servicesData = [
    {
        icon: <HiOutlineLightBulb size={40} color={'#ff7897'} />,
        title: 'services_ux_ui',
        text: 'services_ux_ui_text',
        link: ''
    },
    {
        icon: <HiDesktopComputer size={40} color={'#ff7897'} />,
        title: 'services_web_dev',
        text: 'services_web_dev_text',
        link: ''
    },
    {
        icon: <BsCodeSquare size={40} color={'#ff7897'} />,
        title: 'services_software_engineer',
        text: 'services_software_engineer_text',
        link: ''
    },
]

const Services = () => {
    const { t } = useTranslation();

    return (
        <div className={style.containerServices}>
            <p className={style.preTitleServices}>{t('pretitle_services')}</p>
            <h3 className={style.titleServices}>{t('title_services')}</h3>
            <div className={style.containerServiceCards}>
                {servicesData.map((service, index) => {
                    return (
                        <div className={style.serviceCard}>
                            {service.icon}
                            <h3>{t(service.title)}</h3>
                            <p>{t(service.text)}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Services;