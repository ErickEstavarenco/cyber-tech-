import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import styles from '../Login/Login.module.css'; 

const Cadastro = () => {

  const onSubmit = async (values) => {
    // Simulação de cadastro (substitua pela sua lógica real)
    console.log('Tentativa de cadastro com:', values);
    // Exemplo: await authService.register(values);
    // navigate('/login');
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    { nome: '', email: '', password: '', confirmPassword: '' },
    onSubmit
  );

  return (
    <div className={styles.loginContainer}> 
      <div className={styles.loginCard}>
        <h2>Crie sua conta</h2>
        <p className={styles.loginSubtitle}>É rápido e fácil.</p>

        <form onSubmit={handleSubmit} noValidate>
          {errors.submit && (
            <div className={styles.errorMessage} role="alert">
              {errors.submit}
            </div>
          )}

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

          <div className={styles.formGroup}>
            <label htmlFor="password">Senha</label>
            <input 
              type="password" 
              id="password" 
              name="password"
              value={values.password} 
              onChange={handleChange} 
              placeholder="Crie uma senha forte" 
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