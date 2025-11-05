import React from 'react';
import styles from './Blog.module.css'; // Reutilizando os estilos

export default function Variavel() {
  return (
    <div className={`container ${styles.postDetailContainer}`}>
      <h1 className={styles.detailTitle}>Variáveis na Programação</h1>
      <div className={styles.postContent}>
        <p>As variáveis são a espinha dorsal de qualquer programa de computador. Pense nelas como caixas rotuladas que você usa para armazenar informações na memória do computador.</p>
        
        <h2 className={styles.contentSubtitle}>O Que Armazenam?</h2>
        <p>Uma variável pode armazenar qualquer tipo de dado, como números inteiros, textos (strings), valores de verdadeiro ou falso (booleanos), e até mesmo estruturas mais complexas como listas ou objetos.</p>
        
        <h2 className={styles.contentSubtitle}>Exemplo Prático</h2>
        <p>Em linguagens como JavaScript, declarar uma variável é simples:</p>
        <pre className={styles.codeBlock}>
          {`let idade = 25; // Armazenando um número\nconst nome = "CyberTech"; // Armazenando um texto\nlet isStudent = true; // Armazenando um booleano`}
        </pre>

        <p>Ao entender as variáveis, você dá o primeiro passo para construir qualquer lógica de programação.</p>
      </div>
    </div>
  );
}