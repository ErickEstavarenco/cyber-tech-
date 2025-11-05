// src/pages/ChallengeList/ChallengeList.jsx

import React from "react";
import { Link } from "react-router-dom";
import challenges from "../../data/challenges.json";
import styles from "../Home/Home.module.css";

// Importação única dos ícones
import iconAlgoritmo from "../../assets/icons/icon-algoritmo.png";
import iconPerson from "../../assets/icons/icon-person.png";
import iconFood from "../../assets/icons/icon-food.png";
import iconSunMoon from "../../assets/icons/icon-sun-moon.png";

// Componente para exibir o ícone do desafio
const ChallengeCardIcon = ({ iconSrc, altText }) => (
  <img src={iconSrc} alt={altText} className={styles.challengeCardIcon} />
);

function ChallengeList() {
  // Mapeamento dos ícones usados nos desafios
  const iconMap = {
    person: iconPerson,
    food: iconFood,
    "sun-moon": iconSunMoon,
    algoritmo: iconAlgoritmo,
  };

  return (
    <div className={styles.challengeListContainer}>
      <h1 className={styles.pageTitle}>Nossos Desafios</h1>
      <p className={styles.pageSubtitle}>
        Teste sua lógica com desafios práticos e divertidos!
      </p>

      <div className={styles.challengeCardsList}>
        {challenges.map((challenge) => (
          <Link
            key={challenge.id}
            to={`/desafios/${challenge.slug}`}
            className={styles.challengeCard}
          >
            <ChallengeCardIcon
              iconSrc={iconMap[challenge.icon] || iconAlgoritmo}
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
