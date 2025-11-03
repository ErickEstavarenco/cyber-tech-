import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css'; // Usando CSS Modules
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
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      navigate('/'); // Redireciona após login bem-sucedido
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
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2>Acesse sua conta</h2>
        <p className={styles.loginSubtitle}>Bem-vindo de volta! Insira seus dados.</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
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

          <div className={styles.formGroup}>
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

          {/* Exibição do erro, se houver */}
          {error && <p className={styles.errorMessage}>{error}</p>}

          <button type="submit" className={styles.loginButton} disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className={styles.switchAuth}>
          <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
        </div>

        <div className={styles.passwordReset}>
          <Link to="/esqueci-minha-senha" className={styles.passwordResetLink}>
            Esqueci minha senha
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
