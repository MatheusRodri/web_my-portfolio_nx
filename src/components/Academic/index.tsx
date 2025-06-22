import style from './style.module.css';

interface AcademicProps {
    institution: string;
    course: string;
    dt_start: string;
    dt_end: string;
}

export function Academic({institution,course,dt_start,dt_end}:AcademicProps) {
    return (
        <div className={style.experience}>
            <div className={style.experienceHeader}>
                <h3 className={style.experienceCompany}>{institution}</h3> 
                <p className={style.experienceRole}>{course} </p>
                <p className={style.experienceDate}> {dt_start} - {dt_end}</p>
            </div>
        </div>
    )
}