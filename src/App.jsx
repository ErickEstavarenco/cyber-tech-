import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 1. Importe os componentes que acabamos de criar
import Header from './components/Header';
import Home from './pages/Home';
// import Footer from './components/Footer'; // (Ainda não criamos)

function App() {
  return (
    <div className="app-container">
      {/* 2. Adicione o Header */}
      <Header />

      <main className="container">
        <Routes>
          {/* 3. Mude a rota principal para usar o componente Home */}
          <Route path="/" element={<Home />} />

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