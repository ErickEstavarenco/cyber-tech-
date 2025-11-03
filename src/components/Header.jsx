import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css'; // Usando CSS Modules
import { useAuth } from '../context/AuthContext'; // Ajuste o caminho se necessário
import { signOut } from 'firebase/auth';
import { auth } from '../../FirebaseConfig.js'; // Ajuste o caminho se necessário

function Header() {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const handleLogoff = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error("Erro ao fazer logoff:", error);
        }
    };

    const getFirstName = (fullName) => {
        if (!fullName) return '';
        const firstName = fullName.split(' ')[0];
        return firstName.charAt(0).toUpperCase() + firstName.slice(1);
    };

    const handleNavigation = (path) => {
        if (currentUser) {
            // Se o usuário estiver logado, navega normalmente
            navigate(path);
        } else {
            // Se estiver deslogado, mostra o alerta e navega para o login
            alert("Você precisa estar logado para acessar este serviço.");
            navigate('/login');
        }
    };

    return (
        <header className={styles.siteHeader}>
            <div className={`container ${styles.headerContent}`}>
                <Link to="/" className={styles.logo}>
                    {currentUser ? `BEM VINDO, ${getFirstName(currentUser.name)}!` : "BEM VINDO!"}
                </Link>

                <nav className={styles.mainNav}>
                    {/* Navegação: Botões usando CSS Modules */}
                    <button onClick={() => handleNavigation('/blog')} className={styles.navButton}>
                        Blog
                    </button>
                    <button onClick={() => handleNavigation('/desafios')} className={styles.navButton}>
                        Desafios
                    </button>

                    {/* Lógica de Login/Logoff */}
                    {currentUser ? (
                        <button onClick={handleLogoff} className={styles.logoffButton}>
                            Sair
                        </button>
                    ) : (
                        <Link to="/login" className={styles.navLink}>
                            Login
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Header;
