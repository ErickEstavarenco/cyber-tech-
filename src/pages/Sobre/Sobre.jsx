import React from "react";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <div className={styles.sobreContainer}>
      <h1 className={styles.sobreTitle}>Sobre o CyberTech</h1>

      <div className={styles.sobreCard}>
        <p>
          O <strong>CyberTech</strong> é uma plataforma criada para introduzir pessoas
          ao mundo da programação de forma simples, direta e prática.
        </p>

        <p>
          Nosso objetivo é ajudar iniciantes a aprender lógica de programação,
          desenvolver habilidades essenciais e se preparar para desafios e
          oportunidades no universo da tecnologia.
        </p>

        <p>
          Acreditamos que <strong>qualquer pessoa pode aprender programação</strong> — basta
          ter acesso ao conteúdo certo, orientação e motivação. Por isso, criamos
          um ambiente seguro, didático e totalmente gratuito para quem deseja
          começar.
        </p>
      </div>

      <h2 className={styles.sobreSubtitle}>O que você encontra aqui?</h2>
      <ul className={styles.sobreList}>
        <li>✔ Aulas práticas de lógica e pensamento computacional</li>
        <li>✔ Conteúdos explicados de forma simples e visual</li>
        <li>✔ Desafios para treinar o aprendizado</li>
        <li>✔ Um espaço para acompanhar seu progresso</li>
      </ul>

      <p className={styles.sobreFinal}>
        Estamos em constante evolução, sempre adicionando novos conteúdos.
        <br />
        <strong>Seja bem-vindo(a) ao CyberTech!</strong>
      </p>
    </div>
  );
}
