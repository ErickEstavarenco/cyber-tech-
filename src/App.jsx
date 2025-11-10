// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './styles/globals.css'; 

// Layout Components (from Isabella/HEAD)
import Header from './components/Header.jsx'; 
import Footer from './components/Footer.jsx'; 

// Page Imports (from Isabella/HEAD)
import Home from './pages/Home/Home.jsx';
import Blog from './pages/Blog/Blog.jsx';
import ChallengeList from './pages/ChallengeList/ChallengeList.jsx';
import ChallengeDetail from './pages/ChallengeDetail/ChallengeDetail.jsx';
import Algoritmo from "./pages/Blog/Algoritmo";
import Variavel from "./pages/Blog/Variavel.jsx";
import Condicionais from "./pages/Blog/Condicionais.jsx";
import Funcoes from "./pages/Blog/Funcoes.jsx";
import Operacao from "./pages/Blog/Operacao.jsx";

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
  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: { duration: 0.45, ease: "easeOut" },
  };

  return (
    <div className="app-layout">
      <Header />
      <main>
        <Routes location={location} key={location.pathname}>
          {/* --- Rotas Públicas (de Isabella) --- */}
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/algoritmo" element={<Algoritmo />} />
          <Route path="/variavel" element={<Variavel />} />
          <Route path="/condicionais" element={<Condicionais />} />
          <Route path="/funcoes" element={<Funcoes />} />
          <Route path="/operacao" element={<Operacao />} />
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