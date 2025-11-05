// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/globals.css";

// Layout
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// --- Páginas principais ---
import Home from "./pages/Home/Home.jsx";
import Blog from "./pages/Blog/Blog.jsx";

// --- Posts do Blog ---
import Variavel from "./pages/Blog/Variavel.jsx";
import Algoritmo from "./pages/Blog/Algoritmo.jsx";
import Tipo from "./pages/Blog/Tipo.jsx";

// --- Desafios ---
import ChallengeList from "./pages/ChallengeList/ChallengeList.jsx";
import ChallengeDetail from "./pages/ChallengeDetail/ChallengeDetail.jsx";

// --- Autenticação ---
import Login from "./pages/Login/Login.jsx";
import Cadastro from "./pages/Cadastro/Cadastro.jsx";
import EsqueciSenha from "./pages/EsqueciSenha/EsqueciSenha.jsx";

// --- Administração ---
import Admin from "./admin/Admin.jsx";
import ProtectedRoute from "./context/ProtectedRoute.jsx";

// --- Página 404 ---
function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "80px" }}>
      <h1>404</h1>
      <p>Página não encontrada 😢</p>
    </div>
  );
}


function App() {
  return (
    <div className="app-layout">
      <Header />
      <main>
        <Routes>
          {/* --- Páginas principais --- */}
          <Route path="/" element={<Home />} />
          
          {/* --- Blog --- */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/variavel" element={<Variavel />} />
          <Route path="/blog/algoritmo" element={<Algoritmo />} />
          <Route path="/blog/tipos-de-dados" element={<Tipo />} />
          
          {/* Rotas alternativas para compatibilidade */}
          <Route path="/tipo" element={<Tipo />} />
          <Route path="/algoritmo" element={<Algoritmo />} />
          <Route path="/variavel" element={<Variavel />} />

          {/* --- Desafios --- */}
          <Route path="/desafios" element={<ChallengeList />} />
          <Route path="/desafios/:slug" element={<ChallengeDetail />} />

          {/* --- Autenticação --- */}
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/esqueci-senha" element={<EsqueciSenha />} />

          {/* --- Administração (rota protegida) --- */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />

          {/* --- Rota 404 --- */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
