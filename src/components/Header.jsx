// src/components/Header.jsx

import React from 'react';
// 1. O 'Link' só será usado para o logo e 'Login'
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useAuth } from '../context/AuthContext'; // Ajuste o caminho se necessário
import { signOut } from 'firebase/auth';
import { auth } from '../../FirebaseConfig.js'; // Ajuste o caminho se necessário

function Header() {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    // ... (as funções handleLogoff e getFirstName permanecem iguais) ...
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


    // 2. NOVA FUNÇÃO: Lógica de clique para os links
    //    Esta função decide o que fazer quando "Blog" ou "Desafios" são clicados
    const handleNavigation = (path) => {
        if (currentUser) {
            // 2a. Se o usuário estiver logado, navega normalmente
            navigate(path);
        } else {
            // 2b. Se estiver deslogado, mostra o alerta e navega para o login
            alert("Você precisa estar logado para acessar este serviço.");
            navigate('/login');
        }
    };

    return (
        <header className="site-header">
            <div className="container header-content">
                
                <Link to="/" className="logo">
                    {currentUser ? `BEM VINDO, ${getFirstName(currentUser.name)}!` : "BEM VINDO!"}
                </Link>

                <nav className="main-nav">
    
                    {/* 1. Use 'nav-button' para os links de navegação padrão */}
                    <button onClick={() => handleNavigation('/blog')} className="nav-button">
                        Blog
                    </button>
                    <button onClick={() => handleNavigation('/desafios')} className="nav-button">
                        Desafios
                    </button>

                    {/* Lógica de Login/Logoff */}
                    {currentUser ? (
                        // 2. Use 'logoff-button' para a ação de sair
                        <button onClick={handleLogoff} className="logoff-button">
                            Sair
                        </button>
                    ) : (
                        // 3. O 'Login' continua sendo um <Link> (<a>)
                        <Link to="/login">Login</Link>
                    )}
                </nav>
            </div>
        </header>
    );
}
export default Header;