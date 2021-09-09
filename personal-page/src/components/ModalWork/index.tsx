/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react';
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
} from './style';

const ModalWork = () => {

    const [workItens, setWorkItens] = useState([])
    const [selectedWork, setSelectedWork] = useState(0)

    useEffect(() => {

        const itens:any = [
            {
                image:'https://res.cloudinary.com/publi-node-uploads/image/upload/v1631142564/portfolio/pet-care-logo_bxlqea.png',
                title:'',
                description:''
            },
            {
                image:'https://res.cloudinary.com/publi-node-uploads/image/upload/v1631142564/portfolio/macht-coder-logo_e2hfmn.png',
                title:'',
                description:''
            },
            {
                image:'https://res.cloudinary.com/publi-node-uploads/image/upload/v1631142564/portfolio/alert-commuty-logo_sxzxzf.png',
                title:'',
                description:''
            },
            {
                image:'https://res.cloudinary.com/publi-node-uploads/image/upload/v1631142564/portfolio/educaCred-logo_bahqvy.png',
                title:'',
                description:''
            },
        ]

        setWorkItens(itens)
    }, [])

    return (
        <>
            <BGModalWork>
                <Container>
                    <CloseContainer>X</CloseContainer>

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
                                                        <WorkItem onClick={() => {setSelectedWork(index)}}>
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
                            style={{marginLeft: ((selectedWork === 1 || selectedWork === 2) ? 190 : '') || (selectedWork === 3 ? 367 : '')}} 
                        />
                        </ContainerSlickWorks>
                        
                        <WorkBoxItem>

                        </WorkBoxItem>
                    </CardContainer>
                </Container>
            </BGModalWork>
        </>
    )
}

export default ModalWork;