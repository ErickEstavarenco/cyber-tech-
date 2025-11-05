import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'; 
import challenges from '../../data/challenges.json';

// Importa os ícones
import iconAlgoritmo from '../../assets/icons/icon-algoritmo.png'; 
import iconPerson from '../../assets/icons/icon-person.png';     
import iconFood from '../../assets/icons/icon-food.png';       
import iconSunMoon from '../../assets/icons/icon-sun-moon.png';  

const AlgorithmIcon = React.memo(() => (
  <img 
    src={iconAlgoritmo} 
    alt="Ícone de algoritmo" 
    className={styles.infoCardIcon}
    loading="lazy"
  />
));

AlgorithmIcon.displayName = 'AlgorithmIcon';

const ChallengeCardIcon = React.memo(({ iconSrc, altText }) => (
  <img 
    src={iconSrc} 
    alt={altText} 
    className={styles.challengeCardIcon}
    loading="lazy"
  />
));

ChallengeCardIcon.displayName = 'ChallengeCardIcon';

function Home() {
  const iconMap = useMemo(() => ({
    person: iconPerson,
    food: iconFood,
    'sun-moon': iconSunMoon,
    algoritmo: iconAlgoritmo,
  }), []);

  // Filtramos o desafio "o-que-e-algoritmo" da lista de desafios práticos
  // e pegamos os 3 seguintes (incluindo o "sol e lua").
  const featuredChallenges = useMemo(() => 
    challenges
      .filter(challenge => challenge.slug !== "o-que-e-algoritmo")
      .slice(0, 3),
    []
  ); 

  return (
    <div className={styles.home}>
      
      <section className={styles.heroSection} aria-label="Hero section">
        <div className="container">
          <p className={styles.welcomeText}>BEM VINDO!</p>
          <h1 className={styles.mainTitle}>Aprenda programação</h1>
          <h2 className={styles.subtitle}>Conceitos básicos de lógica de programação para iniciantes</h2>
        </div>
      </section>

      <div className="container">
        {/* Seção 1: O que é um algoritmo? (Card de Informação) */}
        <section className={styles.algorithmSection}>
          <div className={styles.infoCard}>
            <AlgorithmIcon />
            <div className={styles.infoText}>
              <h3>O que é um algoritmo?</h3>
              <p>Um algoritmo é uma maneira de resolver problemas ou realizar tarefas de forma sequencial.</p>
              <Link to="/blog" className="btn-primary">Ler mais</Link>
            </div>
          </div>
        </section>

        {/* Seção 2: Desafios práticos (agora filtrados) */}
        <section className={styles.challengesSection} aria-label="Desafios práticos">
          <h2>Desafios práticos</h2>
          <p>Experimente o funcionamento de if/else por meio de exercícios</p>
          
          <div className={styles.challengeCardsList}>
            {featuredChallenges.map(challenge => (
              <Link key={challenge.id} to={`/desafios/${challenge.slug}`} className={styles.challengeCard}>
                <ChallengeCardIcon 
                  iconSrc={iconMap[challenge.icon]} 
                  altText={challenge.title} 
                />
                <p>{challenge.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;