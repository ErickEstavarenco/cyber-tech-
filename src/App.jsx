// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/globals.css'; // Estilos globais

// Layout Components
import Header from './components/Header.jsx'; 
import Footer from './components/Footer.jsx'; 

// --- Imports de Páginas ---
import Home from './pages/Home/Home.jsx';
import Blog from './pages/Blog/Blog.jsx';

// Imports dos posts individuais (Usado no modelo de rota estática)
import Variavel from './pages/Blog/Variavel.jsx';
import Algoritmo from './pages/Blog/Algoritmo.jsx';
import TipoDeDados from './pages/Blog/Tipo.jsx'; // (Assumindo que você tem este arquivo)

// Imports de Desafios
import ChallengeList from './pages/ChallengeList/ChallengeList.jsx';
import ChallengeDetail from './pages/ChallengeDetail/ChallengeDetail.jsx';

// Imports de Autenticação
import Login from './pages/Login/Login.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import EsqueciSenha from './pages/EsqueciSenha/EsqueciSenha.jsx';
import Admin from './admin/Admin.jsx';
import ProtectedRoute from './context/ProtectedRoute.jsx';


function App() {
  return (
    <div className="app-layout">
      <Header />
      <main>
        <Routes>
          {/* --- Rotas Públicas Principais --- */}
          <Route path="/" element={<Home />} />
          
          {/* --- Rotas de Blog (Lista e Posts Estáticos) --- */}
          <Route path="/blog" element={<Blog />} />
          
          {/* Rotas estáticas para os posts: */}
          <Route path="/blog/variavel" element={<Variavel />} />
          <Route path="/blog/algoritmo" element={<Algoritmo />} />
          <Route path="/blog/tipos-de-dados" element={<TipoDeDados />} /> 
          
          {/* --- Rotas de Desafios --- */}
          <Route path="/desafios" element={<ChallengeList />} />
          <Route path="/desafios/:slug" element={<ChallengeDetail />} />
          
          {/* --- Rotas de Autenticação --- */}
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/esqueci-senha" element={<EsqueciSenha />} />

          {/* --- Rotas Protegidas --- */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <Admin />
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