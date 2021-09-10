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
    
    const [hiddenAll, setHiddenAll] = useState(true)

    useEffect(() => {
        if(items !== undefined){
            if(items.data.length > 0){
                console.log('items 1', items)
                setWorkItens(items.data)
            }
        }
    }, [items])

    useEffect(() => {
        console.log('workItens', workItens)
        // if(data.length > 0){
        //     setWorkItens(data)
        // }
    }, [workItens])

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