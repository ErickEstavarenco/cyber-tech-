import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../FirebaseConfig.js';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    // Sua função de logoff (Mantida)
    const handleLogoff = async () => { //
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error("Erro ao fazer logoff:", error);
        }
    };

    // Sua função para pegar o primeiro nome (Mantida)
    const getFirstName = (fullName) => { //
        if (!fullName) return '';
        const firstName = fullName.split(' ')[0];
        return firstName.charAt(0).toUpperCase() + firstName.slice(1);
    };

    // Sua função de navegação protegida (Mantida)
    const handleNavigation = (path) => { //
        if (currentUser) {
            // Se o usuário estiver logado, navega normalmente
            navigate(path);
        } else {
            // Se estiver deslogado, mostra o alerta e navega para o login
            alert("Você precisa estar logado para acessar este serviço.");
            navigate('/login');
        }
    };

    // Fechar menu ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {
            const nav = document.querySelector(`.${styles.nav}`);
            const menuButton = document.querySelector(`.${styles.hamburger}`);
            if (isMenuOpen && nav && !nav.contains(event.target) && !menuButton.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <header className={styles.header}>
            <div className={styles.navContainer}>
                <Link to="/" className={styles.logo}>
                    {currentUser ? `BEM VINDO, ${getFirstName(currentUser.name)}!` : "BEM VINDO!"}
                </Link>
                
                <button 
                    className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* 4. CORREÇÃO: Era 'styles.mainNav', mudou para 'styles.nav' */}
                <div className={styles.menuContainer}>
                    <button 
                        className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        <div className={styles.menuIcon}></div>
                        <div className={styles.menuIcon}></div>
                        <div className={styles.menuIcon}></div>
                    </button>
                </div>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <Link to='/' className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                        Início
                    </Link>
                    <button 
                        onClick={() => {
                            handleNavigation('/blog');
                            setIsMenuOpen(false);
                        }} 
                        className={styles.navLink}
                    >
                        Blog
                    </button>
                    <button 
                        onClick={() => {
                            handleNavigation('/desafios');
                            setIsMenuOpen(false);
                        }} 
                        className={styles.navLink}
                    >
                        Desafios
                    </button>

                    {currentUser ? (
                        <button 
                            onClick={() => {
                                handleLogoff();
                                setIsMenuOpen(false);
                            }} 
                            className={styles.navLinkOut}
                        >
                            Sair
                        </button>
                    ) : (
                        <Link 
                            to="/login" 
                            className={styles.navLink}
                            onClick={() => setIsMenuOpen(false)}
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