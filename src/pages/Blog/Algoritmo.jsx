import React, { useState } from "react";
// MUDANÇA: Importando o CSS global do blog
import "./Blog.css"; 

// MUDANÇA: Usando 'export default'
export default function Algoritmo() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [resultado, setResultado] = useState(null);

  const somar = () => {
    setResultado(Number(a) + Number(b));
  };

  return (
    <div className="container blog-page">
      <h1 className="page-title">Algoritmo</h1> <br />

      {/* MUDANÇA: Usando classes de string (className="pense") */}
      <div className="pense">
        <p>
          Um <strong>algoritmo</strong> é um conjunto de <strong>instruções lógicas e ordenadas</strong> usadas para resolver
          um problema ou realizar uma tarefa.
        </p>
         <br />
        <p>Um bom algoritmo deve ser:</p>
        <p><strong>- Lógico:</strong> segue uma sequência coerente.</p>
        <p><strong>- Finitivo:</strong> tem um início e um fim.</p>
        <p><strong>- Eficiente:</strong> resolve o problema da melhor forma.</p>
        <br />
        <img src="/algex1.png" alt="Exemplo de Algoritmo" className="post-img" />
      </div>

      {/* ... (Restante do seu conteúdo, como o somador) ... */}

      <a href="/blog" className="back-link">
        ← Voltar ao Blog
      </a>
    </div>
  );
}