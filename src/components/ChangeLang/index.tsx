import { 
    Container,
    DropDownContainer,
    DropDownOption,
    ButtonChangeLang,
} from './style'
import { IoLanguageOutline } from 'react-icons/io5';
import { useState } from 'react';
import i18next from 'i18next';

const ChangeLang = () => {
    const [visibleDropdown, setVisibleDropdown] = useState(true)

    const changeLangFunc = (newLang: string) => {
        i18next.changeLanguage(newLang)
    }

    return (
        <>

            <Container> 
                <ButtonChangeLang onClick={() => { setVisibleDropdown(!visibleDropdown) }}> <IoLanguageOutline /> </ButtonChangeLang>
                <DropDownContainer className={visibleDropdown ? 'hide-dropdown' : 'show-dropdown'} >
                    <DropDownOption onClick={() => { changeLangFunc('pt') }} style={{ display: 'block' }}>Português</DropDownOption>
                    <DropDownOption onClick={() => { changeLangFunc('en') }} style={{ display: 'block' }}>Inglês</DropDownOption>
                </DropDownContainer>
            </Container>

        </>
    )
}

export default ChangeLang;