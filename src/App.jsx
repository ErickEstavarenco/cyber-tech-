import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './styles/globals.css'; 

// Componentes de Layout
import Header from './components/Header.jsx'; 
import Footer from './components/Footer.jsx'; 

// Páginas Principais e do Blog
import Home from './pages/Home/Home.jsx';
import Blog from './pages/Blog/Blog.jsx';
import ChallengeList from './pages/ChallengeList/ChallengeList.jsx';
import Algoritmo from "./pages/Blog/Algoritmo";
import Variavel from "./pages/Blog/Variavel.jsx";
import Condicionais from "./pages/Blog/Condicionais.jsx";
import Funcoes from "./pages/Blog/Funcoes.jsx";
import Operacao from "./pages/Blog/Operacao.jsx";

// Páginas de Autenticação
import Login from './pages/Login/Login.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import EsqueciSenha from './pages/EsqueciSenha/EsqueciSenha.jsx';
import Perfil from './pages/Perfil/Perfil.jsx';

// Páginas de Admin
import Admin from './admin/Admin.jsx';
import Newblog from './admin/Subpagina/Newblog.jsx';
import Comentarios from './admin/Subpagina/Comentarios.jsx';
import Notas from './admin/Subpagina/Notas.jsx';

// Protetores de Rota
import ProtectedRoute from './context/ProtectedRoute.jsx'; // Para usuários logados
import ProtectedAdminRoute from './context/ProtectedAdminRoute.jsx'; // Para admins

// Páginas de Desafio
import Desafio1 from './pages/Desafios/Desafio1.jsx';
import Desafio2 from './pages/Desafios/Desafio2.jsx';
import Desafio3 from './pages/Desafios/Desafio3.jsx';
import Desafio4 from './pages/Desafios/Desafio4.jsx';

function App() {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: { duration: 0.45, ease: "easeOut" },
  };

  return (
    <div className="app-layout">
      <Header />
      <main>
        <Routes location={location} key={location.pathname}>
          
          {/* --- Rotas Públicas --- */}
          {/* Somente Home e as páginas de autenticação são públicas agora */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/esqueci-senha" element={<EsqueciSenha />} />

          
          {/* --- Rotas Protegidas para USUÁRIOS LOGADOS --- */}
          {/* /blog, /desafios e /perfil agora exigem login */}
          <Route element={<ProtectedRoute />}>
            <Route path="/blog" element={<Blog />} />
            <Route path="/algoritmo" element={<Algoritmo />} />
            <Route path="/variavel" element={<Variavel />} />
            <Route path="/condicionais" element={<Condicionais />} />
            <Route path="/funcoes" element={<Funcoes />} />
            <Route path="/operacao" element={<Operacao />} />
            
            <Route path="/desafios" element={<ChallengeList />} />
            <Route path="/desafios/desafio1" element={<Desafio1 />} />
            <Route path="/desafios/desafio2" element={<Desafio2 />} />
            <Route path="/desafios/desafio3" element={<Desafio3 />} />
            <Route path="/desafios/desafio4" element={<Desafio4 />} />

            <Route path="/perfil" element={<Perfil />} />
          </Route>

          {/* --- Rotas Protegidas de ADMIN --- */}
          {/* Esta seção permanece a mesma */}
          <Route element={<ProtectedAdminRoute />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/new-blog" element={<Newblog />} />
            <Route path="/admin/comentarios" element={<Comentarios />} />
            <Route path="/admin/notas" element={<Notas />} />
          </Route>
          

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;