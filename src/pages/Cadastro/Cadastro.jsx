import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Cadastro.module.css'; 
import { auth, db } from '../../../FirebaseConfig.js'; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const Cadastro = () => {
  // --- PASSO 1: ADICIONAR NOVOS ESTADOS ---
  const [nome, setNome] = useState('');
  const [apelido, setApelido] = useState(''); // Novo
  const [dataNascimento, setDataNascimento] = useState(''); // Novo
  const [telefone, setTelefone] = useState(''); // Novo
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
    if (password.length < 6) {
      setError("A senha deve ter no mínimo 6 caracteres.");
      return;
    }
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // --- PASSO 3: ATUALIZAR O setDoc PARA SALVAR OS NOVOS DADOS ---
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid, // Salvar o UID é uma boa prática
        name: nome,
        email: email,
        apelido: apelido,
        dataNascimento: dataNascimento,
        telefone: telefone
      }); // Modificado

      setLoading(false);
      alert("Cadastro realizado com sucesso! Você será redirecionado para o Login.");
      navigate('/login');
    } catch (err) {
      setLoading(false);
      if (err.code === 'auth/email-already-in-use') {
        setError("Este e-mail já está em uso.");
      } else {
        setError("Ocorreu um erro ao tentar cadastrar.");
      }
      console.error("Erro no cadastro:", err);
    }
  };

  return (
    <div className={styles.loginContainer}> 
      <div className={styles.loginCard}>
        <h2>Crie sua conta</h2>
        <p className={styles.loginSubtitle}>É rápido e fácil.</p>
        <form onSubmit={handleSubmit}>
          
          {/* --- PASSO 2: ADICIONAR NOVOS CAMPOS NO FORMULÁRIO --- */}
          
          <div className={styles.formGroup}>
            <label htmlFor="nome">Nome Completo</label>
            <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" required />
          </div>
          
          {/* Novo Campo: Apelido */}
          <div className={styles.formGroup}>
            <label htmlFor="apelido">Apelido</label>
            <input 
              type="text" 
              id="apelido" 
              value={apelido} 
              onChange={(e) => setApelido(e.target.value)} 
              placeholder="Como você gosta de ser chamado" 
            />
          </div>

          {/* Novo Campo: Data de Nascimento */}
          <div className={styles.formGroup}>
            <label htmlFor="dataNascimento">Data de Nascimento</label>
            <input 
              type="date" 
              id="dataNascimento" 
              value={dataNascimento} 
              onChange={(e) => setDataNascimento(e.target.value)} 
            />
          </div>

          {/* Novo Campo: Telefone */}
          <div className={styles.formGroup}>
            <label htmlFor="telefone">Telefone</label>
            <input 
              type="tel" 
              id="telefone" 
              value={telefone} 
              onChange={(e) => setTelefone(e.target.value)} 
              placeholder="(XX) XXXXX-XXXX" 
            />
          </div>

          {/* --- Campos existentes --- */}
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu.email@exemplo.com" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mínimo 6 caracteres" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Repita a senha" required />
          </div>
          
          {error && <p className={styles.errorMessage}>{error}</p>}
          
          <button type="submit" className={styles.loginButton} disabled={loading}>
            {loading ? 'Cadastrando...' : 'Cadastrar'}
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