// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/globals.css'; 

// CORREÇÃO: O caminho para o Header não tem a pasta extra "Header"
import Header from './components/Header.jsx'; 

// Caminhos para as Páginas
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import Blog from './pages/Blog/Blog.jsx';
import ChallengeList from './pages/ChallengeList/ChallengeList.jsx';
import ChallengeDetail from './pages/ChallengeDetail/ChallengeDetail.jsx';


function App() {
  return (
    <div className="app-layout">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/desafios" element={<ChallengeList />} />
          <Route path="/desafios/:slug" element={<ChallengeDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;