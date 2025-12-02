import React from "react";
import "./BlogPost.css"; // Importa o estilo padrão

export default function Condicionais() {
  return (
    <div className="blog-post-container">
      {/* Cabeçalho */}
      <header className="blog-post-header">
        <h1 className="blog-title">Condicionais: if, elif e else</h1>
        <p className="blog-subtitle">Ensinando o computador a tomar decisões</p>
      </header>

      {/* Introdução */}
      <section>
        <p className="blog-text">
          Uma das habilidades mais fundamentais na programação é a capacidade de <strong>tomar decisões</strong>. 
          As <strong>estruturas condicionais</strong> são os blocos de construção que permitem que seu código "pense" 
          e execute ações diferentes dependendo da situação.
        </p>

        <div className="blog-highlight-box">
          <h3 className="blog-highlight-title">Como o computador pensa?</h3>
          <p className="blog-text">
            Imagine que um computador só entende <strong>sim</strong> (Verdadeiro) ou <strong>não</strong> (Falso). 
            Toda condição é transformada em uma pergunta binária. Por exemplo: <em>"A idade é maior que 18?"</em>. 
            É com base nessa <strong>lógica booleana</strong> que as condicionais funcionam.
          </p>
        </div>
      </section>

      {/* Estruturas */}
      <section>
        <h2 className="blog-section-title">A Estrutura 'if'</h2>
        <p className="blog-text">
          O <strong>if</strong> (se) é a estrutura mais simples. Ele executa um bloco de código somente se a condição testada for verdadeira.
        </p>

        <h2 className="blog-section-title">A Alternativa 'else'</h2>
        <p className="blog-text">
          O <strong>else</strong> (senão) define o que fazer caso a condição do <em>if</em> seja falsa. É o plano B do seu código.
        </p>

        <h2 className="blog-section-title">Múltiplas Opções com 'elif'</h2>
        <p className="blog-text">
          Para testar várias condições em sequência, usamos <strong>elif</strong> (senão se). O Python verifica cada <em>elif</em> 
          apenas se as condições anteriores falharem.
        </p>
      </section>

      {/* Exemplo Visual */}
      <section>
        <h2 className="blog-section-title">Exemplo Prático</h2>
        <p className="blog-text">
          Abaixo, um exemplo de código que verifica a idade de uma pessoa para determinar sua situação de voto ou maioridade.
        </p>
        
        <div className="blog-image-container">
          <img 
            src="/condex1.png" 
            alt="Exemplo de código com condicionais" 
            className="blog-img" 
          />
          <span className="blog-img-caption">Lógica de verificação de idade em Python.</span>
        </div>
        
        <div className="blog-image-container">
           <img 
            src="/condicionais.png" 
            alt="Fluxograma de condicionais" 
            className="blog-img"
            style={{maxWidth: '600px'}} 
          />
           <span className="blog-img-caption">Fluxo de decisão visual.</span>
        </div>
      </section>

      {/* Navegação */}
      <nav className="blog-navigation">
        <a href="/tipo" className="blog-nav-link">
          <img src="/flecha1.png" alt="" className="nav-icon" /> Anterior
        </a>
        <a href="/funcoes" className="blog-nav-link">
          Próximo: Funções <img src="/flecha2.png" alt="" className="nav-icon" />
        </a>
      </nav>
    </div>
  );
}