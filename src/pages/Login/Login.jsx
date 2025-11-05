import React from 'react';
import { Link } from 'react-router-dom'; 
import { useForm } from '../../hooks/useForm';
import styles from './Login.module.css';

const Login = () => {

  const onSubmit = async (values) => {
    // Simulação de login (substitua pela sua lógica real)
    console.log('Tentativa de login com:', values);
    // Exemplo: await authService.login(values);
    // navigate('/');
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    { email: '', password: '' },
    onSubmit
  );

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2>Acesse sua conta</h2> 
        <p className={styles.loginSubtitle}>Bem-vindo de volta! Insira seus dados.</p>

        <form onSubmit={handleSubmit} noValidate>
          {errors.submit && (
            <div className={styles.errorMessage} role="alert">
              {errors.submit}
            </div>
          )}

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
              placeholder="Sua senha" 
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

          <button 
            type="submit" 
            className={styles.loginButton}
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className={styles.switchAuth}>
          <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;