import React from "react";
import "./BlogPost.css";

const Tipo = () => {
  return (
    <div className="blog-post-container">
      <header className="blog-post-header">
        <h1 className="blog-title">Tipos de Dados</h1>
        <p className="blog-subtitle">Fundamentos essenciais da linguagem Python</p>
      </header>

      <section>
        <p className="blog-text">
          Na programação, os tipos de dados definem a natureza da informação que uma variável pode armazenar. 
          Em <strong>Python</strong>, os tipos fundamentais incluem <strong>Inteiros, Pontos Flutuantes, Strings e Booleanos</strong>.
        </p>
      </section>

      <section>
        <h2 className="blog-section-title">Inteiros (int)</h2>
        <p className="blog-text">
          Números inteiros, positivos ou negativos, sem casas decimais. Em Python, sua dimensão é limitada apenas pela memória.
        </p>
        <div className="blog-highlight-box">
          <div className="blog-image-container">
            <img src="/inteiros.png" alt="Exemplo Inteiro" className="blog-img" />
          </div>
          <div className="blog-image-container">
            <img src="/inteirossaida.png" alt="Saída Inteiro" className="blog-img" />
            <span className="blog-img-caption">Saída do código acima.</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="blog-section-title">Pontos Flutuantes (float)</h2>
        <p className="blog-text">
          Números que contêm parte fracionária (casas decimais). Essenciais para precisão matemática.
        </p>
        <div className="blog-highlight-box">
          <div className="blog-image-container">
            <img src="/float.png" alt="Exemplo Float" className="blog-img" />
          </div>
          <div className="blog-image-container">
            <img src="/floatsaida.png" alt="Saída Float" className="blog-img" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="blog-section-title">Cadeias de Caracteres (str)</h2>
        <p className="blog-text">
          Sequências de caracteres usadas para representar texto. Podem ser delimitadas por aspas simples ou duplas.
        </p>
        <div className="blog-highlight-box">
          <div className="blog-image-container">
            <img src="/string.png" alt="Exemplo String" className="blog-img" />
          </div>
          <div className="blog-image-container">
            <img src="/stringsaida.png" alt="Saída String" className="blog-img" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="blog-section-title">Booleanos (bool)</h2>
        <p className="blog-text">
          Representam valores lógicos de verdade: <strong>True</strong> ou <strong>False</strong>. Fundamentais para controle de fluxo.
        </p>
        <div className="blog-highlight-box">
          <div className="blog-image-container">
            <img src="/bool.png" alt="Exemplo Booleano" className="blog-img" />
          </div>
          <div className="blog-image-container">
            <img src="/boolsaida.png" alt="Saída Booleano" className="blog-img" />
          </div>
        </div>
      </section>

      <nav className="blog-navigation">
        <a href="/variavel" className="blog-nav-link">
          <img src="/flecha1.png" alt="" className="nav-icon" /> Anterior
        </a>
        <a href="/condicionais" className="blog-nav-link">
          Próximo <img src="/flecha2.png" alt="" className="nav-icon" />
        </a>
      </nav>
    </div>
  );
};

export default Tipo;