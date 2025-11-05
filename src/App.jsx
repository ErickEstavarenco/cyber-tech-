// src/App.jsx

import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/globals.css'; 

// Componentes principais
import Header from './components/Header.jsx'; 
import Footer from './components/Footer.jsx';
import Loading from './components/Loading.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

// Lazy loading das páginas para melhor performance
const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Login = lazy(() => import('./pages/Login/Login.jsx'));
const Cadastro = lazy(() => import('./pages/Cadastro/Cadastro.jsx'));
const Blog = lazy(() => import('./pages/Blog/Blog.jsx'));
const ChallengeList = lazy(() => import('./pages/ChallengeList/ChallengeList.jsx'));
const ChallengeDetail = lazy(() => import('./pages/ChallengeDetail/ChallengeDetail.jsx'));


function App() {
  return (
    <div className="app-layout">
      <Header />

      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Rotas principais */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />

            {/* Rotas de navegação */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/desafios" element={<ChallengeList />} />
            <Route path="/desafios/:slug" element={<ChallengeDetail />} />
            
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