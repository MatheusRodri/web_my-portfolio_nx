import style from './style.module.css';
import data from '@/data/data.json';
import { Experience } from '@/components/Experience';

export default function ExperienceSection() {
    return (
        <section id='experience' className={style.experienceSection}>
            <h2 className={style.experienceTitle}>Experiência</h2>

            <div className={style.experienceList}>
                    {data.experience_user.map((experience, index) => (
                        <Experience key={index} company={experience.company} role={experience.role} dt_start={experience.dt_inicio} dt_end={experience.dt_fim} description={experience.description} techs={experience.techs}/>
                    ))}
                </div> 
        </section>
    )
}