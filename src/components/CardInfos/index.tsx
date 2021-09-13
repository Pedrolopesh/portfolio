import { 
    Container, 
    CardContainer,
    CardSkillsContainer,
    Card,
    CardSkills,
    TitleCard,
    AnimationTest
} from './style'
// import Lottie from 'react-lottie';
// import AnimationAsset from '../../assets/animations/walking.json'
import AnimationAssetCode from '../../assets/animations/animation_walking.gif'
import AnimationAssetWork from '../../assets/animations/animation_work.gif'
import SkillsAnimation from '../SkillsAnimation'

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
                <CardContainer> 
                    <Card style={{ margin: '0px 20px 0px auto' }}>
                        <TitleCard>Trajetória pessoal</TitleCard>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, velit praesentium excepturi magni impedit temporibus officiis nihil! Veritatis recusandae magni quidem ipsam, quasi dicta iure ea, officia minus blanditiis qui dolor? Voluptates doloremque, at sint eius quisquam nulla quis exercitationem?</p>
                    </Card>
                    
                    <AnimationTest src={AnimationAssetWork}  />
                </CardContainer>

                <CardContainer style={{ marginTop: 420 }}>
                    <AnimationTest style={{ margin: '0px 20px 0px auto' }} src={AnimationAssetCode}  />

                    <Card style={{ margin: '0px auto 0px 20px' }} >
                        <TitleCard>Experiência profissional</TitleCard>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, velit praesentium excepturi magni impedit temporibus officiis nihil! Veritatis recusandae magni quidem ipsam, quasi dicta iure ea, officia minus blanditiis qui dolor? Voluptates doloremque, at sint eius quisquam nulla quis exercitationem?</p>
                    </Card>
                </CardContainer>

                <CardSkillsContainer style={{ marginTop: 900 }}>
                    <CardSkills>
                        <TitleCard>Experiência profissional</TitleCard>
                        <hr />
                        <SkillsAnimation />
                    </CardSkills>
                </CardSkillsContainer>
            </Container>
        </>
    )
}

export default CardInfos;