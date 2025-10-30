import React from 'react';
import { Routes, Route } from 'react-router-dom';

// CORREÇÃO ESSENCIAL DO ERRO: 
// O caminho foi alterado de './components/Header/Header' para './components/Header.jsx'
import Header from './components/Header.jsx'; 
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'; 
import Cadastro from './pages/Cadastro/Cadastro'; 
import Blog from './pages/Blog/Blog';          

function App() {
  return (
    // A classe 'app-container' é responsável pelo gradiente azul global (definido em globals.css)
    <div className="app-container"> 

      <Header />

      <main>
        <Routes>
          {/* Rotas principais */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/blog" element={<Blog />} />

          {/* Rotas de Desafios (placeholder por enquanto) */}
          <Route path="/desafios" element={<h1>Página de Desafios</h1>} />
        </Routes>
      </main>

    </div>
  );
}

export default App;