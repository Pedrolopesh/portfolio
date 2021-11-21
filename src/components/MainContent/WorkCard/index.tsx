import React, { useState, useEffect, Fragment, useRef } from 'react'
import { useTranslation } from "react-i18next";

import Styles from '../../../styles/WorkCard.module.css'
import { HiOutlineTerminal } from 'react-icons/hi';
import { FaDoorOpen } from 'react-icons/fa';


const WorkCard = ({ paramEvent, modalState, items, workOption }: any) => {
    const { t } = useTranslation();

    const [workItens, setWorkItens]: any[] = useState([])
    const itemsDiv = useRef(null)

    // const slider:any = document.querySelector('.items');
    const slider:any = itemsDiv.current
    let isDown = false;
    let startX:any;
    let scrollLeft:any;


    const itemsMousedown = (e) =>{
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    }

    const itemsMouseleave = () =>{
        isDown = false;
        slider.classList.remove('active');
    }

    const itemsMouseup = () =>{
        isDown = false;
        slider.classList.remove('active');
    }

    const itemsMousemove = (e) =>{
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    }

    // if(slider !== null) {

    //     slider.addEventListener('mousedown', (e:any) => {
    //         isDown = true;
    //         slider.classList.add('active');
    //         startX = e.pageX - slider.offsetLeft;
    //         scrollLeft = slider.scrollLeft;
    //     });
    
    //     slider.addEventListener('mouseleave', () => {
    //         isDown = false;
    //         slider.classList.remove('active');
    //     });
    
    //     slider.addEventListener('mouseup', () => {
    //         isDown = false;
    //         slider.classList.remove('active');
    //     });
    
    //     slider.addEventListener('mousemove', (e:any) => {
    //         if(!isDown) return;
    //         e.preventDefault();
    //         const x = e.pageX - slider.offsetLeft;
    //         const walk = (x - startX) * 3; //scroll-fast
    //         slider.scrollLeft = scrollLeft - walk;
    //     });

    // }

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
            <div ref={itemsDiv} 
                onMouseDown={(e) => {itemsMousedown(e)}}
                onMouseLeave={() => { itemsMouseleave() }}
                onMouseUp={() => { itemsMouseup() }}
                onMouseMove={ (e) => { itemsMousemove(e) }}
                className={Styles.items}
            >
                {workItens.map((item:any, index:number) => {
                    return (
                        <Fragment key={index}>
                            <div className={`${Styles.item2} ${Styles.item} ${Styles.Card}`}>
                                <div className={Styles.CardHeader}>
                                    <HiOutlineTerminal />
                                    <h1 className={Styles.TitleCard}>{item.title}</h1>
                                </div>
                                <div className={Styles.ContainerBody}>
                                    <img className={Styles.WorkImage} src={item.image} />
                                    <div className={Styles.CardDescription}>
                                        <span className={Styles.ComandText}> pedro@linux-desktop</span>:<span className={Styles.ComandText} style={{ color: '#3478FF' }}> ~/works</span> $ {''}
                                        {/* <TextCard>{item.description}</TextCard> */}
                                        <span className={Styles.TextCard}>{t(`${workOption}_project_description_${index}`)}</span>
                                    </div>
                                    
                                    <a onClick={() => {redirect(items.data[index])}} className={`${Styles.linkButton} ${Styles.ButtonWork}`} target="_blank" href={items.link}>
                                        <FaDoorOpen style={{ color: 'white', fontSize: 20, marginLeft: 'auto' }} /> 
                                        <span className={Styles.ButtonText}>{t('button_work_show_more')}</span>
                                    </a>
                                </div>
                            </div>
                        </Fragment>
                    )
                })}

            </div>
        </>
    )
}

export default WorkCard;