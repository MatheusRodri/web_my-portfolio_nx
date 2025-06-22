import style from './style.module.css';
import data from '@/data/data.json';
import { Academic } from '@/components/Academic';

export default function AcademicSection() {
    return (
        <section id='education' className={style.academySection}>
                <h2 className={style.academyTitle}>Formação Acadêmica</h2>

            <div className={style.academyList}>
                    {data.academic_user.map((academic, index) => (
                        <Academic key={index} institution={academic.institution} course={academic.course} dt_start={academic.dt_inicio} dt_end={academic.dt_fim}/>
                    ))}
                </div> 
        </section>
    )
}