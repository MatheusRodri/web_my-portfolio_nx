import { useState } from 'react';
import styles from '@/components/Header/styles.module.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                {/* <img src="/logo.png" alt="Logo" className={styles.logoImage} /> */}
                <h1 className={styles.logoText}>Matheus</h1>
            </div>
            <nav className={`${styles.nav} ${menuOpen ? styles.navActive : ''}`}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <a href="/" onClick={() => setMenuOpen(false)}>Inicio</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#about" onClick={() => setMenuOpen(false)}>Sobre mim</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#skills" onClick={() => setMenuOpen(false)}>Habilidades</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#experience" onClick={() => setMenuOpen(false)}>Experiência</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#education" onClick={() => setMenuOpen(false)}>Formação</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#projects" onClick={() => setMenuOpen(false)}>Projetos</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a>
                    </li>
                </ul>
            </nav>

            <button
                className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ''}`}
                aria-label="Abrir Menu"
                onClick={toggleMenu}
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>
        </header>
    );
}