import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="site-header">
            <div className="container header-content">
                <Link to="/" className="logo">
                    BEM VINDO!
                </Link>
                <nav className="main-nav">
                    <Link to="/blog">Blog</Link>
                    <Link to="/desafios">Desafios</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </div>
        </header>
    );
}
export default Header;