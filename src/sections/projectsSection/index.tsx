import { Project } from '@/components/Project';
import style from './style.module.css';
import data from '@/data/data.json';


export default function ProjectsSection() {
    return (
        <section id='projects' className={style.projectSection}>
                <h2 className={style.projectTitle}>Projetos</h2>

            <div className={style.projectList}>
                    {data.projects_user.map((project, index) => (
                        <Project key={index} name={project.name} description={project.description} techs={project.techs} link={project.link}  />
                    ))}
                </div> 
        </section>
    )
}