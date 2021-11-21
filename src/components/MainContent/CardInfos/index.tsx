// import Lottie from 'react-lottie';
// import AnimationAsset from '../../assets/animations/walking.json'
// import AnimationAssetCode from '../../assets/animations/animation_walking.gif'
// import AnimationAssetWork from '../../assets/animations/animation_work1.gif'
import SkillsAnimation from '../SkillsAnimation'
import { HiOutlineTerminal } from 'react-icons/hi';
import { useTranslation } from "react-i18next";
import Style from '../../../styles/mainStyles/CardInfo.module.css'

const CardInfos = () => {
    const { t } = useTranslation();
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true, 
    //     animationData: AnimationAsset,
    //     rendererSettings: {
    //       preserveAspectRatio: 'xMidYMid slice'
    //     }
    // };

    return (
        <>
            <div className={Style.Container}>
                <div className={Style.ContainerTitle}>
                    <h1 className={Style.SectionTitle}>{t('first_section_title')}</h1>
                </div>

                <div className={Style.ContainerCardsInfo}>
                    <div className={Style.CardContainer}> 
                        <div className={Style.Card} style={{ margin: '0px 20px 0px auto' }}>
                            <div className={Style.ContainerHeader}>
                                <HiOutlineTerminal />
                                <h1 className={Style.TitleCard}>{t('first_modal_title')}</h1>
                            </div>
                            {/* <Separate /> */}

                            <div className={Style.ContainerBody}>
                                <p className={Style.CardDescription}>
                                    <span className={Style.ComandText}> pedro@linux-desktop</span>:<span className={Style.ComandText} style={{ color: '#3478FF' }}> ~/{t('first_terminal_path_source')}</span> $
                                    {t('first_terminal_description_0')}
                                    <br />
                                    <br />
                                    {t('first_terminal_description_1')}
                                </p>
                            </div>
                        </div>
                        
                        <img className={Style.AnimationTest} src='/animations/animation_work1.gif'  />
                    </div>

                    <div className={Style.CardContainer} style={{ marginTop: 100 }}>
                        <img className={Style.AnimationTest} style={{ margin: '0px 20px 0px auto' }} src='/animations/animation_walking.gif'  />

                        <div className={Style.Card} style={{ margin: '0px auto 0px 20px' }} >
                            {/* <Separate /> */}
                            <div className={Style.ContainerHeader}>
                                <HiOutlineTerminal />
                                <h1 className={Style.TitleCard}>{t('second_modal_title')}</h1>
                            </div>
                            <div className={Style.ContainerBody}>
                                <p className={Style.CardDescription}>
                                    <span className={Style.ComandText}> pedro@linux-desktop</span>:<span className={Style.ComandText} style={{ color: '#3478FF' }}> ~/{t('second_terminal_path_source')}</span> $
                                    {t('second_terminal_description_0')}
                                    <br />
                                    <br />
                                    {t('second_terminal_description_1')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={Style.CardSkillsContainer} style={{ marginTop: 100 }}>
                    <div className={Style.CardSkills}>
                        <div className={Style.ContainerHeader}>
                                <HiOutlineTerminal />
                                <h1 className={Style.TitleCard}>{t('skills_modal_title')}</h1>
                            </div>
                        {/* <Separate /> */}
                        <SkillsAnimation />
                    </div>
                </div>

            </div>
        </>
    )
}

export default CardInfos;