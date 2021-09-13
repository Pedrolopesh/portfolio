/* eslint-disable jsx-a11y/img-redundant-alt */
import { Fragment, useEffect, useState } from 'react';
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

    const [responsiveLayout, setResponsiveLayout] = useState(false)

    const responsiveLayoutFunc = () => {
        if(window.screen.width < 700){
            console.log('window screen width', window.screen.width )
            setResponsiveLayout(true)
        }else{
            setResponsiveLayout(false)
        }
    }
    
    window.addEventListener('resize', function(event) {
        responsiveLayoutFunc()
    }, true);

    useEffect(() => {
        responsiveLayoutFunc()
    }, [])

    useEffect(() => {
        if(items !== undefined){
            if(items.data.length > 0){
                setWorkItens(items.data)
            }
        }
    }, [items])


    const closeModal = () => {
        paramEvent(false)
        setSelectedWork(0)
        unlockScroll()
    }

    const openProject = (param: any) => {
        console.log('param', param.link)
        // window.location.href = "www.yoursite.com";
        // window.location.replace(param);
    }

    const checkData = (param: any) => {
        if(param) {
            return param
        }else{
            return ''
        }
    }

    const unlockScroll = () => {
        const bodyLocator:any = document.querySelector("body")
        bodyLocator.removeAttribute("style")
        // ("style", "overflow: hidden");
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
                                    transform:  ((selectedWork === 2 && !responsiveLayout) ? 'translateX(-180px)' : '') ||
                                                ((selectedWork === 3 && items.data.length === 4 && !responsiveLayout) ? 'translateX(-205px)' : '') ||
                                                ((selectedWork === 3 && items.data.length === 5 && !responsiveLayout) ? 'translateX(-360px)' : '') ||
                                                ((selectedWork === 4 && items.data.length === 5 && !responsiveLayout) ? 'translateX(-390px)' : '') ||
                                                
                                                //RESPONSIVE LAYOUT
                                                ((responsiveLayout && selectedWork === 1) ? 'translateX(-110px)' : '') ||
                                                ((responsiveLayout && selectedWork === 2) ? 'translateX(-290px)' : '') ||
                                                ((responsiveLayout && selectedWork === 3) ? 'translateX(-470px)' : '') ||
                                                ((responsiveLayout && selectedWork === 4) ? 'translateX(-650px)' : '')
                                    
                                }}
                                
                            >
                                {
                                    workItens.length > 0 && 
                                    (
                                        <> 
                                            {workItens.map((item:any, index:number) => {
                                                return (
                                                    <Fragment key={index}>
                                                        <WorkItem style={{ border: (index === selectedWork) ? '4px solid' : ''}} className={ (index === selectedWork) ? 'selectedBG' : ''} onClick={() => {setSelectedWork(index)}}>
                                                            <WorkImage src={item.image} alt="work Image" />
                                                        </WorkItem>
                                                    </Fragment>
                                                )
                                            })}
                                        </>
                                    ) 
                                }

                                
                            </ContainerWorkItem>

                        <UnderScoreMarker
                            style={{
                                marginLeft: 
                                            (selectedWork === 1 && !responsiveLayout ? 265 : '') ||
                                            (selectedWork === 2 && !responsiveLayout ? 265 : '') ||
                                            (selectedWork === 3 && items.data.length === 4 && !responsiveLayout ? 415 : '') ||
                                            ((selectedWork === 3 && items.data.length === 5 && !responsiveLayout) ? 265 : '') ||
                                            (selectedWork === 4 && items.data.length === 5 && !responsiveLayout ? 410 : '') ||
                                            
                                            //RESPONSIVE LAYOUT
                                            ((responsiveLayout && selectedWork === 1) ? 150 : '' ) ||
                                            ((responsiveLayout && selectedWork === 2) ? 150 : '' ) ||
                                            ((responsiveLayout && selectedWork === 3) ? 150 : '' ) ||
                                            ((responsiveLayout && selectedWork === 4) ? 150 : '' )
                                            // ((selectedWork === 3 && items.data.length === 4 && responsiveLayout) ? 150 : '' )
                            }} 
                        />
                        </ContainerSlickWorks>
                        
                        <WorkBoxItem>
                            <ContainerDescription>
                                <Title> { workItens.length > 0 && checkData(workItens[selectedWork].title)} </Title>

                                <DescriptionText> {workItens.length > 0 && workItens[selectedWork].description} </DescriptionText>
                            </ContainerDescription>
                        </WorkBoxItem>

                        <ButtonWork target="_blank" href={items.data[selectedWork].link} > 
                            <ButtonText onClick={() => { openProject(items.data[selectedWork]) } }>Ver mais</ButtonText>
                            <FaDoorOpen style={{ color: 'white', fontSize: 20, marginRight: 'auto' }} /> 
                        </ButtonWork>
                    </CardContainer>
                </Container>
            </BGModalWork>
        </>
    )
}

export default ModalWork;