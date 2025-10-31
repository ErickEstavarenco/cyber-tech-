// src/pages/Login/Login.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

// 1. Remova 'sendPasswordResetEmail' daqui
import { auth } from '../../../FirebaseConfig.js';
import { signInWithEmailAndPassword } from "firebase/auth"; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // 2. Remova o estado 'success'
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      navigate('/'); 
    } catch (err) {
      setLoading(false);
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setError('E-mail ou senha inválidos.');
      } else {
        setError('Ocorreu um erro ao tentar fazer login.');
      }
      console.error("Erro no login:", err);
    }
  };

  // 3. A função 'handlePasswordReset' foi removida

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Acesse sua conta</h2>
        <p className="login-subtitle">Bem-vindo de volta! Insira seus dados.</p>

        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu.email@exemplo.com"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha"
              required
              disabled={loading}
            />
          </div>
          
          {/* 4. Mensagem de sucesso removida */}
          {error && <p className="error-message">{error}</p>}

          <button 
            type="submit" 
            className="login-button" 
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>

        </form>

        <div className="switch-auth">
          <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
        </div>

        {/* 5. Alterado de 'button' para 'Link' */}
        <div className="password-reset">
          <Link to="/esqueci-minha-senha" className="password-reset-link">
            Esqueci minha senha
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Login;