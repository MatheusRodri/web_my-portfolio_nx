import Image from 'next/image';
import style from './style.module.css';
import imageProfile from '../../../../public/assets/Perfil.jpg'

export default function InitialSection() {
    return (
        <section className={style.initialSection}>
            <div className={style.initialText}>
                <h1 className={style.title}>Matheus Rodrigues</h1>
                <p className={style.subtitle}>Desenvolvedor Front-End</p>
                <p className={style.description}>
                    Olá, sou o Matheus, uma pessoa apaixonada por tecnologia e desenvolvimento no geral.
                </p>
            </div>
            <div className={style.initialImage}>
                <Image src={imageProfile} alt='Imagem de perfil'/>
            </div>
        </section>
    )
}