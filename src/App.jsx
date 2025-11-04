// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/globals.css'; 

// Componentes e Páginas
import Header from './components/Header';
import Footer from './components/Footer.jsx'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro'; 

// 1. Importe o novo componente
import EsqueciSenha from './pages/EsqueciSenha/EsqueciSenha'; 

// Importe sua rota protegida (como você queria manter)
import ProtectedRoute from './context/ProtectedRoute'; 
// Imports do INCOMING (da 'main') - Corrigidos com .jsx
import Blog from './pages/Blog/Blog.jsx';
import ChallengeList from './pages/ChallengeList/ChallengeList.jsx';
import ChallengeDetail from './pages/ChallengeDetail/ChallengeDetail.jsx';

function App() {
  return (
    // Mantenha o SEU layout (do HEAD)
    <div className="app-layout">
      <Header />
      <main>
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
                <Blog />
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
      <Footer />
    </div>
  );
}

export default App;