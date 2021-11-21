import { 
    Container,
    DropDownContainer,
    DropDownOption,
    ButtonChangeLang,
} from './style'
import { IoLanguageOutline } from 'react-icons/io5';
import { useState } from 'react';
import i18next from 'i18next';
import Style from '../../styles/ChangeLang.module.css'

const ChangeLang = () => {
    const [visibleDropdown, setVisibleDropdown] = useState(true)

    const changeLangFunc = (newLang: string) => {
        // console.log(newLang)
        i18next.changeLanguage(newLang)
        setVisibleDropdown(!visibleDropdown)
    }

    return (
        <>
            <div className={Style.Container} > 
                <button className={Style.ButtonChangeLang} onClick={() => { setVisibleDropdown(!visibleDropdown) }}> <IoLanguageOutline /> </button>
                <div className={ `${visibleDropdown ? Style.hideDropdown : Style.showDropdown} ${Style.DropDownContainer}`}>
                    <span className={Style.DropDownOption} onClick={() => { changeLangFunc('pt') }} style={{ display: 'block' }}>Português</span>
                    <span className={Style.DropDownOption} onClick={() => { changeLangFunc('en') }} style={{ display: 'block' }}>Inglês</span>
                </div>
            </div>
        </>
    )
}

export default ChangeLang;