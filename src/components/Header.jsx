import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { useAuth } from "../context/AuthContext";
import { auth, db } from "../../FirebaseConfig"; 
import { signOut } from "firebase/auth";
// MUDANÇA: Importamos 'onSnapshot' em vez de 'getDoc' para atualizações em tempo real
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

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = async () => {
    navigate("/login");
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  // EFEITO ATUALIZADO: Escuta em tempo real (Realtime Listener)
  useEffect(() => {
    let unsubscribe = () => {};

    if (currentUser && currentUser.uid) {
      const docRef = doc(db, "users", currentUser.uid);
      
      // onSnapshot fica "ouvindo" o documento. 
      // Sempre que ele mudar (cadastro, edição de perfil), esta função roda de novo.
      unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          // Atualiza o estado com o nome encontrado
          setUserName(data.name || ""); 
        }
      }, (error) => {
        console.error("Erro ao buscar nome em tempo real:", error);
      });
    } else {
      setUserName("");
    }

    // Limpa a "escuta" quando o componente desmonta ou o usuário desloga
    return () => unsubscribe();
  }, [currentUser]);

  // Atualiza o título da aba
  useEffect(() => {
    if (userName) {
      document.title = `CyberTech | ${getFirstName(userName)}`;
    } else {
      document.title = "CyberTech";
    }
  }, [userName]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          {/* Exibe o nome ou o padrão */}
          {currentUser && userName ? `Olá, ${getFirstName(userName)}!` : "CyberTech"}
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
        aria-label="Abrir menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}