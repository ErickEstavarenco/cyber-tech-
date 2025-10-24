import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Vamos importar nossos componentes e páginas (eles ainda serão criados)
// import Header from './components/Header';
// import Home from './pages/Home';

function App() {
  // Removemos todo o código de exemplo do Vite
  return (
    <div className="app-container">
      {/* <Header /> */}
      
      {/* 'container' é uma classe que vamos criar no globals.css */}
      <main className="container">
        <Routes>
          {/* Rota temporária para vermos algo na tela */}
          <Route path="/" element={<h1>Olá, Projeto! Página funcionando.</h1>} />
          
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </main>
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;