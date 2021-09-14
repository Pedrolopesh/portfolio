import { 
    Container, 
    ContainerTitle,
    SectionTitle,
    CardContainer,
    CardSkillsContainer,
    ContainerCardsInfo,
    Card,
    CardSkills,
    TitleCard,
    Separate,
    CardDescription,
    AnimationTest,
} from './style'
// import Lottie from 'react-lottie';
// import AnimationAsset from '../../assets/animations/walking.json'
import AnimationAssetCode from '../../assets/animations/animation_walking.gif'
import AnimationAssetWork from '../../assets/animations/animation_work1.gif'
import SkillsAnimation from '../SkillsAnimation'
import Footer from '../../components/Footer';


const CardInfos = () => {

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
            <Container>
                <ContainerTitle>
                    <SectionTitle>Quem sou eu?</SectionTitle>
                </ContainerTitle>

                <ContainerCardsInfo>
                    <CardContainer> 
                        <Card style={{ margin: '0px 20px 0px auto' }}>
                            <TitleCard>Trajetória pessoal</TitleCard>
                            <Separate />
                            <CardDescription>
                                Comecei na tecnologia através da área de testes de softwares como QA realizando testes em produtos financeiros, em seguida, comecei com implementação e manutenção de códigos frontend, 
                                nessa área de atuação aprendi alguns frameworks javascript como vue.js, react, react-native e angular. 
                                <br />
                                <br />
                                Em paralelo estudando ferramentas ágeis para aprimorar nos processos e gerenciamento do tempo, em seguida estudei linguagens e frameworks backend como o node js, express, nest js e loopback 4, por fim, 
                                junto a este conhecimentos em API's fiz a criação de alguns esquemas e funcionalidades em banco de dados NOSQL e MYSQL.
                            </CardDescription>
                        </Card>
                        
                        <AnimationTest src={AnimationAssetWork}  />
                    </CardContainer>

                    <CardContainer style={{ marginTop: 100 }}>
                        <AnimationTest style={{ margin: '0px 20px 0px auto' }} src={AnimationAssetCode}  />

                        <Card style={{ margin: '0px auto 0px 20px' }} >
                            <TitleCard>Experiência profissional</TitleCard>
                            <Separate />
                            <CardDescription>
                                Atualmente atuo como desenvolvedor FullStack, estou cursando graduação em engenharia de software na UDESC (Universidade estadual de Santa Catarina) e possuo 2 anos de experiência em desenvolvimento frontend e 1 ano e meio de conhecimento em backend,
                                realizei projetos pessoais utilizando frameworks javascripts buscando sempre uma melhor qualificação. 
                                <br />
                                <br />
                                Obtive certificação em design gráfico, me ajudando a desenvolver minhas soft skills e a ter um conhecimento diversificado, isto tem me favorecido com relação ao visual e experiência do usuário. Atualmente sigo estudando mais ferramentas de design e ênfase
                                com a experiÊncia do usuário.
                            </CardDescription>
                        </Card>
                    </CardContainer>
                </ContainerCardsInfo>


                <CardSkillsContainer style={{ marginTop: 100 }}>
                    <CardSkills>
                        <TitleCard>Software Skills</TitleCard>
                        <Separate />
                        <SkillsAnimation />
                    </CardSkills>
                </CardSkillsContainer>


                <Footer />
            </Container>
        </>
    )
}

export default CardInfos;