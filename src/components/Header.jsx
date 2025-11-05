import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className={styles.header} role="banner">
      <div className={`container ${styles.navContainer}`}>
        <Link 
          to="/" 
          className={styles.logo}
          aria-label="Cyber Tech - Página inicial"
        >
          Cyber Tech
        </Link>
        
        <nav className={styles.nav} role="navigation" aria-label="Navegação principal">
          <Link 
            to="/" 
            className={`${styles.navLink} ${isActive('/') ? styles.activeLink : ''}`}
            aria-current={isActive('/') ? 'page' : undefined}
          >
            Início
          </Link>

          <Link 
            to="/blog" 
            className={`${styles.navLink} ${isActive('/blog') ? styles.activeLink : ''}`}
            aria-current={isActive('/blog') ? 'page' : undefined}
          >
            Blog
          </Link>
          
          <Link 
            to="/desafios" 
            className={`${styles.navLink} ${isActive('/desafios') ? styles.activeLink : ''}`}
            aria-current={isActive('/desafios') ? 'page' : undefined}
          >
            Desafios
          </Link>
          
          <Link 
            to="/login" 
            className={`${styles.navLink} ${isActive('/login') || isActive('/cadastro') ? styles.activeLink : ''}`}
            aria-current={isActive('/login') || isActive('/cadastro') ? 'page' : undefined}
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;