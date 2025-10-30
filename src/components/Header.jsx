// Header.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

// 1. Importe o hook 'useAuth'
import { useAuth } from '../context/AuthContext'; // Ajuste o caminho se necessário

// 2. Importe o 'signOut' (logoff) do Firebase
import { signOut } from 'firebase/auth';
import { auth } from '../../FirebaseConfig.js'; // Ajuste o caminho se necessário

function Header() {
    // 3. Use o hook para pegar o usuário atual
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    // 4. Crie a função de Logoff
    const handleLogoff = async () => {
        try {
            await signOut(auth);
            // O 'onAuthStateChanged' (do Context) vai detectar o logoff
            // e atualizar o 'currentUser' para 'null' automaticamente.
            navigate('/login'); // Redireciona para o login após o logoff
        } catch (error) {
            console.error("Erro ao fazer logoff:", error);
        }
    };

    // Função simples para pegar o primeiro nome e capitalizar
    const getFirstName = (fullName) => {
        if (!fullName) return '';
        const firstName = fullName.split(' ')[0];
        return firstName.charAt(0).toUpperCase() + firstName.slice(1);
    };

    return (
        <header className="site-header">
            <div className="container header-content">
                
                {/* 5. Altere o Logo dinamicamente */}
                <Link to="/" className="logo">
                    {currentUser ? `BEM VINDO, ${getFirstName(currentUser.name)}!` : "BEM VINDO!"}
                </Link>

                <nav className="main-nav">
                    <Link to="/blog">Blog</Link>
                    <Link to="/desafios">Desafios</Link>

                    {/* 6. Altere o "Login" para "Logoff" dinamicamente */}
                    {currentUser ? (
                        <button onClick={handleLogoff} className="logoff-button">
                            Sair
                        </button>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </nav>
            </div>
        </header>
    );
}
export default Header;