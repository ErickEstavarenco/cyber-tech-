import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // ⬅ add useLocation
import styles from "./Header.module.css";
import { useAuth } from "../context/AuthContext";
import { auth, db } from "../../FirebaseConfig"; 
import { signOut } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore"; 

const getFirstName = (fullName) => {
  if (!fullName) return '';
  const firstName = fullName.split(' ')[0];
  return firstName.charAt(0).toUpperCase() + firstName.slice(1);
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userName, setUserName] = useState(""); 
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); // ⬅ add

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = async () => {
    navigate("/login");
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  // ⬅ Função que faz o scroll quando clica no mesmo link
  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    let unsubscribe = () => {};

    if (currentUser && currentUser.uid) {
      const docRef = doc(db, "users", currentUser.uid);
      unsubscribe = onSnapshot(
        docRef,
        (docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            setUserName(data.name || ""); 
          }
        },
        (error) => {
          console.error("Erro ao buscar nome em tempo real:", error);
        }
      );
    } else {
      setUserName("");
    }

    return () => unsubscribe();
  }, [currentUser]);

  useEffect(() => {
    if (userName) {
      document.title = `CyberTech | ${getFirstName(userName)}`;
    } else {
      document.title = "CyberTech";
    }
  }, [userName]);

  return (
    <header id="site-header" className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" onClick={() => handleNavClick("/")}>
          {currentUser && userName ? `Olá, ${getFirstName(userName)}!` : "CyberTech"}
        </Link>
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <Link to="/" onClick={() => handleNavClick("/")}>Início</Link>

        <Link to="/blog" onClick={() => handleNavClick("/blog")}>Blog</Link>

        <Link to="/desafios" onClick={() => handleNavClick("/desafios")}>Desafios</Link>

        {currentUser ? (
          <>
            <Link 
              to="/perfil" 
              className={styles.profileButton}
              onClick={() => handleNavClick("/perfil")}
            >
              Perfil
            </Link>

            <button onClick={handleLogout} className={styles.logoutButton}>
              Sair
            </button>
          </>
        ) : (
          <Link to="/login" onClick={() => handleNavClick("/login")}>
            Login
          </Link>
        )}
      </nav>

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
