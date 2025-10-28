// src/pages/Cadastro/Cadastro.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Login/Login.css'; // Reutilizando o CSS

// CORREÇÃO AQUI 👇👇👇 (caminho para a raiz do projeto)
import { auth, db } from '../../../FirebaseConfig.js'; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); 

    if (password !== confirmPassword) {
      setError("As senhas não conferem!");
      return;
    }

    setLoading(true);

    try {
      // ETAPA 1: Criar o usuário na Autenticação
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ETAPA 2: Salvar os dados adicionais no Firestore
      const userDocRef = doc(db, "users", user.uid);

      await setDoc(userDocRef, {
        uid: user.uid,
        name: nome,
        email: email,
        role: "student",
        createdAt: serverTimestamp() 
      });

      setLoading(false);
      
      // ETAPA 3: Redirecionar o usuário
      navigate('/'); 

    } catch (err) {
      setLoading(false);
      setError(err.message);
      console.error("Erro no cadastro:", err);
    }
  };

  return (
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
              disabled={loading}
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
              placeholder="Crie uma senha forte"
              required
              disabled={loading}
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
              disabled={loading}
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button 
            type="submit" 
            className="login-button" 
            disabled={loading}
          >
            {loading ? 'Cadastrando...' : 'Cadastrar'}
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