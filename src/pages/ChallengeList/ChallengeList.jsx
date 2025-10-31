// src/pages/ChallengeList/ChallengeList.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import challenges from '../../data/challenges.json';

// Reutilizando os estilos
import styles from '../Home/Home.module.css'; 
import pageStyles from '../Blog/Blog.module.css'; 

// MUDANÇA 1: Importar os ícones (igual à Home.jsx)
import iconAlgoritmo from '../../assets/icons/icon-algoritmo.png'; 
import iconPerson from '../../assets/icons/icon-person.png';     
import iconFood from '../../assets/icons/icon-food.png';       
import iconSunMoon from '../../assets/icons/icon-sun-moon.png';  

const ChallengeCardIcon = ({ iconSrc, altText }) => (
  <img src={iconSrc} alt={altText} className={styles.challengeCardIcon} />
);

function ChallengeList() {
  // MUDANÇA 2: O map agora usa as variáveis importadas
  const iconMap = {
    person: iconPerson,
    food: iconFood,
    'sun-moon': iconSunMoon,
    algoritmo: iconAlgoritmo,
  };

  return (
    <div className={`container ${pageStyles.blogPage}`}>
      <h1 className={pageStyles.pageTitle}>Nossos Desafios</h1>
      <p className={pageStyles.pageSubtitle}>Teste sua lógica com nossos desafios práticos.</p>
      
      <div className={styles.challengeCardsList}>
        {/* Mapeia TODOS os desafios */}
        {challenges.map(challenge => (
          <Link key={challenge.id} to={`/desafios/${challenge.slug}`} className={styles.challengeCard}>
            <ChallengeCardIcon 
              iconSrc={iconMap[challenge.icon]} 
              altText={challenge.title} 
            />
            <p>{challenge.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ChallengeList;