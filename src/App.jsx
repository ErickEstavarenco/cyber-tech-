// src/App.jsx
import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Componentes Globais
import Header from "./components/Header";
import Footer from "./components/Footer";

// Lazy Loading das Páginas
const Home = React.lazy(() => import("./pages/Home/Home"));
const Blog = React.lazy(() => import("./pages/Blog/Blog"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const Admin = React.lazy(() => import("./admin/Admin"));
const ChallengeList = React.lazy(() => import("./pages/ChallengeList/ChallengeList"));
const ChallengeDetail = React.lazy(() => import("./pages/ChallengeDetail/ChallengeDetail"));
// Import explícito incluindo extensão para evitar problema de resolução
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
              <Route path="/" element={<motion.div {...pageTransition}><Home /></motion.div>} />
              <Route path="/blog" element={<motion.div {...pageTransition}><Blog /></motion.div>} />
              <Route path="/desafios" element={<motion.div {...pageTransition}><ChallengeList /></motion.div>} />
              <Route path="/desafios/:slug" element={<motion.div {...pageTransition}><ChallengeDetail /></motion.div>} />
              <Route path="/login" element={<motion.div {...pageTransition}><Login /></motion.div>} />
              <Route path="/perfil" element={<motion.div {...pageTransition}><Perfil /></motion.div>} />
              <Route path="/admin" element={<motion.div {...pageTransition}><Admin /></motion.div>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
