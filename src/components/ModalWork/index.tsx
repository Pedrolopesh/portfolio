/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react';
import { FaDoorOpen } from 'react-icons/fa';
import { 
    BGModalWork, 
    Container, 
    CloseContainer, 
    CardContainer, 
    ContainerSlickWorks,
    ContainerWorkItem,
    WorkItem,
    WorkImage,
    WorkBoxItem,
    UnderScoreMarker,
    Title,
    ContainerDescription,
    DescriptionText,
    ButtonWork,
    ButtonText,
} from './style';

interface Itens {
    image:string,
    title:string,
    description:string,
    link:string,
}

interface TypeParamEvent {
    modalState: boolean,
    paramEvent:(state: boolean) => void
}



const ModalWork = ({ paramEvent, modalState }: TypeParamEvent) => {

    const [workItens, setWorkItens] = useState<Itens[]>([])
    const [selectedWork, setSelectedWork] = useState(0)
    
    const [hiddenAll, setHiddenAll] = useState(true)


    useEffect(() => {

        const itens:Itens[] = [
            {
                image:'https://res.cloudinary.com/publi-node-uploads/image/upload/v1631142564/portfolio/pet-care-logo_bxlqea.png',
                title:'Pet Care',
                description:'O UX/UI desse projeto foi feito a partir de uma atividade da aula de processos de software da faculdade, propõe um app para ajudar animais que estão em situações de rua ou mesmo que correm algum perigo ...',
                link: ''
            },
            {
                image:'https://res.cloudinary.com/publi-node-uploads/image/upload/v1631142564/portfolio/macht-coder-logo_e2hfmn.png',
                title:'Match Coder',
                description:'Match Coder é um projeto de UX/UI feito de uma atividade da aula de processos de software da faculdade, a ideia desse software é fazer um sistema de relacionamento entre empresa e canditado da área de software ...',
                link: ''
            },
            {
                image:'https://res.cloudinary.com/publi-node-uploads/image/upload/v1631142564/portfolio/alert-commuty-logo_sxzxzf.png',
                title:'Community Alert',
                description:'Esse projeto UX/UI foi criado a partir de uma lista de re4quisitos proposta pelo professor de Projetos de interface da faculdade, tem a ideia de avisar a população de desastres naturais que poderm estar acontecendo ...',
                link: ''
            },
            {
                image:'https://res.cloudinary.com/publi-node-uploads/image/upload/v1631142564/portfolio/educaCred-logo_bahqvy.png',
                title:'Educa Cred',
                description:'Educa Cred é um projeto de UX/UI feito de um desafio proposto pelo SERASA para propor uma solução financeira para a população, baseado em alguns requisitos porpóstos pelo coordenador da vaga ...',
                link: ''
            },
        ]

        setWorkItens(itens)
    }, [])

    const closeModal = () => {
        paramEvent(false)
        setTimeout(() => {
            setHiddenAll(true)
        }, 1000)
    }

    useEffect(() => {
        if(modalState){
            setHiddenAll(false)
        }
    }, [modalState])

    // setTimeout(() => {
    //     setHiddenAll(true)
    // }, 1000)

    return (
        <>
            <div className={hiddenAll ? 'hidden-modal' : ''}>
            <BGModalWork className={modalState ? 'show-bg-modal' : 'hide-bg-modal'}>
                <Container className={modalState ? 'show-modal' : 'hide-modal'}>
                    <CloseContainer onClick={() => {closeModal()}} >X</CloseContainer>

                    <CardContainer>
                        <ContainerSlickWorks>

                            <ContainerWorkItem 
                                style={{ transform: ( (selectedWork === 2) ? 'translateX(-180px)' : '') || ((selectedWork === 3) ? 'translateX(-183px)' : ''), }}
                            >
                                {
                                    workItens && 
                                    (
                                        <> 
                                            {workItens.map((item:any, index:number) => {
                                                return (
                                                    <>
                                                        <WorkItem className={'selectedBG-'+selectedWork} onClick={() => {setSelectedWork(index)}}>
                                                            <WorkImage src={item.image} alt="work Image" />
                                                        </WorkItem>
                                                    </>
                                                )
                                            })}
                                        </>
                                    ) 
                                }

                                
                            </ContainerWorkItem>

                        <UnderScoreMarker
                            className={'selectedBG-'+selectedWork}
                            style={{
                                marginLeft: ((selectedWork === 1 || selectedWork === 2) ? 190 : '') || (selectedWork === 3 ? 367 : ''), 
                            }} 
                        />
                        </ContainerSlickWorks>
                        
                        <WorkBoxItem>
                            <ContainerDescription>
                                <Title> { workItens.length > 0 && workItens[selectedWork].title} </Title>

                                <DescriptionText> {workItens.length > 0 && workItens[selectedWork].description} </DescriptionText>
                            </ContainerDescription>
                        </WorkBoxItem>

                        <ButtonWork> 
                            <ButtonText>Ver mais</ButtonText>
                            <FaDoorOpen style={{ color: 'white', fontSize: 20, marginRight: 'auto' }} /> 
                        </ButtonWork>
                    </CardContainer>
                </Container>
            </BGModalWork>
            </div>
        </>
    )
}

export default ModalWork;