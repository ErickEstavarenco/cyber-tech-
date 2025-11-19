import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion"; // 1. Importação Adicionada
import './styles/globals.css'; 

// Componentes de Layout
import Header from './components/Header.jsx'; 
import Footer from './components/Footer.jsx'; 

// Páginas Principais e do Blog
import Home from './pages/Home/Home.jsx';
import Blog from './pages/Blog/Blog.jsx';
import ChallengeList from './pages/ChallengeList/ChallengeList.jsx';
import Algoritmo from "./pages/Blog/Algoritmo";
import Variavel from "./pages/Blog/Variavel.jsx";
import Condicionais from "./pages/Blog/Condicionais.jsx";
import Funcoes from "./pages/Blog/Funcoes.jsx";
import Operacao from "./pages/Blog/Operacao.jsx";

// Páginas de Autenticação
import Login from './pages/Login/Login.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import EsqueciSenha from './pages/EsqueciSenha/EsqueciSenha.jsx';
import Perfil from './pages/Perfil/Perfil.jsx';

// Páginas de Admin
import Admin from './admin/Admin.jsx';
import Newblog from './admin/Subpagina/Newblog.jsx';
import Comentarios from './admin/Subpagina/Comentarios.jsx';
import Notas from './admin/Subpagina/Notas.jsx';

// Protetores de Rota
import ProtectedRoute from './context/ProtectedRoute.jsx'; 
import ProtectedAdminRoute from './context/ProtectedAdminRoute.jsx'; 

// Páginas de Desafio
import Desafio1 from './pages/Desafios/Desafio1.jsx';
import Desafio2 from './pages/Desafios/Desafio2.jsx';
import Desafio3 from './pages/Desafios/Desafio3.jsx';
import Desafio4 from './pages/Desafios/Desafio4.jsx';

function App() {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: { duration: 0.45, ease: "easeOut" },
  };

  // Função auxiliar para animar e proteger (opcional, mas limpa o código)
  const AnimatedPage = ({ children }) => (
    <motion.div {...pageVariants}>
      {children}
    </motion.div>
  );

  return (
    <div className="app-layout">
      <Header />
      <main>
        {/* 2. Adicionado AnimatePresence para as transições */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            
            {/* --- Rotas Públicas --- */}
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route path="/login" element={<AnimatedPage><Login /></AnimatedPage>} />
            <Route path="/cadastro" element={<AnimatedPage><Cadastro /></AnimatedPage>} />
            {/* 3. Corrigido para /esqueci-minha-senha para bater com o erro anterior */}
            <Route path="/esqueci-minha-senha" element={<AnimatedPage><EsqueciSenha /></AnimatedPage>} />

            
            {/* --- Rotas Protegidas para USUÁRIOS LOGADOS --- */}
            {/* Ajustado para envolver cada componente com ProtectedRoute */}
            
            <Route path="/blog" element={
              <ProtectedRoute><AnimatedPage><Blog /></AnimatedPage></ProtectedRoute>
            } />
            <Route path="/algoritmo" element={
              <ProtectedRoute><AnimatedPage><Algoritmo /></AnimatedPage></ProtectedRoute>
            } />
            <Route path="/variavel" element={
              <ProtectedRoute><AnimatedPage><Variavel /></AnimatedPage></ProtectedRoute>
            } />
            <Route path="/condicionais" element={
              <ProtectedRoute><AnimatedPage><Condicionais /></AnimatedPage></ProtectedRoute>
            } />
            <Route path="/funcoes" element={
              <ProtectedRoute><AnimatedPage><Funcoes /></AnimatedPage></ProtectedRoute>
            } />
            <Route path="/operacao" element={
              <ProtectedRoute><AnimatedPage><Operacao /></AnimatedPage></ProtectedRoute>
            } />
            
            <Route path="/desafios" element={
              <ProtectedRoute><AnimatedPage><ChallengeList /></AnimatedPage></ProtectedRoute>
            } />
            <Route path="/desafios/desafio1" element={
              <ProtectedRoute><AnimatedPage><Desafio1 /></AnimatedPage></ProtectedRoute>
            } />
            <Route path="/desafios/desafio2" element={
              <ProtectedRoute><AnimatedPage><Desafio2 /></AnimatedPage></ProtectedRoute>
            } />
            <Route path="/desafios/desafio3" element={
              <ProtectedRoute><AnimatedPage><Desafio3 /></AnimatedPage></ProtectedRoute>
            } />
            <Route path="/desafios/desafio4" element={
              <ProtectedRoute><AnimatedPage><Desafio4 /></AnimatedPage></ProtectedRoute>
            } />

            <Route path="/perfil" element={
              <ProtectedRoute><AnimatedPage><Perfil /></AnimatedPage></ProtectedRoute>
            } />

            {/* --- Rotas Protegidas de ADMIN --- */}
            <Route path="/admin" element={
              <ProtectedAdminRoute><AnimatedPage><Admin /></AnimatedPage></ProtectedAdminRoute>
            } />
            <Route path="/admin/newblog" element={
              <ProtectedAdminRoute><AnimatedPage><Newblog /></AnimatedPage></ProtectedAdminRoute>
            } />
            <Route path="/admin/comentarios" element={
              <ProtectedAdminRoute><AnimatedPage><Comentarios /></AnimatedPage></ProtectedAdminRoute>
            } />
            <Route path="/admin/notas" element={
              <ProtectedAdminRoute><AnimatedPage><Notas /></AnimatedPage></ProtectedAdminRoute>
            } />
            
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;