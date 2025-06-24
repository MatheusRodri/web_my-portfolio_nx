import style from './style.module.css';
import data from '@/data/data.json';

export function AboutSection() {
    return (
        <section id="about" className={`${style.aboutSection} reveal-on-scroll`}>
            <div className={`${style.aboutContent}`} >
                <h2 className={`${style.aboutTitle} scroll-to-text`} >About Me</h2>
                <p className={style.aboutText}>
                    {data.about_user}
                </p>
            </div>
        </section>
    )
}