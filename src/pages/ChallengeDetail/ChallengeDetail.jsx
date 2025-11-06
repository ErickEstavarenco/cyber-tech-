// src/pages/ChallengeDetail/ChallengeDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import challenges from "../../data/challenges.json";
import styles from "./ChallengeDetail.module.css";

export default function ChallengeDetail() {
  const { slug } = useParams();
  const challenge = challenges.find((c) => c.slug === slug);

  if (!challenge) {
    return (
      <div className={`container ${styles.detailPage}`}>
        <h1 className={styles.pageTitle}>Desafio não encontrado</h1>
      </div>
    );
  }

  return (
    <div className={`container ${styles.detailPage}`}>
      <h1 className={styles.pageTitle}>{challenge.title}</h1>
      <p className={styles.pageSubtitle}>{challenge.concept}</p>

      <div className={styles.detailCard}>
        <h2 className={styles.detailSubtitle}>Detalhes do Desafio</h2>
        <p className={styles.detailText}>
          Esta página está em construção. Em breve, o desafio interativo para{" "}
          <strong>{challenge.title}</strong> estará disponível!
        </p>
      </div>
    </div>
  );
}
