// src/App.jsx (Corrigido)
import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// --- NOVAS IMPORTAÇÕES ---
// 1. Importe o componente de rota protegida (vamos criá-lo abaixo)
import ProtectedRoute from "./context/ProtectedRoute.jsx"
// 2. Importe as páginas que faltam (vamos recriá-las abaixo)
const Cadastro = React.lazy(() => import("./pages/Cadastro/Cadastro"));
const EsqueciSenha = React.lazy(() => import("./pages/EsqueciSenha/EsqueciSenha"));

// Componentes Globais
import Header from "./components/Header";
import Footer from "./components/Footer";

// Lazy Loading das Páginas (existentes)
const Home = React.lazy(() => import("./pages/Home/Home"));
const Blog = React.lazy(() => import("./pages/Blog/Blog"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const Admin = React.lazy(() => import("./admin/Admin"));
const ChallengeList = React.lazy(() => import("./pages/ChallengeList/ChallengeList"));
const ChallengeDetail = React.lazy(() => import("./pages/ChallengeDetail/ChallengeDetail"));
const Perfil = React.lazy(() => import("./pages/Perfil/Perfil.jsx"));

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
        <Suspense fallback={<div className="loading">Carregando...</div>}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {/* --- Rotas Públicas --- */}
              <Route path="/" element={<motion.div {...pageTransition}><Home /></motion.div>} />
              <Route path="/login" element={<motion.div {...pageTransition}><Login /></motion.div>} />
              {/* 3. Adicione as rotas de Cadastro e Esqueci Senha */}
              <Route path="/cadastro" element={<motion.div {...pageTransition}><Cadastro /></motion.div>} />
              <Route path="/esqueci-minha-senha" element={<motion.div {...pageTransition}><EsqueciSenha /></motion.div>} />

              {/* --- Rotas Protegidas --- */}
              {/* 4. Envolva as rotas protegidas com o ProtectedRoute */}
              <Route 
                path="/blog" 
                element={
                  <ProtectedRoute>
                    <motion.div {...pageTransition}><Blog /></motion.div>
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/desafios" 
                element={
                  <ProtectedRoute>
                    <motion.div {...pageTransition}><ChallengeList /></motion.div>
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/desafios/:slug" 
                element={
                  <ProtectedRoute>
                    <motion.div {...pageTransition}><ChallengeDetail /></motion.div>
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/perfil" 
                element={
                  <ProtectedRoute>
                    <motion.div {...pageTransition}><Perfil /></motion.div>
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute>
                    <motion.div {...pageTransition}><Admin /></motion.div>
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;