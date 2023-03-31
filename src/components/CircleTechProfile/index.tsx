import React from 'react';
import style from '../../styles/CircleTechProfile.module.css';


const CircleTechProfile = () => {
    return (
        <div className={style.orbit}>
            <div className={style.centerImage}>
                <img src="/img/circleTechProfile/woman.png" alt="" className={style.imageCenter} />
                <img src="/img/circleTechProfile/man.png" alt="" className={style.imageCenter} />
            </div>
            <ul className={style.containerTechIcons}>
                <li>
                    <div>
                        <img src="/img/circleTechProfile/Docker.svg" alt="" />
                    </div>
                    <div className={style.stackModalContainer}>

                    </div>
                </li>
                <li>
                    <div>
                        <img src="/img/circleTechProfile/Java.svg" alt="" />
                    </div>
                    <p>Time & Attendance</p>
                </li>
                <li>
                    <div><img src="/img/circleTechProfile/Javascript.svg" alt="" /></div>
                    <p>Onboarding</p>
                </li>
                <li>
                    <div><img src="/img/circleTechProfile/Node.svg" alt="" /></div>
                    <p>HR Information System</p>
                </li>
                <li>
                    <div><img src="/img/circleTechProfile/Python.svg" alt="" /></div>
                    <p>Leaves & Holidays</p>
                </li>
                <li>
                    <div><img src="/img/circleTechProfile/React.svg" alt="" /></div>
                    <p>Exit & Off-boarding</p>
                </li>
                <li>
                    <div><img src="/img/circleTechProfile/SQL.svg" alt="" /></div>
                    <p>Travel & Requisitions</p>
                </li>
                <li>
                    <div><img src="/img/circleTechProfile/Vue.svg" alt="" /></div>
                    <p>Disciplinary</p>
                </li>
            </ul>
        </div>
    )
}

export default CircleTechProfile