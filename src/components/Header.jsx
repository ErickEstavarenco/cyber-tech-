import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        <Link to="/" className="logo">Cyber-Tech</Link>

        {/* Botão Hambúrguer - Visível apenas em telas pequenas */}
        <button className="hamburger-menu" onClick={toggleMenu} aria-label="Abrir menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Links de Navegação - Escondidos em telas pequenas por padrão */}
        {/* Adiciona classe 'open' quando o menu está aberto */}
        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link to="/desafios" onClick={() => setIsMenuOpen(false)}>Desafios</Link>
          <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;