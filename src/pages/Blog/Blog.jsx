import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import posts from '../../data/blog-posts.json';
// MUDANÇA: Importando o CSS global do blog
import './Blog.css'; 

function Blog() {
  const [mostrarMais, setMostrarMais] = useState(false);

  return (
    // MUDANÇA: Usando classes de string (className="blog-page")
    <div className="container blog-page"> 
      <h1 className="page-title">Blog</h1>
      <br />

      <div className="posts-container">
        {/* Card 1: Algoritmo */}
        <div className="post-card">
          {/* MUDANÇA: Link corrigido para /blog/algoritmo */}
          <Link to="/blog/algoritmo" className="read-more-link">
            <h2>O que é um Algoritmo?</h2>
            <img src="/algoritmo.png" alt="Imagem sobre Algoritmos" className="post-img" />
            <p>Do pensamento à ação: o poder dos algoritmos</p>
          </Link>
        </div>

        {/* Card 2: Variáveis */}
        <div className="post-card">
          {/* MUDANÇA: Link corrigido para /blog/variavel */}
          <Link to="/blog/variavel" className="read-more-link">
            <h2>Variáveis</h2>
            <img src="/variaveis.png" alt="Imagem sobre Variável" className="post-img" />
            <p>Entenda onde os dados vivem dentro do computador</p>
          </Link>
        </div>
        
        {/* Card 3: Tipos de Dados (Exemplo) */}
        <div className="post-card">
          {/* MUDANÇA: Link corrigido para /blog/tipos-de-dados */}
          <Link to="/blog/tipos-de-dados" className="read-more-link">
            <h2>Tipos de Dados</h2>
            <img src="/tipodedados.png" alt="Imagem sobre Tipos de Dados" className="post-img" />
            <p>Conheça os diferentes tipos de informação que um computador entende.</p>
          </Link>
        </div>
      </div>

      {/* Seção "Ver Mais" */}
      <div className="ver-mais-container">
        <button
          className="btn-ver-mais"
          onClick={() => setMostrarMais(!mostrarMais)}
        >
          {mostrarMais ? 'Ver menos ▲' : 'Ver mais curiosidades ▼'}
        </button>

        {mostrarMais && (
          <div className="conteudo-extra">
            <strong>Sabia que Python é usada em grandes empresas?</strong>
            <p>Empresas como Google, Instagram, Netflix, Spotify e NASA usam Python em partes de seus sistemas.</p>
          </div>
        )}
      </div>

      {posts.length === 0 && <p>Ainda não há posts publicados.</p>}
    </div>
  );
}

// MUDANÇA: Garantindo o export default
export default Blog;