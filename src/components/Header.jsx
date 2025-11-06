import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { useAuth } from "../context/AuthContext";
import { auth } from "../../FirebaseConfig";
import { signOut } from "firebase/auth";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

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

        {currentUser ? (
          <>
            <Link to="/perfil" className={styles.profileButton}>
              Perfil
            </Link>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Sair
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>

      {/* Botão hamburguer */}
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
