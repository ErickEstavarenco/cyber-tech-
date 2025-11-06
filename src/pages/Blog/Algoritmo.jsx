import React, { useState } from "react";
import "./Blog.css";

const Algoritmo = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [resultado, setResultado] = useState(null);

  const somar = () => {
    setResultado(Number(a) + Number(b));
  };

  return (
    <div className="blog-page">
      <h1 className="page-title">Algoritmo</h1> <br></br>
      <div className="pense">
        <p>
          Um <strong>algoritmo</strong> é um conjunto de{" "}
          <strong>instruções lógicas e ordenadas</strong> usadas para resolver
          um problema ou realizar uma tarefa. Ele define{" "}
          <strong>passo a passo o que deve ser feito</strong> para alcançar um
          resultado. Os algoritmos são a base da{" "}
          <strong>programação</strong>, pois indicam ao computador as ações a
          serem executadas de forma clara e precisa.
        </p>
         <br></br>
        <p>Um bom algoritmo deve ser:</p>
        <p>
          <strong>- Lógico:</strong> segue uma sequência coerente de passos.
        </p>
        <p>
          <strong>- Finitivo:</strong> tem um início e um fim.
        </p>
        <p>
          <strong>- Eficiente:</strong> busca resolver o problema com o menor
          número possível de passos.
        </p>

        <div className="codigo-algoritmo">
          <div className="codigo-exemplo">
            <h4>Exemplo de algoritmo em Python:</h4>
            <img
          src="/algex1.png"
          alt="Imagem sobre Exemplo"
          className="pos-img"
        />
            <br />
            
    <div className="descricao-exemplo">
      <p>Esse pequeno programa segue o algoritmo:</p>
      <p>- Pegue dois números (A e B).</p>
      <p>- Some os dois números.</p>
      <p>- Mostre o resultado.</p>
    </div>
          </div>

          <div className="algoritmo-form">
            <h4>Teste um algoritmo simples:</h4>
            <div className="algoritmo-box">
              <label>
                A:{" "}
                <input
                  type="number"
                  value={a}
                  onChange={(e) => setA(e.target.value)}
                />
              </label>
              <label>
                B:{" "}
                <input
                  type="number"
                  value={b}
                  onChange={(e) => setB(e.target.value)}
                />
              </label>
              <button onClick={somar}>Somar</button>

              {resultado !== null && (
                <p className="resultado">
                  Resultado: <strong>{resultado}</strong>
                </p>
              )}
            </div>
          </div>
        </div>

        <img
          src="/fluxograma.png"
          alt="Imagem sobre fluxograma"
          className="post-img"
        />
        <br></br>
        <p>
          A imagem mostra um <strong>fluxograma de algoritmo</strong>, uma
          representação visual que utiliza{" "}
          <strong>formas geométricas e setas</strong> para indicar o{" "}
          <strong>fluxo das ações</strong>. Cada forma representa um tipo de
          passo — como início, operação, decisão e fim — ajudando a compreender
          a lógica do processo de forma organizada e visual.
        </p>

        <a href="/blog" className="back-link">
          ← Voltar
        </a>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <a href="/variavel" className="back-link">
          Próximo →
        </a>
      </div>
    </div>
  );
};

export default Algoritmo;

