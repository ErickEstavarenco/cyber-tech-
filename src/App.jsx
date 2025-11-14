// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import "@/styles/globals.css";

// Layout
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

// Páginas abertas
import Home from "@/pages/Home/Home.jsx";
import Login from "@/pages/Login/Login.jsx";
import Cadastro from "@/pages/Cadastro/Cadastro.jsx";
import EsqueciSenha from "@/pages/EsqueciSenha/EsqueciSenha.jsx";

// Protetores
import ProtectedRoute from "@/context/ProtectedRoute.jsx";
import ProtectedAdminRoute from "@/context/ProtectedAdminRoute.jsx";

// Blog
import Blog from "@/pages/Blog/Blog.jsx";
import Algoritmo from "@/pages/Blog/Algoritmo.jsx";
import Variavel from "@/pages/Blog/Variavel.jsx";
import Condicionais from "@/pages/Blog/Condicionais.jsx";
import Funcoes from "@/pages/Blog/Funcoes.jsx";
import Operacao from "@/pages/Blog/Operacao.jsx";

// Desafios
import ChallengeList from "@/pages/ChallengeList/ChallengeList.jsx";
import Desafio1 from "@/pages/Desafios/Desafio1.jsx";
import Desafio2 from "@/pages/Desafios/Desafio2.jsx";
import Desafio3 from "@/pages/Desafios/Desafio3.jsx";
import Desafio4 from "@/pages/Desafios/Desafio4.jsx";

// Perfil
import Perfil from "@/pages/Perfil/Perfil.jsx";

// Admin
import Admin from "@/admin/Admin.jsx";
import Newblog from "@/admin/Subpagina/Newblog.jsx";
import Comentarios from "@/admin/Subpagina/Comentarios.jsx";
import Notas from "@/admin/Subpagina/Notas.jsx";

function App() {
  return (
    <div className="app-layout">
      <Header />

      <main>
        <Routes>

          {/* Rotas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/esqueci-senha" element={<EsqueciSenha />} />

          {/* Usuários logados */}
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

          {/* Admin */}
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
