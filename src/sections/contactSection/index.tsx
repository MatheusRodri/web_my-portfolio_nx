import Link from 'next/link';
import style from './style.module.css';
import data from '@/data/data.json';

export function ContactSection() {
    return (
        <section id='contact' className={`${style.contactSection} reveal-on-scroll`}>
            <h2 className={`${style.contactTitle} scroll-to-text`} >Contato</h2>
            <ul className={style.contactList}>
                <li className={style.contactItem}>
                    <Link href={`mailto:${data.contact_user.email}`} className={style.contactLink}>
                        <span className={style.contactIcon}>📧 Email: {data.contact_user.email}</span>
                    </Link>
                </li>
                <li className={style.contactItem}>
                    <Link href={data.contact_user.linkedin} className={style.contactLink}>
                        <span className={style.contactIcon}>🔗 LinkedIn</span>
                    </Link>
                </li>
                <li className={style.contactItem}>
                    <Link href={data.contact_user.github} className={style.contactLink}>
                        <span className={style.contactIcon}>🐱 GitHub</span>
                    </Link>
                </li>
            </ul>
        </section>
    )
}