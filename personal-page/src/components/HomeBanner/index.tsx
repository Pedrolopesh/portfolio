import { Container, ContainerLetters, TitleBaner, BGCode, SelfImage} from './style'
import CodeAnimation from '../CodeAnimation';
import PedroImage from '../../assets/img/pedro-img1.png'

 const HomeBanner = () => {
    return (
        <>
            <Container>
                <BGCode>

                    <ContainerLetters>
                        <TitleBaner>Olá</TitleBaner>
                        <TitleBaner>Eu sou Pedro Lopes</TitleBaner>
                    </ContainerLetters>

                    <SelfImage src={PedroImage} alt="Pedro Lopes" />
                    <CodeAnimation></CodeAnimation>
                </BGCode>
            </Container>
        </>
    )
};


export default HomeBanner;