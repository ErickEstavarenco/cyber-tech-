// src/pages/Login/Login.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Mantemos o Link para o cadastro
import './Login.css'; // O CSS continua o mesmo

const Login = () => {
  // Estados para guardar os valores dos inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função chamada ao enviar o formulário (agora só impede o refresh)
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    console.log('Tentativa de login com:', { email, password });
    // Futuramente, a lógica do Firebase virá aqui
  };

 return (
    <div className="login-container">
      <div className="login-card">
        {/* REMOVA TODOS OS <br /> AQUI! */}
        <h2>Acesse sua conta</h2> 
        <p className="login-subtitle">Bem-vindo de volta! Insira seus dados.</p>
        {/* ... (formulário) ... */}

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
            />
          </div>

          {/* O espaço para a mensagem de erro pode ficar aqui,
              ou pode ser removido por enquanto.
              <p className="error-message">Mensagem de erro</p> 
          */}

          <button type="submit" className="login-button">
            Entrar
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