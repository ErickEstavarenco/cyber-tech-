// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/globals.css'; 

// Componentes principais
import Header from './components/Header.jsx'; 
import Footer from './components/Footer.jsx'; // 1. IMPORTA O FOOTER

// Páginas
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Desafios from './pages/Desafios/Desafios'; // ✅ Importação correta
import ChallengeList from './pages/ChallengeList/ChallengeList.jsx';
import ChallengeDetail from './pages/ChallengeDetail/ChallengeDetail.jsx';


function App() {
  return (
    <div className="app-layout">
      <Header />

      <main>
        <Routes>
          {/* Rotas principais */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          {/* Rotas de navegação */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/desafios" element={<ChallengeList />} />
          <Route path="/desafios" element={<ChallengeDetail />} />
        </Routes>
      </main>

      <Footer /> {/* 2. RENDERIZA O FOOTER AQUI */}
    </div>
  );
}

export default App;