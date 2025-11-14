import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

import { useAuth } from "@/context/AuthContext";

// FirebaseConfig está FORA do src → usar caminho relativo
import { auth } from "../../FirebaseConfig";

import { signOut } from "firebase/auth";

const getFirstName = (fullName) => {
  if (!fullName) return "";
  const n = fullName.split(" ")[0];
  return n.charAt(0).toUpperCase() + n.slice(1);
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = async () => {
    navigate("/login");

    try {
      await signOut(auth);
    } catch (err) {
      console.error("Erro ao sair:", err);
    }
  };

  useEffect(() => {
    if (currentUser?.name) {
      document.title = `CyberTech | ${getFirstName(currentUser.name)}`;
    } else {
      document.title = "CyberTech";
    }
  }, [currentUser]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          {currentUser ? `Olá, ${getFirstName(currentUser.name)}!` : "CyberTech"}
        </Link>
      </div>

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

      <button
        className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
