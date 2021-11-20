import { SkillBarShape, BarSkill, BGSkill, ImageSkill, TextSkill} from './style'
import { SkillType } from '../../../typings/skillType';
import React, { useEffect, useState } from 'react';

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
            <SkillBarShape>
                <BarSkill className={responsiveLayout ? 'animationBar-'+skillAnimation : ''} style={{ background: `${color}` }}>
                    <BGSkill>
                        <ImageSkill src={image} alt="" />
                    </BGSkill>
                </BarSkill>
                    <TextSkill>{skillName}</TextSkill>
            </SkillBarShape>
        </>
    )
}

export default SkillBar;