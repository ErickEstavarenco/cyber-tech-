import React from "react";
import "./BlogPost.css"; // Reutiliza o mesmo CSS

export default function Variavel() {
  return (
    <div className="blog-post-container">
      <header className="blog-post-header">
        <h1 className="blog-title">Variáveis</h1>
        <p className="blog-subtitle">Como o computador armazena informações</p>
      </header>

      <section>
        <h2 className="blog-section-title">O que é uma variável?</h2>
        <p className="blog-text">
          Uma <strong>variável</strong> é como uma <strong>caixa etiquetada</strong> na memória do computador, 
          usada para armazenar dados temporariamente. Esses dados podem ser alterados durante a execução do programa.
        </p>

        <div className="blog-highlight-box">
          <h3 className="blog-highlight-title">Analogia da Caixa</h3>
          <p className="blog-text">
            Imagine que você está organizando uma mudança. Você pega uma caixa e escreve "Livros" nela. 
            No computador:
          </p>
          <ul className="blog-list">
            <li>A <strong>Caixa</strong> é o espaço na memória.</li>
            <li>A <strong>Etiqueta "Livros"</strong> é o nome da variável.</li>
            <li>O <strong>Conteúdo</strong> são os dados guardados.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="blog-section-title">Exemplo em Python</h2>
        <p className="blog-text">Veja como declaramos variáveis na prática:</p>
        
        <div className="blog-image-container">
          <img src="/variavelex1.png" alt="Código Python" className="blog-img" />
          <span className="blog-img-caption">Declarando strings e inteiros.</span>
        </div>

        <p className="blog-text">
          A imagem acima ilustra que a variável <code>nome</code> recebe o texto "João" e a variável 
          <code>idade</code> recebe o número 25.
        </p>
      </section>

      <nav className="blog-navigation">
        <a href="/algoritmo" className="blog-nav-link">
          <img src="/flecha1.png" alt="" className="nav-icon" /> Anterior
        </a>
        <a href="/tipo" className="blog-nav-link">
          Próximo: Tipos de Dados <img src="/flecha2.png" alt="" className="nav-icon" />
        </a>
      </nav>
    </div>
  );
}