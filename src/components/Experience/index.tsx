import style from './style.module.css';

interface ExperienceProps {
    company: string;
    role: string;
    dt_start: string;
    dt_end: string;
    description: string;
    techs: string;
}

export function Experience({company,role,dt_start,dt_end,description,techs}:ExperienceProps) {
    return (
        <div className={style.experience}>
            <div className={style.experienceHeader}>
                <h3 className={style.experienceCompany}>{company}</h3> 
                <span className={style.experienceRole}>{role} </span>
                |
                <span className={style.experienceDate}> {dt_start} - {dt_end}</span>
            </div>

            <p className={style.techs}><span>Techs:</span> {techs}</p>
            <p className={style.experienceDescription}> <span>Descrição:</span> {description}</p>

        </div>
    )
}