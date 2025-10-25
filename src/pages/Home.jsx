import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blog-posts.json';
import challenges from '../data/challenges.json';
import './Home.css'; // Importa o Home.css

function Home() { // O nome é Home
  const firstPost = blogPosts[0];
  const challengeList = challenges.slice(0, 3);

  return (
    <div className="home-page">
      <section className="home-section">
        <h2 className="section-title">Aprenda programação</h2>
        <p className="section-subtitle">Conceitos básicos de lógica de programação para inciciantes</p>
        <div className="blog-card">
          <div className="card-icon-area"><span className="icon-placeholder">📄</span></div>
          <div className="card-content-area">
            <h3>{firstPost.title}</h3>
            <p>{firstPost.summary}</p>
            <Link to={`/blog/${firstPost.slug}`} className="card-button">Ler mais</Link>
          </div>
        </div>
      </section>
      <section className="home-section">
        <h2 className="section-title">Desafios práticos</h2>
        <p className="section-subtitle">Experimente o funcionamento de if/else por meio de exercícios</p>
        <div className="challenge-grid">
          {challengeList.map(challenge => (
            <Link key={challenge.id} to={`/desafios/${challenge.slug}`} className={`challenge-card ${challenge.color}`}>
              {challenge.icon === 'person' && <span className="icon-placeholder large">🧑</span>}
              {challenge.icon === 'food' && <span className="icon-placeholder large">🍳</span>}
              {challenge.icon === 'sun-moon' && <span className="icon-placeholder large">☀️</span>}
              <h4>{challenge.title}</h4>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Home; // Exporta o Home