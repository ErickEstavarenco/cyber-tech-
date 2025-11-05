// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import "./Styles/globals.css";


// MUDANÇA 1: Importar o Provedor de Autenticação do Victor
import { AuthProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* MUDANÇA 2: Envolver o <App /> com o Provedor */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);