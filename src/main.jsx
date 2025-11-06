// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import ErrorBoundary from "./components/ErrorBoundary.jsx"; // Importado do seu lado

// MUDANÇA 1: Importar o Provedor de Autenticação (do lado remoto)
import { AuthProvider } from './context/AuthContext.jsx'; 

import "./styles/globals.css"; // Importado do seu lado

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary> {/* Envolve todo o aplicativo com a Boundary */}
      <BrowserRouter>
        {/* Envolve o App com o Provedor de Autenticação (para login/cadastro) */}
        <AuthProvider> 
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);