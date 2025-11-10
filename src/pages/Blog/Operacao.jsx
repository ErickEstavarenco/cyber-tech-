import React from "react";


const Operacao = () => {
    return(
 <div className="blog-page-dados">
      <h1 className="page-title"> Operadores</h1> <br></br>
      <div className="pense">
          <h3 className="borda"> Operadores em Python</h3>
          <p>
            Os <strong>operadores</strong> são símbolos utilizados 
            para realizar diferentes tipos de operações com os 
            dados em um programa, como <strong>cálculos matemáticos, comparações e combinações lógicas</strong>. Eles são essenciais para criar expressões e tomadas de decisão dentro do código.
          </p><br></br>

<div class="exemplos">
  <div class="card">
    <h4 className="card-title">Operadores Aritméticos</h4>
    <p>São usados para realizar operações matemáticas:</p>
    <ul>
      <li>+ (adição)</li>
      <li>- (subtração)</li>
      <li>* (multiplicação)</li>
      <li>/ (divisão)</li>
      <li>// (divisão inteira)</li>
      <li>% (módulo – resto da divisão)</li>
      <li>** (exponenciação)</li>
    </ul>
    <p><strong>Exemplo:</strong></p>
    <img src="/operacaoex1.png" alt="Imagem sobre Funções"  className="mudar "/>
  </div>
 <div class="card">
    <h4 className="card-title">Operadores de Comparação</h4>
    <p>São usados para realizar operações matemáticas:</p>
    <ul>
      <li>== (igual)</li>
      <li>!= (diferente)</li>
      <li> &gt; (maior)</li>
      <li>&lt; (menor)</li>
      <li>&gt;= (maior ou igual)</li>
      <li>&lt;= (menor ou igual)</li>
      
    </ul>
    <p><strong>Exemplo:</strong></p>
    <img src="/operacaoex2.png" alt="Imagem sobre Funções"  className="mudar "/>
  </div>
  <div class="card">
    <h4 className="card-title">Operadores Lógicos</h4>
    <p>São usados para combinar condições em expressões:</p>
    <ul>
      <li><strong>and</strong> → verdadeiro se <strong>todas</strong> as condições forem verdadeiras</li>
      <li><strong>or</strong> → verdadeiro se <strong> pelo menos uma</strong> condição for verdadeira</li>
      <li><strong>not</strong> → inverte o valor lógico (True vira False, e vice-versa)</li>
     
    </ul>
    <p><strong>Exemplo:</strong></p>
    <img src="/operacaoex3.png" alt="Imagem sobre Funções"  className="mudar "/>
  </div>
<p>
  Os operadores tornam o código<strong> mais dinâmico e inteligente</strong>, permitindo ao programador criar <strong>condições, cálculos e tomadas de decisão automáticas </strong>dentro de um programa.
</p>
  

</div>

<a href="/blog" className="back-link">← Voltar</a>
       


     </div>
 </div>
    ) 
}
export default Operacao;
