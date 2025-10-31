// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Componentes e Páginas
import Header from './components/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
// 1. Importe o novo componente
import EsqueciSenha from './pages/EsqueciSenha/EsqueciSenha'; 

// Importe sua rota protegida (como você queria manter)
import ProtectedRoute from './context/ProtectedRoute'; 

function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="container">
        <Routes>
          {/* --- Rotas Públicas --- */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/cadastro" element={<Cadastro />} />
          {/* 2. Adicione a nova rota */}
          <Route path="/esqueci-minha-senha" element={<EsqueciSenha />} />
          
          {/* --- Rotas Protegidas --- */}
          <Route 
            path="/blog" 
            element={
              <ProtectedRoute>
                <h1>Página do Blog</h1>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/desafios" 
            element={
              <ProtectedRoute>
                <h1>Página de Desafios</h1>
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;