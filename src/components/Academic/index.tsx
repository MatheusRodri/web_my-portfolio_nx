import style from './style.module.css';

interface AcademicProps {
    institution: string;
    course: string;
    dt_start: string;
    dt_end: string;
}

export function Academic({institution,course,dt_start,dt_end}:AcademicProps) {
    return (
        <div className={style.academic}>
            <div className={style.academicHeader}>
                <h3 className={style.academicInstitution}>{institution}</h3> 
                <p className={style.academicCourse}>{course} </p>
                <p className={style.academicDate}> {dt_start} - {dt_end}</p>
            </div>
        </div>
    )
}