import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// MUDANÇA: Reutilizando o CSS Module do Login
import styles from '../Login/Login.module.css'; 

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (password !== confirmPassword) {
      alert("As senhas não conferem!");
      return;
    }
    console.log('Tentativa de cadastro com:', { nome, email, password });
  };

  return (
    // MUDANÇA: Usando classes de CSS Modules
    <div className={styles.loginContainer}> 
      <div className={styles.loginCard}>
        <h2>Crie sua conta</h2>
        <p className={styles.loginSubtitle}>É rápido e fácil.</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="nome">Nome Completo</label>
            <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" required />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu.email@exemplo.com" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Crie uma senha forte" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Repita a senha" required />
          </div>

          <button type="submit" className={styles.loginButton}>
            Cadastrar
          </button>
        </form>

        <div className={styles.switchAuth}>
          <p>Já tem uma conta? <Link to="/login">Entre aqui</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;