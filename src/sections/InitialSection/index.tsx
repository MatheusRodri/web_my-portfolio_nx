import Image from 'next/image';
import style from './style.module.css';
import imageProfile from '../../../public/assets/Perfil.jpg'
import data from '@/data/data.json';

export default function InitialSection() {
    return (
        <section className={`${style.initialSection} reveal-on-scroll`} id='home'>
            <div className={`${style.initialText} scroll-to-text`}>
                <h1 className={style.title}>{data.name_user}</h1>
                <p className={style.subtitle}>{data.tech_user}</p>
                <p className={style.description}>
                    {data.resume_user}
                </p>
            </div>
            <div className={style.initialImage}>
                <Image src={imageProfile} alt='Imagem de perfil'/>
            </div>
        </section>
    )
}