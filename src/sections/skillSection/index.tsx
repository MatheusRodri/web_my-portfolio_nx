import { Skill } from '@/components/skill';
import style from './style.module.css';
import data from '@/data/data.json';

export default function SkillSection() {
    return (
        <section id='skills' className={`${style.skillSection} reveal-on-scroll` }>
            <h2 className={`${style.skillTitle} scroll-to-text` }>Skills</h2>

                <div className={style.skillList}>
                    {data.Skills_user.map((skill, index) => (
                        <Skill key={index} name={skill.name} img={skill.img} />
                    ))}
                </div> 
        </section>
    )
}