// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/globals.css'; 

// Layout Components (from Isabella/HEAD)
import Header from './components/Header.jsx'; 
import Footer from './components/Footer.jsx'; 

// Page Imports (from Isabella/HEAD)
import Home from './pages/Home/Home.jsx';
import Blog from './pages/Blog/Blog.jsx';
import ChallengeList from './pages/ChallengeList/ChallengeList.jsx';
import ChallengeDetail from './pages/ChallengeDetail/ChallengeDetail.jsx';

// Auth Page Imports (from Victor/Incoming)
import Login from './pages/Login/Login.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import EsqueciSenha from './pages/EsqueciSenha/EsqueciSenha.jsx';
import Admin from './admin/Admin.jsx';

// Auth Util (from Victor/Incoming)
import ProtectedRoute from './context/ProtectedRoute.jsx';

// NOTA: O AuthProvider (do AuthContext) está sendo
// usado no 'main.jsx', o que é a prática correta.

function App() {
  return (
    <div className="app-layout">
      <Header />
      <main>
        <Routes>
          {/* --- Rotas Públicas (de Isabella) --- */}
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/desafios" element={<ChallengeList />} />
          <Route path="/desafios/:slug" element={<ChallengeDetail />} />
          
          {/* --- Rotas de Autenticação (de Victor) --- */}
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/esqueci-senha" element={<EsqueciSenha />} />

          {/* --- Rotas Protegidas (de Victor) --- */}
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