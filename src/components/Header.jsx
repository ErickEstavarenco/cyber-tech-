import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { useAuth } from '../../context/AuthContext'; // Certifique-se de que o caminho está correto
import { signOut } from 'firebase/auth';
import { auth } from '../../FirebaseConfig'; // Certifique-se de que o caminho está correto

function Header() {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Função para verificar se o link está ativo (Mantida da HEAD)
    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        // Verifica se o caminho atual começa com o path
        return location.pathname.startsWith(path);
    };
    
    // Função de Logoff (Mantida da 9ccb57d...)
    const handleLogoff = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error("Erro ao fazer logoff:", error);
        }
    };

    // Função para pegar o primeiro nome (Mantida da 9ccb57d...)
    const getFirstName = (fullName) => {
        if (!fullName) return '';
        const firstName = fullName.split(' ')[0];
        // Retorna o nome com a primeira letra maiúscula
        return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    };

    // Função de navegação protegida (Mantida da 9ccb57d...)
    const handleNavigation = (path) => {
        if (currentUser) {
            navigate(path);
        } else {
            // OBS: Não é permitido usar alert() em ambientes imersivos, mas mantive a lógica de redirecionar para login.
            // Para produção, você deve usar um modal de notificação no lugar de alert().
            console.warn("Usuário não logado. Redirecionando para login.");
            navigate('/login');
        }
    };

    return (
        <header className={styles.header} role="banner">
            <div className={`container ${styles.navContainer}`}>
                
                {/* LOGO/Boas-vindas */}
                <Link 
                    to="/" 
                    className={styles.logo}
                    aria-label="Cyber Tech - Página inicial"
                >
                    {currentUser ? `Bem-vindo, ${getFirstName(currentUser.name)}!` : "Cyber Tech"}
                </Link>

                <nav className={styles.nav} role="navigation" aria-label="Navegação principal">
                    
                    {/* INÍCIO (Sempre público) */}
                    <Link 
                        to="/" 
                        className={`${styles.navLink} ${isActive('/') ? styles.activeLink : ''}`}
                        aria-current={isActive('/') ? 'page' : undefined}
                    >
                        Início
                    </Link>

                    {/* BLOG (Protegido - usa handleNavigation) */}
                    <button 
                        onClick={() => handleNavigation('/blog')} 
                        className={`${styles.navLink} ${isActive('/blog') ? styles.activeLink : ''}`}
                        aria-current={isActive('/blog') ? 'page' : undefined}
                    >
                        Blog
                    </button>
                    
                    {/* DESAFIOS (Protegido - usa handleNavigation) */}
                    <button 
                        onClick={() => handleNavigation('/desafios')} 
                        className={`${styles.navLink} ${isActive('/desafios') ? styles.activeLink : ''}`}
                        aria-current={isActive('/desafios') ? 'page' : undefined}
                    >
                        Desafios
                    </button>
                    
                    {/* LOGIN / LOGOFF */}
                    {currentUser ? (
                        <button 
                            onClick={handleLogoff} 
                            // Assumindo que 'navLinkOut' é um estilo para o botão de logoff, se não existir, use 'navLink'
                            className={styles.navLinkOut || styles.navLink}
                        >
                            Sair
                        </button>
                    ) : (
                        <Link 
                            to="/login" 
                            className={`${styles.navLink} ${isActive('/login') || isActive('/cadastro') ? styles.activeLink : ''}`}
                            aria-current={isActive('/login') || isActive('/cadastro') ? 'page' : undefined}
                        >
                            Login
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Header;