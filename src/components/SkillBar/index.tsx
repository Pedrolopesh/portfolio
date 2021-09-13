import { SkillBarShape, BarSkill, BGSkill, ImageSkill, TextSkill} from './style'
import { SkillType } from '../../typings/skillType';

const SkillBar = ({ image, percent, skillName, color }: SkillType) => {
    console.log(percent, skillName)

    return (
        <>
            <SkillBarShape>
                <BarSkill style={{ background: `${color}`, width: `${percent}vw` }}>
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