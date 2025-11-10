// src/pages/ChallengeList/ChallengeList.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// CORREÇÃO: Removemos a importação do 'Blog.module.css' que estava a causar o erro.
// Usamos APENAS o 'Home.module.css', que já tem todas as classes de que precisamos.
import styles from '../Home/Home.module.css';

// Importar os ícones (igual à Home.jsx)
import iconAlgoritmo from '../../assets/icons/icon-algoritmo.png';
import iconPerson from '../../assets/icons/icon-person.png';
import iconFood from '../../assets/icons/icon-food.png';
import iconSunMoon from '../../assets/icons/icon-sun-moon.png';

const ChallengeCardIcon = ({ iconSrc, altText }) => (
  <img src={iconSrc} alt={altText} className={styles.challengeCardIcon} />
);

function ChallengeList() {
  // O map agora usa as variáveis importadas
  const iconMap = {
    person: iconPerson,
    food: iconFood,
    'sun-moon': iconSunMoon,
    algoritmo: iconAlgoritmo,
  };

  return (
    // CORREÇÃO: Usando classes do 'styles' (Home.module.css) para o layout
    <div className={`container ${styles.challengeListContainer}`}>
      <h1 className={styles.pageTitle}>Nossos Desafios</h1>
      <p className={styles.pageSubtitle}>Teste sua lógica com nossos desafios práticos.</p>

      {/* Lógica do seu colega (correta) com os links fixos */}
      <div className={styles.challengeCardsList}>

        {/* Desafio 1 */}
        <Link to="/desafios/desafio1" className={styles.challengeCard}>
          <ChallengeCardIcon iconSrc={iconMap.algoritmo} altText="O que é um algoritmo?" />
          <p>O que é um algoritmo?</p>
        </Link>

        {/* Desafio 2 */}
        <Link to="/desafios/desafio2" className={styles.challengeCard}>
          <ChallengeCardIcon iconSrc={iconMap.person} altText="Operações" />
          <p>Operações</p>
        </Link>

        {/* Desafio 3 */}
        <Link to="/desafios/desafio3" className={styles.challengeCard}>
          <ChallengeCardIcon iconSrc={iconMap.food} altText="Condicionais" />
          <p>Condicionais</p>
        </Link>

        {/* Desafio 4 */}
        <Link to="/desafios/desafio4" className={styles.challengeCard}>
          <ChallengeCardIcon iconSrc={iconMap['sun-moon']} altText="Funções" />
          <p>Funções</p>
        </Link>

      </div>
    </div>
  );
}

export default ChallengeList;