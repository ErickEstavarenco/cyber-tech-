import React from 'react'; // Não precisamos de useState aqui, pois o useForm o gerencia
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'; // Hook de validação
import styles from '../Login/Login.module.css'; // Reutilizando os estilos do Login

// Autenticação Firebase e Firestore (Lado remoto)
import { auth, db } from "../../../FirebaseConfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const Cadastro = () => {
  const navigate = useNavigate();

  // Função que será executada *apenas* se o formulário passar na validação do useForm
  const onSubmit = async (values, { setErrors, setIsSubmitting }) => {
    // 1. Verificação de senhas (redundante, mas bom manter caso o hook não valide)
    if (values.password !== values.confirmPassword) {
      setErrors({ confirmPassword: "As senhas não conferem!" });
      setIsSubmitting(false);
      return;
    }
    
    // 2. Cria o usuário no Firebase Auth
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;

      // 3. Salva os dados adicionais (nome) no Firestore
      // Cria um documento na coleção 'users' com o ID do usuário
      await setDoc(doc(db, "users", user.uid), {
        name: values.nome,
        email: values.email
      });

      // 4. Sucesso: Redireciona
      // NOTE: Usamos um console.log no lugar do alert()
      console.log("Cadastro realizado com sucesso! Redirecionando para o Login.");
      navigate('/login'); 

    } catch (err) {
      setIsSubmitting(false); // Libera o botão
      
      let errorMessage = 'Ocorreu um erro ao tentar cadastrar.';

      // Lidar com erros específicos do Firebase
      if (err.code === 'auth/email-already-in-use') {
        errorMessage = "Este e-mail já está em uso.";
      } else if (err.code === 'auth/weak-password') {
        // Embora o useForm possa validar isso, o Firebase é o definitivo
        errorMessage = "A senha é muito fraca. Tente outra (mínimo de 6 caracteres).";
      }
      
      // Define o erro no state de submissão do useForm para exibição na tela
      setErrors({ submit: errorMessage }); 
      console.error("Erro no cadastro:", err);
    }
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit, setErrors, setIsSubmitting } = useForm(
    { nome: '', email: '', password: '', confirmPassword: '' },
    onSubmit
  );

  return (
    <div className={styles.loginContainer}> 
      <div className={styles.loginCard}>
        <h2>Crie sua conta</h2>
        <p className={styles.loginSubtitle}>É rápido e fácil.</p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Exibição de erro de submissão (do useForm/Firebase) */}
          {errors.submit && (
            <div className={styles.errorMessage} role="alert">
              {errors.submit}
            </div>
          )}

          {/* Campo Nome Completo */}
          <div className={styles.formGroup}>
            <label htmlFor="nome">Nome Completo</label>
            <input 
              type="text" 
              id="nome" 
              name="nome"
              value={values.nome} 
              onChange={handleChange} 
              placeholder="Seu nome" 
              required
              aria-invalid={errors.nome ? 'true' : 'false'}
              aria-describedby={errors.nome ? 'nome-error' : undefined}
            />
            {errors.nome && (
              <span id="nome-error" className={styles.fieldError} role="alert">
                {errors.nome}
              </span>
            )}
          </div>
          
          {/* Campo E-mail */}
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={values.email} 
              onChange={handleChange} 
              placeholder="seu.email@exemplo.com" 
              required
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span id="email-error" className={styles.fieldError} role="alert">
                {errors.email}
              </span>
            )}
          </div>

          {/* Campo Senha */}
          <div className={styles.formGroup}>
            <label htmlFor="password">Senha</label>
            <input 
              type="password" 
              id="password" 
              name="password"
              value={values.password} 
              onChange={handleChange} 
              placeholder="Crie uma senha forte (mín. 6 caracteres)" 
              required
              aria-invalid={errors.password ? 'true' : 'false'}
              aria-describedby={errors.password ? 'password-error' : undefined}
            />
            {errors.password && (
              <span id="password-error" className={styles.fieldError} role="alert">
                {errors.password}
              </span>
            )}
          </div>

          {/* Campo Confirmar Senha */}
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input 
              type="password" 
              id="confirmPassword" 
              name="confirmPassword"
              value={values.confirmPassword} 
              onChange={handleChange} 
              placeholder="Repita a senha" 
              required
              aria-invalid={errors.confirmPassword ? 'true' : 'false'}
              aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
            />
            {errors.confirmPassword && (
              <span id="confirmPassword-error" className={styles.fieldError} role="alert">
                {errors.confirmPassword}
              </span>
            )}
          </div>

          {/* Botão de Cadastro (usa isSubmitting do useForm) */}
          <button 
            type="submit" 
            className={styles.loginButton}
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
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