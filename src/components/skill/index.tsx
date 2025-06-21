import style from './style.module.css';

interface SkillProps {
    name: string;
    img: string;
}

export function Skill({name,img}: SkillProps) {
    return (
        <div className={style.skill}>
            <img src={img} alt={name} className={style.skillImage} />
            <span className={style.skillName}>{name}</span>
        </div>
    )
}