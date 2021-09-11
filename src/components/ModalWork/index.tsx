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

const ModalWork = ({ paramEvent, modalState, items }: any) => {

    const [workItens, setWorkItens]: any[] = useState([])
    const [selectedWork, setSelectedWork] = useState(0)
    

    useEffect(() => {
        if(items !== undefined){
            if(items.data.length > 0){
                setWorkItens(items.data)
            }
        }
    }, [items])


    const closeModal = () => {
        paramEvent(false)
    }


    return (
        <>
            <BGModalWork className={modalState ? 'show-bg-modal' : 'hide-bg-modal'}>
                <Container className={modalState ? 'show-modal' : 'hide-modal'}>
                    <CloseContainer onClick={() => {closeModal()}} >X</CloseContainer>

                    <CardContainer>
                        <ContainerSlickWorks>

                            <ContainerWorkItem
                                style={{ 
                                    transform:  ((selectedWork === 2) ? 'translateX(-180px)' : '') || 
                                                ((selectedWork === 3 && items.data.length === 4) ? 'translateX(-183px)' : '') ||
                                                ((selectedWork === 3 && items.data.length === 5) ? 'translateX(-360px)' : '') ||
                                                ((selectedWork === 4 && items.data.length === 5) ? 'translateX(-363px)' : '')
                                    
                                }}
                                
                            >
                                {/* {checkEmptyData(workItens)} */}
                                {
                                    workItens.length > 0 && 
                                    (
                                        <> 
                                            {workItens.map((item:any, index:number) => {
                                                return (
                                                    <>
                                                        <WorkItem style={{ borderRadius: (index !== selectedWork) ? 10 : ''}} className={'selectedBG-'+index} onClick={() => {setSelectedWork(index)}}>
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
                            style={{
                                marginLeft: 
                                            ((selectedWork === 1 || selectedWork === 2) ? 190 : '') || 
                                            (selectedWork === 3 && items.data.length === 4 ? 367 : '') ||
                                            ((selectedWork === 3 && items.data.length === 5) ? 190 : '') ||
                                            (selectedWork === 4 && items.data.length === 5 ? 367 : '')
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
        </>
    )
}

export default ModalWork;