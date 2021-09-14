import { 
    Container,
    FooterTitle,
    ContainerButtons, 
    WorkButtons, 
    WorkLogo,
    ButtonText,
    HomeLogo,
    HomeButton,
} from './style'

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <Container>
            <FooterTitle> Entre em contato </FooterTitle>

            <ContainerButtons>
                
                <WorkButtons target="_blank" href="mailto: pedrolopeshls@gmail.com">
                    <WorkLogo src={'https://res.cloudinary.com/publi-node-uploads/image/upload/v1631577598/portfolio/icons/gmail_ou0olp.png'} alt=""/> 
                </WorkButtons>

                <WorkButtons target="_blank" href="https://www.behance.net/pedrohenrique139">
                    <WorkLogo src={'https://res.cloudinary.com/publi-node-uploads/image/upload/v1631577598/portfolio/icons/behance_nvbffv.png'} alt=""/> 
                </WorkButtons>

                <WorkButtons target="_blank" href="https://www.linkedin.com/in/pedro-lopes-50b3b818a/">
                    <WorkLogo src={'https://res.cloudinary.com/publi-node-uploads/image/upload/v1631577598/portfolio/icons/linkedin_txj3bg.png'} alt=""/> 
                </WorkButtons>

            </ContainerButtons>

                <HomeButton onClick={() => { scrollToTop() }}>
                    <HomeLogo src={'https://res.cloudinary.com/publi-node-uploads/image/upload/v1631577758/portfolio/icons/home_vao1ix.png'} alt="Home"/>
                    <ButtonText> Voltar ao inicio </ButtonText> 
                </HomeButton>

        </Container>
    )
}

export default Footer