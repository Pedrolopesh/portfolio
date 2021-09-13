import { FlexContainer, LeftContainer, RigthContainer } from './style'
import { useEffect, useState } from "react";
import SkillBar from '../SkillBar';
import { SkillType } from '../../typings/skillType';

const SkillsAnimation = () => {

    const [skillData, setSkillData] = useState<SkillType[]>([])

    const data = [
        {
            image: "https://res.cloudinary.com/publi-node-uploads/image/upload/v1631499251/portfolio/skill/react_owpad5.png",
            skillAnimation: 'react',
            skillName: "react js",
            color: "linear-gradient(90deg, rgba(0,139,164,1) 0%, rgba(0,216,255,1) 100%)",
        },
        {
            image: "https://res.cloudinary.com/publi-node-uploads/image/upload/v1631498931/portfolio/skill/vue_uggh6r.png",
            skillAnimation: 'vue',
            skillName: "Vue js",
            color: "linear-gradient(90deg, rgba(6,97,57,1) 0%, rgba(65,184,131,1) 100%)",
        },
        {
            image: "https://res.cloudinary.com/publi-node-uploads/image/upload/v1631498931/portfolio/skill/angular_fgmvpt.png",
            skillAnimation: 'angular',
            skillName: "Angular",
            color: "linear-gradient(90deg, rgba(126,17,20,1) 0%, rgba(226,50,55,1) 100%)",
        },
        {
            image: "https://res.cloudinary.com/publi-node-uploads/image/upload/v1631498931/portfolio/skill/node_qw5ymc.png",
            skillAnimation: 'node',
            skillName: "Node Js",
            color: "linear-gradient(90deg, rgba(21,62,17,1) 0%, rgba(104,159,99,1) 100%)",
        },
        {
            image: "https://res.cloudinary.com/publi-node-uploads/image/upload/v1631498931/portfolio/skill/mongo_ckkbtc.png",
            skillAnimation: 'mongo',
            skillName: "Mongo DB",
            color: "linear-gradient(90deg, rgba(4,74,5,1) 0%, rgba(88,170,80,1) 100%)",
        },
        {
            image: "https://res.cloudinary.com/publi-node-uploads/image/upload/v1631498931/portfolio/skill/mongodb_jlr1tj.png",
            skillAnimation: 'graphql',
            skillName: "graphql",
            color: "linear-gradient(90deg, rgba(126,3,85,1) 0%, rgba(229,53,171,1) 100%)",
        },
        {
            image: "https://res.cloudinary.com/publi-node-uploads/image/upload/v1631498931/portfolio/skill/mysql_dxl3kb.png",
            skillAnimation: 'mysql',
            skillName: "MYSQL",
            color: "linear-gradient(90deg, rgba(2,57,73,1) 0%, rgba(0,112,142,1) 100%)",
        },
        {
            image: "https://res.cloudinary.com/publi-node-uploads/image/upload/v1631498931/portfolio/skill/docker_na8bl4.png",
            skillAnimation: 'docker',
            skillName: "Docker",
            color: "linear-gradient(90deg, rgba(3,54,92,1) 0%, rgba(36,150,237,1) 100%)",
        },
    ]

    useEffect(() => {
        setSkillData(data)
        console.log(skillData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <FlexContainer>
                <LeftContainer>
                    {skillData.map((item: SkillType, index:number) => {
                        return(
                            <>
                                { index < 4 && <SkillBar image={item.image} skillAnimation={item.skillAnimation} skillName={item.skillName} color={item.color} /> }
                            </>
                        )
                    })}
                </LeftContainer>

                <RigthContainer>
                    {skillData.map((item: SkillType, index:number) => {
                        return(
                            <>
                                { index > 3 && <SkillBar image={item.image} skillAnimation={item.skillAnimation} skillName={item.skillName} color={item.color} /> }
                            </>
                        )
                    })}
                </RigthContainer>
            </FlexContainer>
        </>
    )
}

export default SkillsAnimation