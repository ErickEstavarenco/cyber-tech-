import React, { useState } from "react";
import './Tipo.css'

const Tipo = () => {
  return (
    <div className="blog-page-dados">
      <h1 className="page-title"> Tipo de Dados</h1> <br></br>
      <div className="pense">
        <h3 className="borda">Entendendo os tipos de dados em Python:</h3>
        <p >
          Os <strong>tipos de dados</strong> definem que tipo de valor uma variável pode armazenar e quais operações podem ser realizadas com ela.
          </p>
          <p>
            Em Python (e em muitas outras linguagens de programação), cada tipo de dado possui <strong>características específicas </strong>, sendo usados de acordo com o tipo de informação que queremos representar.
        </p>
         <br></br>
        <p>Os principais tipos de dados básicos são:</p>
        <p>
          <strong>- Inteiros (int) </strong>
        </p>
        <p>
            Representam <strong>números inteiros</strong>, positivos ou negativos, sem casas decimais.
        </p>
        <p>
        <strong>
            Exemplo:
        </strong>
        </p>
        <img src="/inteiros.png" alt="Imagem sobre Variável" className="posta-img" />
        <p>
          <strong>-Pontos Flutuantes (float)</strong>
        </p>
        <p>
            Usados para representar<strong> números decimais</strong> (com casas após o ponto).

        </p>
         <p>
        <strong>
            Exemplo:
        </strong>
        </p>
       <img src="/pontos.png" alt="Imagem sobre Variável" className="posta-img" />

        <p>
            <strong>- Strings (str)</strong>
        </p>
        <p>
            São <strong>sequências de caracteres</strong> que representam <strong>textos</strong>. <br></br>
            Os textos ficam entre aspas simples (') ou duplas (").
        </p>
      <img src="/strings.png" alt="Imagem sobre Variável" className="posta-img" />

      <p>
        <strong> - Booleanos(bool)</strong>
      </p>
      <p>
        Representam valores <strong>lógicos</strong>: verdadeiro (True) ou falso (False).
        São muito usados em <strong>condições e decisões</strong> dentro dos programas.
      </p>
           <img src="/booleano.png" alt="Imagem sobre Booleanos" className="posta-img" />
          <h3 className="tipo">
            <strong> Representação dos Tipos de Dados em Python:</strong>
          </h3><br></br>

           <img src="/dados.png" alt="Imagem sobre Booleanos" className="postar-img" />
           <p>
            A imagem mostra <strong>os principais tipos de dados do Python</strong> — inteiros, floats, strings e booleanos — representados como <strong>caixas diferentes</strong>, cada uma com um exemplo de valor.
            Isso ilustra como o computador <strong>organiza e reconhece diferentes tipos de informações </strong>, permitindo que cada uma seja usada de forma correta em operações específicas.
           </p>

    
        </div>


        
        <div>
        <a href="/blog" className="back-link">
          ← Voltar
        </a>
        &nbsp;&nbsp;&nbsp;
         <a href="/variavel" className="back-link">
          Próximo →
        </a>
      </div>
    </div>
  );
};

export default Tipo;

