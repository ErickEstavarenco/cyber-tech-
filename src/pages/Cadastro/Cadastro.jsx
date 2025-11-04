import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Importe o useNavigate
import styles from './Cadastro.module.css'; 

// 2. Importe o auth e o db do seu FirebaseConfig (na raiz)
import { auth, db } from "../../../FirebaseConfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore"; // Importe 'setDoc' e 'doc' para o Firestore

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // 3. Adicione estados de loading e erro
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Hook para redirecionar o usuário

  const handleSubmit = async (e) => { // 4. Transforme a função em 'async'
    e.preventDefault(); 
    setError(null); // Limpe erros anteriores

    // 5. Mantenha sua verificação de senhas
    if (password !== confirmPassword) {
      setError("As senhas não conferem!");
      return;
    }
    
    // 6. Adicione uma verificação de força da senha (mínimo do Firebase)
    if (password.length < 6) {
      setError("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    setLoading(true); // Inicia o carregamento

    try {
      // --- PASSO A (AUTENTICAÇÃO) ---
      // 7. Crie o usuário no Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // --- PASSO B (FIRESTORE) ---
      // 8. Salve os dados adicionais (nome) no Firestore
      // Isso cria um documento na coleção 'users' com o ID do usuário
      await setDoc(doc(db, "users", user.uid), {
        name: nome,
        email: email
        // Adicione quaisquer outros dados que queira salvar aqui
      });

      setLoading(false);
      alert("Cadastro realizado com sucesso! Você será redirecionado para o Login.");
      navigate('/login'); // Redireciona para o login após o sucesso

    } catch (err) {
      // 9. Lide com erros do Firebase
      setLoading(false);
      if (err.code === 'auth/email-already-in-use') {
        setError("Este e-mail já está em uso.");
      } else if (err.code === 'auth/weak-password') {
        setError("A senha é muito fraca. Tente outra.");
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
          {/* ... (inputs de nome, email, password, confirmPassword se mantêm iguais) ... */}
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
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mínimo 6 caracteres" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Repita a senha" required />
          </div>

          {/* 10. Adicione o display de erro (igual ao Login.jsx) */}
          {error && <p className={styles.errorMessage}>{error}</p>}

          {/* 11. Adicione o estado 'disabled' e mude o texto no botão */}
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