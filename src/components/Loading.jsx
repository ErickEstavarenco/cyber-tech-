// src/components/Loading.jsx
import React from 'react';
import styles from './Loading.module.css';

function Loading() {
  return (
    <div className={styles.loadingContainer} aria-label="Carregando conteúdo">
      <div className={styles.spinner}></div>
      <p className={styles.loadingText}>Carregando...</p>
    </div>
  );
}

export default Loading;

