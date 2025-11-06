import React, { useState } from "react";
import './Condicionais.css'

export default function Condicionais() {
    return (
        <div className="blog-page-dados">
      <h1 className="page-title"> Condicionais</h1> <br></br>
      <div className="pense">
          <h3 className="borda"> Como o computador toma decisões com condicionais</h3>
          <p>
            As <strong>estruturas condicionais</strong> são fundamentais na programação, pois permitem que o computador<strong> tome decisões</strong> de acordo com determinadas situações. Em outras palavras, elas fazem o programa <strong>analisar uma condição e executar diferentes blocos</strong> de código dependendo do resultado.
          </p><br></br>
          <p>
            Em Python, usamos as palavras-chave <strong>if</strong>, <strong>elif</strong> e <strong>else</strong> para criar essas condições:
          </p>
          <p>
            <strong>- if</strong> verifica se uma condição é verdadeira.
          </p>
          <p>
            <strong>- elif</strong> (abreviação de else if) testa uma nova condição caso a anterior seja falsa.
          </p>
          <p>
            <strong> - else</strong> é executado quando nenhuma das condições anteriores é verdadeira.
          </p><br></br>
          <p>
            Essas estruturas tornam os programas <strong>mais inteligentes e dinâmicos</strong>, permitindo respostas diferentes para cada situação.
        </p><br></br>
        <p>
            <strong>Exemplo em Python:</strong>
        </p>
        <img src="/condex1.png" alt="Imagem sobre Condicionais" className="posta-img" />
      <p>
        Nesse exemplo, o programa verifica a idade e exibe uma mensagem apropriada para cada caso.
      </p>
      <p>
        As condicionais são essenciais para criar <strong>lógicas de decisão</strong>, como verificar login, comparar valores ou determinar ações específicas em jogos, sistemas e sites.
      </p>
       
       <a href="/blog" className="back-link">← Voltar</a>
        &nbsp;&nbsp;&nbsp;
         <a href="/condicionais" className="back-link">
          Próximo →
        </a>
       
      </div>
      </div>
    )
}