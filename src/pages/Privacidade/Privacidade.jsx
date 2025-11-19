import React from "react";
import styles from "./Privacidade.module.css";

export default function Privacidade() {
  return (
    <div className={styles.privContainer}>
      <h1 className={styles.privTitle}>Política de Privacidade</h1>

      <div className={styles.privCard}>
        <p>
          No <strong>CyberTech</strong>, levamos sua privacidade muito a sério.
          Todas as informações coletadas têm como objetivo proporcionar uma
          experiência mais personalizada e segura.
        </p>

        <p>
          Usamos Firebase para autenticação e armazenamento seguro dos dados.
          Nenhuma informação é compartilhada com terceiros sem sua permissão.
        </p>
      </div>

      <h2 className={styles.privSubtitle}>Quais dados coletamos?</h2>
      <ul className={styles.privList}>
        <li>✔ Nome e e-mail informados no cadastro</li>
        <li>✔ Informações de login (gerenciadas pelo Firebase Auth)</li>
        <li>✔ Progresso e atividades dentro da plataforma</li>
      </ul>

      <h2 className={styles.privSubtitle}>Como utilizamos seus dados?</h2>
      <ul className={styles.privList}>
        <li>✔ Para melhorar sua experiência no site</li>
        <li>✔ Para salvar seu progresso nos desafios</li>
        <li>✔ Para garantir autenticação e segurança</li>
      </ul>

      <p className={styles.privFinal}>
        Você pode solicitar a exclusão dos seus dados a qualquer momento.
        <br /><br />
        <strong>CyberTech — Sua confiança é prioridade.</strong>
      </p>
    </div>
  );
}
