import Link from 'next/link';
import style from './style.module.css';

interface  ProjectProps {
    name: string;
    techs: string;
    description: string;
    link: string;
}

export function Project({ name, description, techs,link }: ProjectProps) {
    return (
        <div className={style.project}>
            <div className={style.projectHeader}>
                <h3 className={style.projectName}>{name}</h3> 
                <div className={style.spaceline}></div>
                <Link href={link} className={style.experienceRole}>Repositório</Link>
            </div>
            <div className={style.spaceline}></div>
            <p className={style.techs}><span>Techs:</span> {techs}</p>
            <div className={style.spaceline}></div>
            <p className={style.experienceDescription}> <span>Descrição:</span> {description}</p>

        </div>
    )
}