import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Usando CSS Modules

function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        
        {/* O Logo continua linkando para a Home */}
        <Link to="/" className={styles.logo}>
          Cyber Tech
        </Link>
        
        {/* NAVEGAÇÃO (DIREITA) */}
        <nav className={styles.nav}>
          
          {/* MUDANÇA: Botão "Início" adicionado aqui */}
          <Link to="/" className={styles.navLink}>
            Início
          </Link>

          <Link to="/blog" className={styles.navLink}>
            Blog
          </Link>
          <Link to="/desafios" className={styles.navLink}>
            Desafios
          </Link>
          <Link to="/login" className={styles.navLink}>
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;