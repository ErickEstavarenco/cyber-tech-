import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 1. Importe os componentes
import Header from './components/Header';
import Home from './pages/Home/Home'; 
import Login from './pages/Login/Login'; // <-- IMPORTAÇÃO CORRETA DA NOVA PASTA
import Cadastro from './pages/Cadastro/Cadastro'; 

// import Footer from './components/Footer'; 

function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="container">
        <Routes>
          {/* Rotas principais */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> {/* <-- ROTA AGORA APONTA PARA O COMPONENTE Login.jsx */}
          <Route path="/cadastro" element={<Cadastro />} />

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