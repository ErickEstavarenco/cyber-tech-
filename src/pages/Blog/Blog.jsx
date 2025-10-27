import React from 'react';
import { Link } from 'react-router-dom';

// Importa a lista COMPLETA de posts
import posts from '../../data/blog-posts.json';

// Importa o CSS da página (vamos criar logo abaixo)
import './Blog.css'; 

function Blog() {
  return (
    <div className="blog-page">
      <h1 className="page-title">Nosso Blog</h1>
      <p className="page-subtitle">Conteúdo sobre lógica e desenvolvimento de software.</p>
      
      <div className="posts-list">
        {/* Faz um loop em TODOS os posts */}
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            <Link to={`/blog/${post.slug}`} className="read-more-link">
              Ler artigo completo
            </Link>
          </div>
        ))}
      </div>
      
      {/* Mensagem se não houver posts */}
      {posts.length === 0 && (
        <p>Ainda não há posts publicados.</p>
      )}
    </div>
  );
}

export default Blog;