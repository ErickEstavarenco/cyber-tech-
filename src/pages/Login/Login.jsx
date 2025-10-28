// src/pages/Login/Login.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

// CORREÇÃO AQUI 👇👇👇 (caminho para a raiz do projeto)
import { auth } from '../../../FirebaseConfig.js';
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Tenta fazer o login com o Firebase Auth
      await signInWithEmailAndPassword(auth, email, password);
      
      setLoading(false);
      
      // Redireciona para a home/dashboard após o login
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
        
      </div>
    </div>
  );
};
export default Login;