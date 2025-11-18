import React, { useState } from "react";
import './Tipo.css'

const Tipo = () => {
  return (
    <div class="content-container">
        <nav class="sidebar">
            <h4 class="nav-title"> Tipos de Dados</h4>
            <ul class="nav-list">
                <li><a href="#int-section" class="active">Inteiros</a></li>
                <li><a href="#float-section">Pontos Flutuantes</a></li>
                <li><a href="#str-section">Cadeias</a></li>
                <li><a href="#bool-section">Booleanos</a></li>
            </ul>
        </nav>

        <main class="main-content">
            <div class="header">
                <h1 class="page-title">Introdução aos Tipos de Dados em Python</h1>
                <p>
                 Aqui estão os tipos de dados fundamentais em <strong>Python</strong>. Cada seção abaixo fornece uma descrição detalhada de como utilizar os <strong>Inteiros, Pontos Flutuantes, Cadeias e Booleanos</strong>.
                 </p>
            </div>

            <section id="int-section" class="data-type-section">
                <h2 class="section-title">Inteiros (int)</h2>
                <p>Inteiros são números inteiros, positivos ou negativos, sem casas decimais. Em Python, a dimensão do inteiro é ilimitada, o que o torna apto para grandes operações.</p>
                <div class="code-example-block">
                    <h3 class="code-title">Como usar inteiros</h3>
                    <div class="code-block">
                    <img src='/inteiros.png' className="fotos"></img>
                    <div className="linhas"></div>
                    <h3>Saída</h3>
                    <img src='/inteirossaida.png' className="fotos"></img>
                    
                    </div>
                </div>
            </section>

            <section id="float-section" class="data-type-section">
                <h2 class="section-title">Pontos Flutuantes (float)</h2>
                <p>Pontos flutuantes, ou floats, são os números que contêm uma parte fracionária, separados por um ponto decimal. Eles podem ser expressos em notação científica.</p>
                <div class="code-example-block">
                    <h3 class="code-title">Como usar pontos flutuantes</h3>
                    <div class="code-block">
                        <img src='/float.png' className="fotos"></img>
                    <div className="linhas"></div>
                    <h3>Saída</h3>
                    <img src='/floatsaida.png' className="fotos"></img>
                    
                    </div>
                </div>
            </section>

            <section id="str-section" class="data-type-section">
                <h2 class="section-title">Cadeias (str)</h2>
                <p>Cadeias, ou <strong>strings</strong>, são sequências de caracteres usadas para armazenar texto. Em Python, as cadeias são imutáveis e podem ser definidas com aspas simples ou duplas.</p>
                <div class="code-example-block">
                    <h3 class="code-title">Como usar cadeias</h3>
                    <div class="code-block">
                       
                        <img src='/string.png' className="fotos"></img>
                    <div className="linhas"></div>
                    <h3>Saída</h3>
                    <img src='/stringsaida.png' className="fotos"></img>
                    </div>
                </div>
            </section>

            <section id="bool-section" class="data-type-section">
                <h2 class="section-title">Booleanos (bool)</h2>
                <p>Booleanos são o tipo de dado de dois valores: <strong>'True'</strong> (verdadeiro) ou <strong>'False'</strong> (falso). Eles são essenciais para a lógica condicional e o controle de fluxo em programas.</p>
                <div class="code-example-block">
                    <h3 class="code-title">Como usar booleanos</h3>
                    <div class="code-block">
                        
                        <img src='/bool.png' className="fotos"></img>
                    <div className="linhas"></div>
                    <h3>Saída</h3>
                    <img src='/boolsaida.png' className="fotos"></img>
                    </div>
                </div>
            </section>
            
             <a href="/blog" className="back-link">
          ← Voltar
        </a>
        &nbsp;&nbsp;&nbsp;
         <a href="/condicionais" className="back-link">
          Próximo →
        </a>
        </main>
    </div>


        
        
 
  );
};

export default Tipo;

