import Link from "next/link";
import style from './style.module.css';
import data from '@/data/data.json';

export function Footer(){
    return(
        <footer id='contact' className={`${style.footerContainer} reveal-on-scroll`}>
            <ul className={style.footerList}>
                <li className={style.footerItem}>
                    <Link href={data.contact_user.linkedin} className={style.footerLink}>
                        <span className={style.footerIcon}>🔗 LinkedIn</span>
                    </Link>
                </li>
                <li className={style.footerItem}>
                    <Link href={data.contact_user.github} className={style.footerLink}>
                        <span className={style.footerIcon}>🐱 GitHub</span>
                    </Link>
                </li>
                <li className={style.footerItem}>
                    <Link href={data.contact_user.medium} className={style.footerLink}>
                        <span className={style.footerIcon}>✍️ Medium</span>
                    </Link>
                </li>
                <li className={style.footerItem}>
                    <Link href={data.contact_user.reddit} className={style.footerLink}>
                        <span className={style.footerIcon}>👾 Reddit</span>
                    </Link>
                </li>
                <li className={style.footerItem}>
                    <Link href={data.contact_user.instagram} className={style.footerLink}>
                        <span className={style.footerIcon}>📸 Instagram</span>
                    </Link>
                </li>
                <li className={style.footerItem}>
                    <Link href={data.contact_user.x} className={style.footerLink}>
                        <span className={style.footerIcon}>🐦 X</span>
                    </Link>
                </li>
            </ul>
        </footer>
    )
} 