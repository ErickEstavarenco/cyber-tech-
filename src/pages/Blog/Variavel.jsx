import React from "react";
// MUDANÇA: Importando o CSS global do blog
import "./Blog.css"; 

// MUDANÇA: Usando 'export default'
export default function Variavel() {
  return (
    <div className="container blog-page">
      <h1 className="page-title">Variáveis</h1>
      <br />

      {/* MUDANÇA: Usando classes de string (className="variavel") */}
      <div className="variavel">
        <p>
          Uma <strong>variável</strong> é como uma <strong>caixa nomeada</strong> dentro da
          memória do computador usada para <strong>armazenar informações temporariamente</strong>.
        </p>
        <p>
          Essas informações podem ser <strong>números, textos, valores lógicos</strong> ou outros tipos de dados.
        </p>
        <p>
          Em programação, as variáveis são essenciais porque permitem <strong>guardar e manipular dados</strong>,
          tornando o código dinâmico e interativo.
        </p>
        <br />
        <strong>Exemplo em Python:</strong>
        <img src="/variavelex1.png" alt="Imagem sobre Variável" className="pos-img" />
        <p>- A variável "nome" guarda um <strong>texto</strong> (“João”).</p>
        <p>- A variável "idade" guarda um <strong>número inteiro</strong> (25).</p>
      </div>

      <a href="/blog" className="back-link">
        ← Voltar ao Blog
      </a>
    </div>
  );
}