// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/globals.css'; 

// --- Imports Combinados ---

// Imports do seu HEAD (atuais)
import Header from './components/Header.jsx'; 
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import Footer from './components/Footer.jsx'; 

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
          {/* Suas Rotas (do HEAD) */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          {/* Novas Rotas (do INCOMING) */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/desafios" element={<ChallengeList />} />
          <Route path="/desafios/:slug" element={<ChallengeDetail />} />
        </Routes>
      </main>
      <Footer /> {/* Mantenha o seu Footer (do HEAD) */}
    </div>
  );
}

export default App;