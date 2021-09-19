import { useState, useEffect } from 'react'
import {
    Card,
    CardHeader,
    TitleCard,
    ContainerBody,
    WorkImage,
    CardDescription,
    ComandText,
    TextCard,
    ButtonWork,
    ButtonText
} from './style'
import './style.css'
import { HiOutlineTerminal } from 'react-icons/hi';
import { FaDoorOpen } from 'react-icons/fa';


const WorkCard = ({ paramEvent, modalState, items }: any) => {
    const [workItens, setWorkItens]: any[] = useState([])
    // const [selectedWork, setSelectedWork] = useState(0)
    // const [responsiveLayout, setResponsiveLayout] = useState(false)

    const slider:any = document.querySelector('.items');
    let isDown = false;
    let startX:any;
    let scrollLeft:any;

    if(slider !== null) {

        slider.addEventListener('mousedown', (e:any) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
    
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
    
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
    
        slider.addEventListener('mousemove', (e:any) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
            console.log(walk);
        });

    }

    const redirect = (param:any) => {
        window.open( param.link, '_blank');
    }

    useEffect(() => {
        console.log('items', items)
        if(items !== undefined){
            if(items.data.length > 0){
                setWorkItens(items.data)
            }
        }
    }, [items])


    return (
        <>
            <div className="items">
                {/* <div className="item item1">

                </div> */}
                {workItens.map((item:any, index:number) => {
                    console.log('foi ?')
                    return (
                        <>
                            <Card className="item item2">
                                <CardHeader>
                                    <HiOutlineTerminal />
                                    <TitleCard>{item.title}</TitleCard>
                                </CardHeader>
                                <ContainerBody>
                                    <WorkImage src={item.image} />
                                    <CardDescription>
                                        <ComandText> pedro@linux-desktop</ComandText>:<ComandText style={{ color: '#3478FF' }}> ~/works</ComandText> $ {''}
                                        <TextCard>{item.description}</TextCard>
                                    </CardDescription>
                                    
                                    <ButtonWork onClick={() => {redirect(items.data[index])}} className="linkButton" target="_blank" href={items.link}>
                                        <FaDoorOpen style={{ color: 'white', fontSize: 20, marginLeft: 'auto' }} /> 
                                        <ButtonText>Ver mais</ButtonText>
                                    </ButtonWork>
                                </ContainerBody>
                            </Card>
                        </>
                    )
                })}
                {/* <div className="item item3"></div>
                <div className="item item4"></div>
                <div className="item item5"></div>
                <div className="item item6"></div>
                <div className="item item7"></div>
                <div className="item item8"></div>
                <div className="item item9"></div>
                <div className="item item10"></div> */}
            </div>
        </>
    )
}

export default WorkCard;