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
    // Separate,
    CardDescription,
    AnimationTest,
    ContainerHeader,
    ContainerBody,
    ComandText,
} from './style'
// import Lottie from 'react-lottie';
// import AnimationAsset from '../../assets/animations/walking.json'
// import AnimationAssetCode from '../../assets/animations/animation_walking.gif'
// import AnimationAssetWork from '../../assets/animations/animation_work1.gif'
import SkillsAnimation from '../SkillsAnimation'
import { HiOutlineTerminal } from 'react-icons/hi';
import { useTranslation } from "react-i18next";

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
            <Container>
                <ContainerTitle>
                    <SectionTitle>{t('first_section_title')}</SectionTitle>
                </ContainerTitle>

                <ContainerCardsInfo>
                    <CardContainer> 
                        <Card style={{ margin: '0px 20px 0px auto' }}>
                            <ContainerHeader>
                                <HiOutlineTerminal />
                                <TitleCard>{t('first_modal_title')}</TitleCard>
                            </ContainerHeader>
                            {/* <Separate /> */}

                            <ContainerBody>
                                <CardDescription>
                                    <ComandText> pedro@linux-desktop</ComandText>:<ComandText style={{ color: '#3478FF' }}> ~/{t('first_terminal_path_source')}</ComandText> $
                                    {t('first_terminal_description_0')}
                                    <br />
                                    <br />
                                    {t('first_terminal_description_1')}
                                </CardDescription>
                            </ContainerBody>
                        </Card>
                        
                        <AnimationTest src='/animations/animation_work1.gif'  />
                    </CardContainer>

                    <CardContainer style={{ marginTop: 100 }}>
                        <AnimationTest style={{ margin: '0px 20px 0px auto' }} src='/animations/animation_walking.gif'  />

                        <Card style={{ margin: '0px auto 0px 20px' }} >
                            {/* <Separate /> */}
                            <ContainerHeader>
                                <HiOutlineTerminal />
                                <TitleCard>{t('second_modal_title')}</TitleCard>
                            </ContainerHeader>
                            <ContainerBody>
                                <CardDescription>
                                    <ComandText> pedro@linux-desktop</ComandText>:<ComandText style={{ color: '#3478FF' }}> ~/{t('second_terminal_path_source')}</ComandText> $
                                    {t('second_terminal_description_0')}
                                    <br />
                                    <br />
                                    {t('second_terminal_description_1')}
                                </CardDescription>
                            </ContainerBody>
                        </Card>
                    </CardContainer>
                </ContainerCardsInfo>


                <CardSkillsContainer style={{ marginTop: 100 }}>
                    <CardSkills>
                        <ContainerHeader>
                                <HiOutlineTerminal />
                                <TitleCard>{t('skills_modal_title')}</TitleCard>
                            </ContainerHeader>
                        {/* <Separate /> */}
                        <SkillsAnimation />
                    </CardSkills>
                </CardSkillsContainer>

            </Container>
        </>
    )
}

export default CardInfos;