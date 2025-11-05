// src/pages/ChallengeDetail/ChallengeDetail.jsx
import React from "react";
import { useParams } from 'react-router-dom';
import challenges from '../../data/challenges.json';
// MUDANÇA: Importando o CSS Module

export default function ChallengeDetail() {
  const { slug } = useParams();
  const challenge = challenges.find(c => c.slug === slug);

  if (!challenge) {
    return (
      <div className={`container ${pageStyles.blogPage}`}>
        <h1 className={pageStyles.pageTitle}>Desafio não encontrado</h1>
      </div>
    );
  }

  return (
    <div className={`container ${pageStyles.blogPage}`}>
      {/* Título reutilizado da página de Blog */}
      <h1 className={pageStyles.pageTitle}>{challenge.title}</h1>
      <p className={pageStyles.pageSubtitle}>{challenge.concept}</p>

      {/* Card de conteúdo (branco) */}
      <div className={pageStyles.postCard}>
        <h2 className={styles.detailSubtitle}>Detalhes do Desafio</h2>
        <p className={styles.detailText}>
          Esta página está em construção. Em breve, o desafio interativo
          para "{challenge.title}" estará aqui!
        </p>
      </div>
    </div>
  );
}