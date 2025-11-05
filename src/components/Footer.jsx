// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.footerContainer}`}>
        <p>&copy; {new Date().getFullYear()} Cyber-Tech. Todos os direitos reservados.</p>
        <nav className={styles.footerLinks} aria-label="Links do rodapé">
          <Link to="/sobre">Sobre</Link>
          <Link to="/privacidade">Privacidade</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;