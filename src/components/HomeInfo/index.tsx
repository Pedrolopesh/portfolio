import { SelfImage, ContainerLetters, TitleBaner } from './style'
import PedroImage from '../../assets/img/pedro-img1.png'

const HomeInfo = () => {
    return (
        <>
            <>
                <SelfImage src={PedroImage} alt="Pedro Lopes" />
                <ContainerLetters>
                    <TitleBaner>Olá</TitleBaner>
                    <TitleBaner>Eu sou Pedro Lopes</TitleBaner>
                </ContainerLetters>
            </>
        </>
    )
}

export default HomeInfo