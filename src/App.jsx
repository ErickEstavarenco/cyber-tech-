// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';

// 1. Importe o ProtectedRoute do novo local
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
          
          {/* --- Rotas Protegidas --- */}
          {/* 2. "Envolva" os elementos da rota com o <ProtectedRoute> */}
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