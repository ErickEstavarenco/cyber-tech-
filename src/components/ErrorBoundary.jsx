// src/components/ErrorBoundary.jsx
import React from 'react';
import styles from './ErrorBoundary.module.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Erro capturado pelo ErrorBoundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorBoundaryContainer}>
          <div className={styles.errorBoundaryContent}>
            <h1 className={styles.errorTitle}>Oops! Algo deu errado</h1>
            <p className={styles.errorMessage}>
              Desculpe, ocorreu um erro inesperado. Por favor, tente novamente.
            </p>
            <button 
              onClick={this.handleReset}
              className={styles.resetButton}
            >
              Voltar para a página inicial
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className={styles.errorDetails}>
                <summary>Detalhes do erro (modo desenvolvimento)</summary>
                <pre>{this.state.error.toString()}</pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

