import { useTranslation } from "react-i18next";
import Style from '../../../styles/mainStyles/FooterDesign.module.css'

const Footer = () => {
    const { t } = useTranslation();

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <div className={Style.Container}>
            <h1 className={Style.FooterTitle}>{t('footer_section_title')}</h1>

            <div className={Style.ContainerButtons}>
                
                <a className={Style.WorkButtons} target="_blank" href="mailto: pedrolopeshls@gmail.com" rel="noopener noreferrer">
                    <img className={Style.WorkLogo} src={'https://res.cloudinary.com/publi-node-uploads/image/upload/v1631577598/portfolio/icons/gmail_ou0olp.png'} alt="gmail logo"/> 
                </a>

                <a className={Style.WorkButtons} target="_blank" href="https://www.behance.net/pedrohenrique139" rel="noopener noreferrer">
                    <img className={Style.WorkLogo} src={'https://res.cloudinary.com/publi-node-uploads/image/upload/v1631577598/portfolio/icons/behance_nvbffv.png'} alt="behance logo"/> 
                </a>

                <a className={Style.WorkButtons} target="_blank" href="https://www.linkedin.com/in/pedro-lopes-50b3b818a/" rel="noopener noreferrer">
                    <img className={Style.WorkLogo} src={'https://res.cloudinary.com/publi-node-uploads/image/upload/v1631577598/portfolio/icons/linkedin_txj3bg.png'} alt="linkedin logo"/> 
                </a>

            </div>

                <button className={Style.HomeButton} onClick={() => { scrollToTop() }}>
                    <img className={Style.HomeLogo} src={'https://res.cloudinary.com/publi-node-uploads/image/upload/v1631577758/portfolio/icons/home_vao1ix.png'} alt="Home icon"/>
                    <span className={Style.ButtonText}> {t('footer_button_home')} </span> 
                </button>

        </div>
    )
}

export default Footer