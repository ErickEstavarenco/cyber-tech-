// src/App.jsx

import React, { Suspense, lazy } from 'react'; // Mantendo Suspense e lazy loading (Seu lado)
import { Routes, Route } from 'react-router-dom';
import './styles/globals.css'; 

// Layout Components
import Header from './components/Header.jsx'; 
import Footer from './components/Footer.jsx';
import Loading from './components/Loading.jsx'; // Componente de carregamento para Suspense (Seu lado)
import NotFound from './pages/NotFound/NotFound.jsx'; // Rota 404 (Seu lado)

// Auth Util (Do lado remoto)
import ProtectedRoute from './context/ProtectedRoute.jsx'; 

// Lazy loading das páginas para melhor performance (Combinando todas as páginas)
const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Blog = lazy(() => import('./pages/Blog/Blog.jsx'));
const ChallengeList = lazy(() => import('./pages/ChallengeList/ChallengeList.jsx'));
const ChallengeDetail = lazy(() => import('./pages/ChallengeDetail/ChallengeDetail.jsx'));
const Login = lazy(() => import('./pages/Login/Login.jsx')); // Também lazy
const Cadastro = lazy(() => import('./pages/Cadastro/Cadastro.jsx')); // Também lazy
const EsqueciSenha = lazy(() => import('./pages/EsqueciSenha/EsqueciSenha.jsx')); // Novo (Remoto)
const Admin = lazy(() => import('./admin/Admin.jsx')); // Novo (Remoto)


function App() {
  return (
    <div className="app-layout">
      <Header />
      <main>
        {/* Usando Suspense para garantir que as páginas carreguem suavemente */}
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Rotas Públicas Principais */}
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/desafios" element={<ChallengeList />} />
            <Route path="/desafios/:slug" element={<ChallengeDetail />} />
            
            {/* Rotas de Autenticação */}
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/esqueci-senha" element={<EsqueciSenha />} />

            {/* Rotas Protegidas (deve ser acessível apenas se o usuário estiver logado) */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } 
            />
            
            {/* Rota 404 - deve ser a última */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;