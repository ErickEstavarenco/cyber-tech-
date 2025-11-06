import React, { useState, useEffect } from "react"; // 1. Importe useEffect
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { useAuth } from "../context/AuthContext";
import { auth } from "../../FirebaseConfig";
import { signOut } from "firebase/auth";

// 2. Readicione a função auxiliar para pegar o primeiro nome
const getFirstName = (fullName) => {
  if (!fullName) return '';
  const firstName = fullName.split(' ')[0];
  return firstName.charAt(0).toUpperCase() + firstName.slice(1);
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

 // src/components/Header.jsx
  
  // src/components/Header.jsx
  
  const handleLogout = async () => {
    // 1. NAVEGUE para a página de login PRIMEIRO.
    // Isso "desarma" o ProtectedRoute, pois não estamos mais em uma rota protegida.
    navigate("/login");
    
    // 2. SÓ DEPOIS, faça o signOut.
    // O usuário não verá o alerta, pois o ProtectedRoute não está mais ativo.
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  // 3. (OPCIONAL, mas resolve seu exemplo) Atualiza o TÍTULO da página
  useEffect(() => {
    if (currentUser && currentUser.name) {
      document.title = `CyberTech | ${getFirstName(currentUser.name)}`;
    } else {
      document.title = "CyberTech";
    }
  }, [currentUser]); // Atualiza o título quando o usuário mudar

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* 4. Altere o logo para exibir o nome de usuário */}
        <Link to="/">
          {currentUser ? `Olá, ${getFirstName(currentUser.name)}!` : "CyberTech"}
        </Link>
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