import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../../FirebaseConfig.js'; 
import styles from '../Login/Login.module.css'; // Reutiliza o CSS do Login

const EsqueciSenha = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setLoading(false);
      setSuccess('E-mail de redefinição enviado! Verifique sua caixa de entrada.');
      setEmail(''); 
    } catch (err) {
      setLoading(false);
      setError('Ocorreu um erro ao enviar o e-mail de redefinição.');
      console.error("Erro na redefinição de senha:", err);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2>Esqueceu sua senha?</h2>
        <p className={styles.loginSubtitle}>Insira seu e-mail abaixo e enviaremos um link para redefini-la.</p>

        {!success ? (
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            {error && <p className={styles.errorMessage}>{error}</p>}
            <button type="submit" className={styles.loginButton} disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar link'}
            </button>
          </form>
        ) : (
          <p className={styles.successMessage}>{success}</p>
        )}

        <div className={styles.switchAuth} style={{ marginTop: '20px' }}>
          <p><Link to="/login">Voltar para o Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default EsqueciSenha;

//foi realizado testes para confirmação de funcionalidade.