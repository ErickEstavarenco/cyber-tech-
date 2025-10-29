import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importe todos os seus componentes de navegação
// ATENÇÃO: Corrigi o caminho de importação do Header para tentar resolver o erro.
// Se o seu arquivo for 'src/components/Header/Header.jsx', esta linha está correta:
import Header from './components/Header/Header'; 
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