import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; 
import styles from "./Header.module.css";
import { useAuth } from "../context/AuthContext";
import { auth, db } from "../../FirebaseConfig"; 
import { signOut } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore"; 

// --- CONFIGURAÇÃO DE SEGURANÇA ---
// Cole aqui o MESMO UID que você usou no ProtectedAdminRoute e nas Regras do Firebase
const ADMIN_UID = "SswilmG3ZQPAfIfCaA4NohaKZzM2"; 

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
  const location = useLocation(); 

  // Verifica se o usuário logado é o administrador
  const isAdmin = currentUser && currentUser.uid === ADMIN_UID;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = async () => {
    navigate("/login");
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

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
        <Link to="/" onClick={() => handleNavClick("/")}
        style={{
              fontWeight: 'bold',
            }}>Início</Link>

        <Link to="/blog" onClick={() => handleNavClick("/blog")}
        style={{
              fontWeight: 'bold',
            }}>Blog</Link>

        <Link to="/desafios" onClick={() => handleNavClick("/desafios")}
        style={{
              fontWeight: 'bold',
            }}>Desafios</Link>

        {/* --- BOTÃO DE ADMIN (Visível apenas para o Admin logado) --- */}
        {isAdmin && (
          <Link 
            to="/admin" 
            onClick={() => handleNavClick("/admin")}
            style={{
              textAlign: 'center',
              color: '#F0F0F0', 
              fontWeight: 'bold',
              padding: '5px 10px',
              borderRadius: '5px',
              marginRight: '10px'
            }}
          >
           Administrativo
          </Link>
        )}

       {/*style={{
              fontWeight: 'bold',
            }}*/}

        {currentUser ? (
          <>
            <Link 
              to="/perfil" 
              className={styles.profileButton}
              onClick={() => handleNavClick("/perfil")}
            
              style={{
              fontWeight: 'bold',
            }}
            >
              Perfil
            </Link>

            <button onClick={handleLogout} className={styles.logoutButton}>
              Sair
            </button>
          </>
        ) : (
          <Link to="/login" onClick={() => handleNavClick("/login")}
          style={{
              fontWeight: 'bold',
            }}>
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