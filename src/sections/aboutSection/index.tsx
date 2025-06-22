import style from './style.module.css';

export function AboutSection() {
    return (
        <section id="about" className={style.aboutSection}>
            <div className={style.aboutContent}>
                <h2 className={style.aboutTitle}>About Me</h2>
                <p className={style.aboutText}>
                    Hello! I'm Matheus, a passionate software developer with a focus on creating innovative solutions.
                    I have experience in various programming languages and frameworks, and I love tackling complex challenges.
                    My goal is to build applications that not only meet user needs but also provide an exceptional user experience.
                </p>
            </div>
        </section>
    )
}