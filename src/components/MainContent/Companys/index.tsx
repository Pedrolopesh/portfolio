import React from 'react';
import style from '../../../styles/companys.module.css'

const Companys = () => {
    const companys = [
        { img: '/img/company_1.png' },
        { img: '/img/company_2.png' },
        { img: '/img/company_3.png' },
        { img: '/img/company_4.png' },
        { img: '/img/company_5.png' },
    ]

    return (
        <div className={style.containerCompanys}>
            {companys.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <img className={style.imageCompany} src={item.img} alt="Companys" />
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default Companys;