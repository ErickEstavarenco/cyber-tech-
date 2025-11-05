// src/pages/NotFound/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={`container ${styles.notFoundContainer}`}>
      <div className={styles.notFoundContent}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.errorTitle}>Página não encontrada</h2>
        <p className={styles.errorMessage}>
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/" className={styles.homeButton}>
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

