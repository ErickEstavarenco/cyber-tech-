// src/pages/Cadastro/Cadastro.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css'; // <-- IMPORTANTE: Reutilizando o CSS do Login

const Cadastro = () => {
  // Estados para guardar os valores dos inputs
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Função chamada ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    // Lógica de validação simples (apenas visual por enquanto)
    if (password !== confirmPassword) {
      alert("As senhas não conferem!"); // Usamos 'alert' por simplicidade
      return;
    }

    console.log('Tentativa de cadastro com:', { nome, email, password });
    // Futuramente, a lógica do Firebase virá aqui
  };

  return (
    // Reutilizamos as classes do Login para manter o padrão
    <div className="login-container"> 
      <div className="login-card">
        <h2>Crie sua conta</h2>
        <p className="login-subtitle">É rápido e fácil.</p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="nome">Nome Completo</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
              required
            />
          </div>
          
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
              placeholder="Crie uma senha forte"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Repita a senha"
              required
            />
          </div>

          <button type="submit" className="login-button">
            Cadastrar
          </button>

        </form>

        <div className="switch-auth">
          <p>Já tem uma conta? <Link to="/login">Entre aqui</Link></p>
        </div>
        
      </div>
    </div>
  );
};

export default Cadastro;