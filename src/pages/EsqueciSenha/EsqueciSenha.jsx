// src/pages/EsqueciSenha/EsqueciSenha.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from "firebase/auth";
// Ajuste o caminho para seu FirebaseConfig na raiz
import { auth } from '../../../FirebaseConfig.js'; 
// Reutiliza o CSS da página de Login
import '../Login/Login.css'; 

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
      setSuccess('E-mail de redefinição enviado! Verifique sua caixa de entrada (e spam).');
      setEmail(''); // Limpa o campo após o sucesso
    } catch (err) {
      setLoading(false);
      if (err.code === 'auth/user-not-found') {
        setError('E-mail não encontrado em nosso sistema.');
      } else {
        setError('Ocorreu um erro ao enviar o e-mail de redefinição.');
      }
      console.error("Erro na redefinição de senha:", err);
    }
  };

  return (
    // Reutilizamos a estrutura e classes do Login para manter o padrão
    <div className="login-container">
      <div className="login-card">
        <h2>Esqueceu sua senha?</h2>
        <p className="login-subtitle">Sem problemas. Insira seu e-mail abaixo e enviaremos um link para redefini-la.</p>

        {/* Se a mensagem de sucesso foi enviada, escondemos o formulário */}
        {!success ? (
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

            {error && <p className="error-message">{error}</p>}

            <button 
              type="submit" 
              className="login-button" 
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Enviar link de redefinição'}
            </button>
          </form>
        ) : (
          <p className="success-message">{success}</p>
        )}

        {/* Link para voltar ao Login */}
        <div className="switch-auth" style={{ marginTop: '20px' }}>
          <p><Link to="/login">Voltar para o Login</Link></p>
        </div>
        
      </div>
    </div>
  );
};

export default EsqueciSenha;