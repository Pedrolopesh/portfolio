import React from 'react';
import style from '../../../styles/AboutMe.module.css';
import { useTranslation } from "react-i18next";

const AboutMe = () => {
    const { t } = useTranslation();

    const redirectTo = (path: string) => {
        window.open(path, '_blank');
    }

    return (
        <div className={style.containerAboutMe}>
            {/* <div className={style.containerImage}>
                <img 
                    className={style.imgAboutMe}
                    src="/img/pedro-img1.jpg" 
                    alt="about me image" 
                />
            </div> */}

            <div className={style.containerAboutMeTexts}>
                <h2>{t('about_me_title')}</h2>
                <h5>{t('about_me_subtitle_1')}</h5>
                <p>{t('about_me_text_1')}</p>
                
                <h5>{t('about_me_subtitle_2')}</h5>
                <p>{t('about_me_text_2')}</p>
            
                <div className={style.containerAction}>
                    <button onClick={() => { redirectTo('https://www.linkedin.com/in/pedro-lopes-50b3b818a/') }} className={style.buttonHireMe}>
                        <p>{t('button_about_me_hire')}</p>
                    </button>

                    <button onClick={() => { redirectTo('https://github.com/Pedrolopesh') }} className={style.buttonAboutMe}>
                        <p>{t('button_about_me_know_more')}</p>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AboutMe;