import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../../data/blog-posts.json';
// MUDANÇA: Usando CSS Modules
import styles from './Blog.module.css'; 

function Blog() {
  return (
    // MUDANÇA: Usando classes de CSS Modules
    <div className={`container ${styles.blogPage}`}>
      <h1 className={styles.pageTitle}>Nosso Blog</h1>
      <p className={styles.pageSubtitle}>Conteúdo sobre lógica e desenvolvimento de software.</p>
      
      <div className={styles.postsList}>
        {posts.map(post => (
          <div key={post.id} className={styles.postCard}>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            <Link to={`/blog/${post.slug}`} className={styles.readMoreLink}>
              Ler artigo completo
            </Link>
          </div>
        ))}
      </div>
      
      {posts.length === 0 && (
        <p>Ainda não há posts publicados.</p>
      )}
    </div>
  );
}

export default Blog;