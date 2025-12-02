import React, { useState } from "react";
import "./BlogPost.css"; // Importa o CSS PADRÃO

export default function Algoritmo() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [resultado, setResultado] = useState(null);

  const somar = () => setResultado(Number(a) + Number(b));

  return (
    <div className="blog-post-container">
      {/* Cabeçalho */}
      <header className="blog-post-header">
        <h1 className="blog-title">O que é um Algoritmo?</h1>
        <p className="blog-subtitle">Entendendo a lógica por trás da programação</p>
      </header>

      {/* Introdução */}
      <section>
        <p className="blog-text">
          Um <strong>algoritmo</strong> é um conjunto de <strong>instruções lógicas e ordenadas</strong> usadas para resolver
          um problema ou realizar uma tarefa. É a receita que o computador segue para chegar a um resultado.
        </p>

        <div className="blog-highlight-box">
          <h3 className="blog-highlight-title">Características de um bom algoritmo</h3>
          <ul className="blog-list">
            <li><strong>Lógico:</strong> Segue uma sequência coerente de passos.</li>
            <li><strong>Finito:</strong> Tem necessariamente um início e um fim.</li>
            <li><strong>Eficiente:</strong> Busca resolver o problema com o menor uso de recursos.</li>
          </ul>
        </div>
      </section>

      {/* Seção Visual */}
      <section>
        <h2 className="blog-section-title">Visualizando o Fluxo</h2>
        <p className="blog-text">
          Um fluxograma representa visualmente os passos de um algoritmo, utilizando formas geométricas para indicar ações e decisões.
        </p>
        <div className="blog-image-container">
          <img src="/fluxograma.png" alt="Fluxograma" className="blog-img" style={{maxWidth: '600px'}} />
          <span className="blog-img-caption">Figura 1: Exemplo de fluxo de decisão.</span>
        </div>
      </section>

      {/* Seção Prática */}
      <section>
        <h2 className="blog-section-title">Exemplo Prático: Soma</h2>
        <div className="blog-highlight-box">
          <p className="blog-text">Vamos simular um algoritmo simples de soma:</p>
          
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap', marginTop: '15px' }}>
            <input 
              type="number" 
              value={a} 
              onChange={(e) => setA(e.target.value)} 
              placeholder="Valor A"
              style={{padding: '8px', borderRadius: '4px', border: '1px solid #ccc'}}
            />
            <span>+</span>
            <input 
              type="number" 
              value={b} 
              onChange={(e) => setB(e.target.value)} 
              placeholder="Valor B"
              style={{padding: '8px', borderRadius: '4px', border: '1px solid #ccc'}}
            />
            <button 
              onClick={somar}
              style={{padding: '8px 16px', background: '#095e8b', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'}}
            >
              Calcular
            </button>
          </div>
          
          {resultado !== null && (
            <p style={{marginTop: '15px', fontSize: '1.2rem', fontWeight: 'bold', color: '#095e8b'}}>
              Resultado: {resultado}
            </p>
          )}
        </div>
      </section>

      {/* Navegação */}
      <nav className="blog-navigation">
        <a href="/blog" className="blog-nav-link">
          <img src="/flecha1.png" alt="" className="nav-icon" /> Voltar ao Blog
        </a>
        <a href="/variavel" className="blog-nav-link">
          Próximo <img src="/flecha2.png" alt="" className="nav-icon" />
        </a>
      </nav>
    </div>
  );
}