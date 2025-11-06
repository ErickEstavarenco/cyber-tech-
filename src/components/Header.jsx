// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">CyberTech</Link>
      </div>

      {/* Navegação */}
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <Link to="/">Início</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/desafios">Desafios</Link>
        <Link to="/login">Login</Link>
      </nav>

      {/* Botão hamburguer (agora à direita) */}
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
