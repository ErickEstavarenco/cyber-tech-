import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 1. Importe os componentes
import Header from './components/Header';
import Home from './pages/Home/Home'; 
import Login from './pages/Login/Login'; 
import Cadastro from './pages/Cadastro/Cadastro'; // <-- ADICIONE ESTA LINHA

// import Footer from './components/Footer'; 

function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="container">
        <Routes>
          {/* Rotas principais */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} /> {/* <-- ADICIONE ESTA LINHA */}

          {/* Rotas de placeholder para o menu funcionar */}
          <Route path="/blog" element={<h1>Página do Blog</h1>} />
          <Route path="/desafios" element={<h1>Página de Desafios</h1>} />
        </Routes>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;