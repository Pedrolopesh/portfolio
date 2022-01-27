import { SkillType } from '../../../typings/skillType';
import React, { useEffect, useState } from 'react';
import Style from '../../../styles/mainStyles/SkillBar.module.css'

const SkillBar = ({ image, skillAnimation, skillName, color }: SkillType) => {
    // console.log(skillAnimation, skillName)

    const [responsiveLayout, setResponsiveLayout] = useState(false)

    window.addEventListener('scroll', function(event) {
        // var firstLocator:any = document.querySelector("#locator");
        // const test = firstLocator.offsetTop
                
        // console.log('window.pageYOffset', window.pageYOffset)
        if(window.pageYOffset > 1900 && window.pageYOffset < 2100 && window.screen.width > 700){
            setResponsiveLayout(true)
        }
        
        if(window.pageYOffset > 2700 && window.screen.width <= 700) {
            setResponsiveLayout(true)
        }
    }, true);
    
    useEffect(() => {
        // if(window.screen.width === 700) {
            // }
        // setResponsiveLayout(true)
    }, [])

    return (
        <>
            <span id="locator"></span>
            <div className={Style.SkillBarShape}>
                {/* <BarSkill className={responsiveLayout ? 'animationBar-'+skillAnimation : ''} style={{ background: `${color}` }}> */}
                <div className={`${Style.BarSkill} ${responsiveLayout ? 'animationBar-'+skillAnimation : ''}`} style={{ background: `${color}` }}>
                    <div className={Style.BGSkill}>
                        <img className={Style.ImageSkill} src={image} alt="Image skil" />
                    </div>
                </div>
                    <span className={Style.TextSkill}>{skillName}</span>
            </div>
        </>
    )
}

export default SkillBar;