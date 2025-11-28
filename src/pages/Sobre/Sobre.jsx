import React from "react";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <div className={styles.sobreContainer}>
      <h1 className={styles.sobreTitle}>Sobre o CyberTech</h1>

      <div className={styles.sobreCard}>
        <p>
          O <strong>CyberTech</strong> é uma plataforma criada para introduzir
          iniciantes ao universo da programação de forma simples, objetiva e
          totalmente prática.
        </p>

        <p>
          Nosso propósito é oferecer conteúdos acessíveis que ajudem você a
          desenvolver lógica de programação, estruturar raciocínio e evoluir seus
          conhecimentos de maneira clara e didática.
        </p>

        <p>
          Acreditamos que <strong>qualquer pessoa pode aprender programação</strong>.
          Por isso, criamos um ambiente seguro, gratuito e pensado para quem está
          dando os primeiros passos no mundo da tecnologia.
        </p>
      </div>

      <h2 className={styles.sobreSubtitle}>O que você encontra por aqui?</h2>
      <ul className={styles.sobreList}>
        <li>✔ Conteúdos diretos e explicados de forma visual</li>
        <li>✔ Aulas e materiais práticos sobre lógica de programação</li>
        <li>✔ Desafios para aplicar o que você aprendeu</li>
        <li>✔ Área personalizada para acompanhar sua evolução</li>
      </ul>

      <p className={styles.sobreFinal}>
        O CyberTech está em constante evolução, sempre recebendo novos conteúdos.
        <br />
        <strong>Ficamos felizes em ter você aqui com a gente.</strong>
      </p>
    </div>
  );
}
