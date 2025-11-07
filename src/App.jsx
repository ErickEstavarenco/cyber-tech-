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
import Tipo from './pages/Blog/Tipo.jsx'
import Blog from './pages/Blog/Blog.jsx';
import ChallengeList from './pages/ChallengeList/ChallengeList.jsx';
import ChallengeDetail from './pages/ChallengeDetail/ChallengeDetail.jsx';
import Algoritmo from "./pages/Blog/Algoritmo";
import Variavel from "./pages/Blog/Variavel.jsx";
import Condicionais from "./pages/Blog/Condicionais.jsx";
import Funcoes from"./pages/Blog/Funcoes.jsx";
import Operacao from"./pages/Blog/Operacao.jsx";



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
          <Route path="/tipo" element={<Tipo />}/>
          <Route path="/blog" element={<Blog />} />
          <Route path="/algoritmo" element={<Algoritmo />} />
          <Route path="/variavel" element={<Variavel />} />
          <Route path="/condicionais" element={<Condicionais />} />
          <Route path="/funcoes" element={<Funcoes />} />
          <Route path="/operacao" element={<Operacao />} />

          
         

          
          <Route path="/desafios" element={<ChallengeList />} />
          <Route path="/desafios/:slug" element={<ChallengeDetail />} />
        </Routes>
      </main>

      <Footer /> {/* 2. RENDERIZA O FOOTER AQUI */}
    </div>
  );
}

export default App;