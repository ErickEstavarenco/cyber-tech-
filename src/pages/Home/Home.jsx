import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Home.module.css";
import challenges from "../../data/challenges.json";

// Ícones
import iconAlgoritmo from "../../assets/icons/icon-algoritmo.png";
import iconPerson from "../../assets/icons/icon-person.png";
import iconFood from "../../assets/icons/icon-food.png";
import iconSunMoon from "../../assets/icons/icon-sun-moon.png";

function Home() {
  const iconMap = {
    person: iconPerson,
    food: iconFood,
    "sun-moon": iconSunMoon,
    algoritmo: iconAlgoritmo,
  };

  const videoMap = {
    "o-que-e-algoritmo": "/videos/algoritmo.mp4",
    "estudar-ou-descansar": "/videos/menino.mp4",
    "fome": "/videos/comida.mp4",
    "dia-ou-noite": "/videos/sollua.mp4",
  };

  const slugToRoute = {
    "o-que-e-algoritmo": "/desafios/desafio1",
    "estudar-ou-descansar": "/desafios/desafio1",
    "fome": "/desafios/desafio2",
    "dia-ou-noite": "/desafios/desafio3",
  };

  const customTitles = {
    "estudar-ou-descansar": "Operações",  
    "fome": "Condicionais",                
    "dia-ou-noite": "Funções"    
  };

  const featuredChallenges = challenges
    .filter((c) => c.slug !== "o-que-e-algoritmo")
    .slice(0, 3);

  const cardVideoStyle = {
    width: "100%",
    height: "140px",
    display: "block",
    objectFit: "fill",
    background: "#f0f6ff",
  };

  const algoVideoStyle = {
    width: "300px",
    height: "170px",
    borderRadius: 10,
    objectFit: "fill",
    border: "2px solid var(--primary-blue)",
    background: "#000",
    flexShrink: 0,
  };

  return (
    <motion.div
      className={styles.home}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* HERO */}
      <section className={styles.heroSection}>
        <motion.h1
          className={styles.mainTitle}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Aprenda programação
        </motion.h1>
        <motion.h2
          className={styles.subtitle}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          Conceitos básicos de lógica de programação para iniciantes
        </motion.h2>
      </section>

      <div className="container">
        {/* DESTAQUE */}
        <motion.section
          className={styles.algorithmSection}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
        >
          <div className={styles.infoCard}>
            <motion.video
              src={videoMap["o-que-e-algoritmo"]}
              className={styles.infoVideo}
              autoPlay
              loop
              muted
              playsInline
              style={algoVideoStyle}
            />

            <div className={styles.infoText}>
              <h3>O que é um algoritmo?</h3>
              <p>
                Um algoritmo é uma sequência lógica e finita de instruções que
                resolve um problema ou realiza uma tarefa. É a base do raciocínio
                computacional.
              </p>
              <motion.div whileHover={{ scale: 1.03 }}>
                <Link to="/algoritmo" className="btn-primary">
                  Ler mais
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* LISTA DE CARDS */}
        <motion.section
          className={styles.challengesSection}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <h2>Desafios práticos</h2>
          <p>Experimente o funcionamento de if/else por meio de exercícios</p>

          <div className={styles.challengeCardsList}>
            {featuredChallenges.map((challenge) => {
              const videoSrc = videoMap[challenge.slug] || null;
              const linkRoute = slugToRoute[challenge.slug] || "/desafios";

              // Busca o título customizado ou usa o original
              const tituloExibido = customTitles[challenge.slug] || challenge.title;

              return (
                <motion.div
                  key={challenge.id}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 260 }}
                >
                  <Link
                    to={linkRoute}
                    className={styles.challengeCard}
                  >
                    {videoSrc ? (
                      <video
                        src={videoSrc}
                        className={styles.challengeCardMedia}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={cardVideoStyle}
                      />
                    ) : (
                      <img
                        src={iconMap[challenge.icon] || iconAlgoritmo}
                        alt={challenge.title}
                        className={styles.challengeCardIcon}
                        style={{ width: "100%", height: 140, objectFit: "cover" }}
                      />
                    )}

                    {/* Exibe o título customizado */}
                    <p>{tituloExibido}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}

export default Home;