import { useState, useEffect, Fragment } from 'react'
import { useTranslation } from "react-i18next";
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


const WorkCard = ({ paramEvent, modalState, items, workOption }: any) => {
    const { t } = useTranslation();

    const [workItens, setWorkItens]: any[] = useState([])

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
        });

    }

    const redirect = (param:any) => {
        window.open( param.link, '_blank');
    }

    useEffect(() => {
        if(items !== undefined){
            if(items.data.length > 0){
                setWorkItens(items.data)
            }
        }
    }, [items])


    return (
        <>
            <div className="items">
                {workItens.map((item:any, index:number) => {
                    return (
                        <Fragment key={index}>
                            <Card className="item item2">
                                <CardHeader>
                                    <HiOutlineTerminal />
                                    <TitleCard>{item.title}</TitleCard>
                                </CardHeader>
                                <ContainerBody>
                                    <WorkImage src={item.image} />
                                    <CardDescription>
                                        <ComandText> pedro@linux-desktop</ComandText>:<ComandText style={{ color: '#3478FF' }}> ~/works</ComandText> $ {''}
                                        {/* <TextCard>{item.description}</TextCard> */}
                                        <TextCard>{t(`${workOption}_project_description_${index}`)}</TextCard>
                                    </CardDescription>
                                    
                                    <ButtonWork onClick={() => {redirect(items.data[index])}} className="linkButton" target="_blank" href={items.link}>
                                        <FaDoorOpen style={{ color: 'white', fontSize: 20, marginLeft: 'auto' }} /> 
                                        <ButtonText>{t('button_work_show_more')}</ButtonText>
                                    </ButtonWork>
                                </ContainerBody>
                            </Card>
                        </Fragment>
                    )
                })}

            </div>
        </>
    )
}

export default WorkCard;