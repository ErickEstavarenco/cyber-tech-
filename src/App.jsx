// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './styles/globals.css'; 

// Componentes de Layout
import Header from './components/Header.jsx'; 
import Footer from './components/Footer.jsx'; 

// Páginas Principais e do Blog (da Isabella)
import Home from './pages/Home/Home.jsx';
import Blog from './pages/Blog/Blog.jsx';
import ChallengeList from './pages/ChallengeList/ChallengeList.jsx';
// O 'ChallengeDetail.jsx' foi removido pois foi substituído pelos desafios específicos
// import ChallengeDetail from './pages/ChallengeDetail/ChallengeDetail.jsx'; 
import Algoritmo from "./pages/Blog/Algoritmo";
import Variavel from "./pages/Blog/Variavel.jsx";
import Condicionais from "./pages/Blog/Condicionais.jsx";
import Funcoes from "./pages/Blog/Funcoes.jsx";
import Operacao from "./pages/Blog/Operacao.jsx";

// Páginas de Autenticação (do Victor)
import Login from './pages/Login/Login.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import EsqueciSenha from './pages/EsqueciSenha/EsqueciSenha.jsx';
import Admin from './admin/Admin.jsx';
import Perfil from './pages/Perfil/Perfil.jsx';

// Utilitário de Autenticação (do Victor)
import ProtectedRoute from './context/ProtectedRoute.jsx';

// NOVAS PÁGINAS DE DESAFIO (do seu colega)
import Desafio1 from './pages/Desafios/Desafio1.jsx';
import Desafio2 from './pages/Desafios/Desafio2.jsx';
import Desafio3 from './pages/Desafios/Desafio3.jsx';
import Desafio4 from './pages/Desafios/Desafio4.jsx';

// O AuthProvider (do AuthContext) deve estar no 'main.jsx'
// A animação (useLocation) é mantida da 'main'
function App() {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: { duration: 0.45, ease: "easeOut" },
  };

  return (
    <div className="app-layout">
      <Header />
      <main>
        {/* A estrutura de animação da 'main' é mantida */}
        <Routes location={location} key={location.pathname}>
          
          {/* --- Rotas Públicas (Blog, Home, etc.) --- */}
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/algoritmo" element={<Algoritmo />} />
          <Route path="/variavel" element={<Variavel />} />
          <Route path="/condicionais" element={<Condicionais />} />
          <Route path="/funcoes" element={<Funcoes />} />
          <Route path="/operacao" element={<Operacao />} />
          
          {/* --- ROTAS DE DESAFIOS (ATUALIZADAS) --- */}
          <Route path="/desafios" element={<ChallengeList />} />
          {/* A rota genérica '/desafios/:slug' foi removida... */}
          {/* ...e substituída pelas novas rotas específicas: */}
          <Route path="/desafios/desafio1" element={<Desafio1 />} />
          <Route path="/desafios/desafio2" element={<Desafio2 />} />
          <Route path="/desafios/desafio3" element={<Desafio3 />} />
          <Route path="/desafios/desafio4" element={<Desafio4 />} />
          
          {/* --- Rotas de Autenticação (Login, Cadastro) --- */}
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/esqueci-senha" element={<EsqueciSenha />} />

          {/* --- Rotas Protegidas (Admin, Perfil) --- */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/perfil" 
            element={
              <ProtectedRoute>
                <Perfil />
              </ProtectedRoute>
            } 
          />
          
          {/* <Route path="*" element={<NotFound />} /> */} {/* Se você tiver uma página NotFound, pode reativar */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;