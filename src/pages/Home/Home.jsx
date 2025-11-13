// src/pages/Home/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Home.module.css";
import challenges from "../../data/challenges.json";

// Ícones (mantém o padrão dos desafios)
import iconAlgoritmo from "../../assets/icons/icon-algoritmo.png";
import iconPerson from "../../assets/icons/icon-person.png";
import iconFood from "../../assets/icons/icon-food.png";
import iconSunMoon from "../../assets/icons/icon-sun-moon.png";

/**
 * Observações:
 * - Os vídeos devem estar em public/videos/
 *   /videos/algoritmo.mp4
 *   /videos/menino.mp4
 *   /videos/comida.mp4
 *   /videos/sollua.mp4
 *
 * - Este componente usa classes existentes no seu Home.module.css,
 *   mas aplica dimensões mínimas inline nos <video> para evitar "quebra".
 */

const AlgorithmIcon = () => (
  <motion.img
    src={iconAlgoritmo}
    alt="Ícone de algoritmo"
    className={styles.infoCardIcon}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  />
);

function Home() {
  // mapping simples de ícones (mantido por compatibilidade)
  const iconMap = {
    person: iconPerson,
    food: iconFood,
    "sun-moon": iconSunMoon,
    algoritmo: iconAlgoritmo,
  };

  // mapeamento de vídeos para cada slug (ajuste se quiser outros nomes)
  const videoMap = {
    "o-que-e-algoritmo": "/videos/algoritmo.mp4",
    "estudar-ou-descansar": "/videos/menino.mp4",
    "fome": "/videos/comida.mp4",
    "dia-ou-noite": "/videos/sollua.mp4",
  };

  // Pegar os 3 desafios (exceto algoritmo) mantendo a ordem do arquivo JSON
  const featuredChallenges = challenges
    .filter((c) => c.slug !== "o-que-e-algoritmo")
    .slice(0, 3);

  // estilo inline mínimo para os vídeos dos cards (evita que quebrem layout)
  const cardVideoStyle = {
    width: "100%",
    height: "140px",
    display: "block",
    objectFit: "fill", // você preferiu 'fill' antes; ajuste para 'contain' se quiser
    background: "#f0f6ff",
  };

  // estilo inline para o vídeo do algoritmo (info card)
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
        {/* O QUE É UM ALGORITMO? */}
        <motion.section
          className={styles.algorithmSection}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
        >
          <div className={styles.infoCard}>
            {/* Vídeo do algoritmo (tamanho controlado inline para estabilidade) */}
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
                <Link to="/blog" className="btn-primary">
                  Ler mais
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* DESAFIOS PRÁTICOS */}
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
              return (
                <motion.div
                  key={challenge.id}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 260 }}
                >
                  <Link
                    to={`/desafios/${challenge.slug}`}
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
                      // fallback para ícone quando não há vídeo
                      <img
                        src={iconMap[challenge.icon] || iconAlgoritmo}
                        alt={challenge.title}
                        className={styles.challengeCardIcon}
                        style={{ width: "100%", height: 140, objectFit: "cover" }}
                      />
                    )}

                    <p>{challenge.title}</p>
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