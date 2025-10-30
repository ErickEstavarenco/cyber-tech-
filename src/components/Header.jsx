// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        // A classe 'site-header' tem 'position: fixed'
        <header className="site-header">
            {/* O 'container header-content' garante a largura máxima e centralização */}
            <div className="container header-content">
                
                {/* O logo sempre aponta para a Home ("/") */}
                <Link to="/" className="logo">
                    Cyber-Tech
                </Link>
                
                <nav className="main-nav">
                    {/* NOVO: Link para a página inicial (Início) */}
                    <Link to="/">Início</Link>
                    
                    <Link to="/blog">Blog</Link>
                    <Link to="/desafios">Desafios</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;