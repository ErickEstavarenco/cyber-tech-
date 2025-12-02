import React from "react";
import "./BlogPost.css";

const Operacao = () => {
  return (
    <div className="blog-post-container">
      <header className="blog-post-header">
        <h1 className="blog-title">Operadores</h1>
        <p className="blog-subtitle">A matemática e a lógica por trás do código</p>
      </header>

      <section>
        <p className="blog-text">
          Operadores são símbolos especiais que realizam cálculos, comparações e operações lógicas. 
          Eles são a base para construir expressões complexas em qualquer linguagem de programação.
        </p>
      </section>

      {/* Operadores Aritméticos */}
      <section>
        <h2 className="blog-section-title">1. Operadores Aritméticos</h2>
        <p className="blog-text">Usados para executar operações matemáticas básicas.</p>
        
        <div className="blog-highlight-box">
          <ul className="blog-list">
            <li><strong>+</strong> (Adição)</li>
            <li><strong>-</strong> (Subtração)</li>
            <li><strong>*</strong> (Multiplicação)</li>
            <li><strong>/</strong> (Divisão)</li>
            <li><strong>//</strong> (Divisão inteira)</li>
            <li><strong>%</strong> (Módulo - Resto da divisão)</li>
            <li><strong>**</strong> (Exponenciação)</li>
          </ul>
          
          <div className="blog-image-container">
             <img src="/operacaoex1.png" alt="Exemplo Aritmético" className="blog-img" />
             <span className="blog-img-caption">Exemplo de soma simples em Python.</span>
          </div>
        </div>
      </section>

      {/* Operadores de Comparação */}
      <section>
        <h2 className="blog-section-title">2. Operadores de Comparação</h2>
        <p className="blog-text">Comparam dois valores e retornam Verdadeiro (True) ou Falso (False).</p>
        
        <div className="blog-highlight-box">
          <ul className="blog-list">
            <li><strong>==</strong> (Igual a)</li>
            <li><strong>!=</strong> (Diferente de)</li>
            <li><strong>&gt;</strong> (Maior que)</li>
            <li><strong>&lt;</strong> (Menor que)</li>
            <li><strong>&gt;=</strong> (Maior ou igual a)</li>
            <li><strong>&lt;=</strong> (Menor ou igual a)</li>
          </ul>

          <div className="blog-image-container">
             <img src="/operacaoex2.png" alt="Exemplo Comparação" className="blog-img" />
          </div>
        </div>
      </section>

      {/* Operadores Lógicos */}
      <section>
        <h2 className="blog-section-title">3. Operadores Lógicos</h2>
        <p className="blog-text">Usados para combinar múltiplas condições.</p>
        
        <div className="blog-highlight-box">
          <ul className="blog-list">
            <li><strong>and</strong>: Retorna True se <em>todas</em> as condições forem verdadeiras.</li>
            <li><strong>or</strong>: Retorna True se <em>pelo menos uma</em> condição for verdadeira.</li>
            <li><strong>not</strong>: Inverte o resultado (True vira False e vice-versa).</li>
          </ul>

          <div className="blog-image-container">
             <img src="/operacaoex3.png" alt="Exemplo Lógico" className="blog-img" />
          </div>
        </div>
      </section>

      <nav className="blog-navigation">
        <a href="/funcoes" className="blog-nav-link">
          <img src="/flecha1.png" alt="" className="nav-icon" /> Anterior
        </a>
        <a href="/blog" className="blog-nav-link">
          Voltar ao Início <img src="/flecha2.png" alt="" className="nav-icon" />
        </a>
      </nav>
    </div>
  );
};

export default Operacao;