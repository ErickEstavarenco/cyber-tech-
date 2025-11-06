// src/pages/Home/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Importado para animações
import styles from "./Home.module.css";
import challenges from "../../data/challenges.json";

// Importa os ícones
import iconAlgoritmo from "../../assets/icons/icon-algoritmo.png";
import iconPerson from "../../assets/icons/icon-person.png";
import iconFood from "../../assets/icons/icon-food.png";
import iconSunMoon from "../../assets/icons/icon-sun-moon.png";

const AlgorithmIcon = () => (
  <motion.img
    src={iconAlgoritmo}
    alt="Ícone de algoritmo"
    className={styles.infoCardIcon}
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  />
);

const ChallengeCardIcon = ({ iconSrc, altText }) => (
  <motion.img
    src={iconSrc}
    alt={altText}
    className={styles.challengeCardIcon}
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 200 }}
  />
);

function Home() {
  const iconMap = {
    person: iconPerson,
    food: iconFood,
    "sun-moon": iconSunMoon,
    algoritmo: iconAlgoritmo,
  };

  const featuredChallenges = challenges
    .filter((challenge) => challenge.slug !== "o-que-e-algoritmo")
    .slice(0, 3);

  return (
    <motion.div
      className={styles.home}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <motion.h1
          className={styles.mainTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Aprenda programação
        </motion.h1>
        <motion.h2
          className={styles.subtitle}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Conceitos básicos de lógica de programação para iniciantes
        </motion.h2>
      </section>

      <div className="container">
        {/* Seção 1: O que é um algoritmo? */}
        <motion.section
          className={styles.algorithmSection}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className={styles.infoCard}>
            <AlgorithmIcon />
            <div className={styles.infoText}>
              <h3>O que é um algoritmo?</h3>
              <p>
                Um algoritmo é uma maneira de resolver problemas ou realizar
                tarefas de forma sequencial.
              </p>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/blog" className="btn-primary">
                  Ler mais
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Seção 2: Desafios práticos */}
        <motion.section
          className={styles.challengesSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2>Desafios práticos</h2>
          <p>Experimente o funcionamento de if/else por meio de exercícios</p>

          <div className={styles.challengeCardsList}>
            {featuredChallenges.map((challenge) => (
              <motion.div
                key={challenge.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={`/desafios/${challenge.slug}`}
                  className={styles.challengeCard}
                >
                  <ChallengeCardIcon
                    iconSrc={iconMap[challenge.icon]}
                    altText={challenge.title}
                  />
                  <p>{challenge.title}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}

export default Home;
