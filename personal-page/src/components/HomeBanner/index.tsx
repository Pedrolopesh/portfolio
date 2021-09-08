import { Container, ContainerLetters, TitleBaner, BGCode, SelfImage, ContainerParticles} from './style'
import CodeAnimation from '../CodeAnimation';
import PedroImage from '../../assets/img/pedro-img1.png'
import Particles from 'react-particles-js';

 const HomeBanner = () => {
    return (
        <>
            <Container>
                <BGCode>

                    <SelfImage src={PedroImage} alt="Pedro Lopes" />
                    <ContainerLetters>
                        <TitleBaner>Olá</TitleBaner>
                        <TitleBaner>Eu sou Pedro Lopes</TitleBaner>
                    </ContainerLetters>

                    
                    <ContainerParticles>
                        <Particles params={{
                            particles: {
                                color: {
                                    value: '#ffffff'
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outMode: "bounce",
                                    random: false,
                                    speed: 0.3,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        value_area: 800,
                                    },
                                    value: 40,
                                },
                                shape: {
                                    type: "circle",
                                  },
                                size: {
                                    random: true,
                                    value: 1,
                                },
                            }
                        }} />
                    </ContainerParticles>
                    
                    <CodeAnimation></CodeAnimation>
                </BGCode>
            </Container>
        </>
    )
};


export default HomeBanner;