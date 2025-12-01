import React from "react";
import "./Operacao.css";


const Operacao = () => {
    return (
        <div class="content-wrapper">
            <div class="blog-article">

                <h1 class="article-title">Aprenda Sobre Operadores</h1>
                <p>
                    Operadores são símbolos especiais em Python que realizam computações aritméticas ou lógicas. Vamos explorar os principais tipos.

                </p>
                <br></br>
                <div class="layout-columns">
                    <div class="column-left">
                        <article >
                            <h2 class="topic-title">Operadores Aritméticos</h2>
                            <p className="Letra">
                                São usados para realizar operações matemáticas:
                            </p>
                            <div class="content-wrapper">
                                <div class="operators-list">
                                    <ul>
                                        <li>+ (adição)</li>
                                        <li>- (subtração)</li>
                                        <li>* (multiplicação)</li>
                                        <li>/ (divisão)</li>
                                        <li>// (divisão inteira)</li>
                                        <li>% (módulo – resto da divisão)</li>
                                        <li>**(exponenciação)</li>
                                    </ul>
                                </div>

                                <div class="example-box">
                                    <p><strong>Exemplo:</strong></p>
                                    <img src="/operacaoex1.png" alt="Imagem sobre Funções" className="mudar " />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
                <div class="layout-columns">
                    <div class="column-left">
                        <article >
                            <h2 class="topic-title">Operadores de Comparação</h2>
                            <p className="Letra">
                                São usados para realizar operações matemáticas:
                            </p>
                            <div class="content-wrapper">
                                <div class="operators-list">
                                    <ul>
                                        <li>== (igual)</li>
                                        <li>!= (diferente)</li>
                                        <li> &gt; (maior)</li>
                                        <li>&lt; (menor)</li>
                                        <li>&gt;= (maior ou igual)</li>
                                        <li>&lt;= (menor ou igual)</li>

                                    </ul>
                                </div>

                                <div class="example-box">
                                    <p><strong>Exemplo:</strong></p>
                                    <img src="/operacaoex2.png" alt="Imagem sobre Funções" className="mudar " />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
                <div class="layout-columns">
                    <div class="column-left">
                        <article >
                            <h2 class="topic-title">Operadores Lógicos</h2>
                            <p className="Letra">
                                São usados para combinar condições em expressões:
                            </p>
                            <div class="content-wrapper">
                                <div class="operators-list">
                                    <ul>
                                        <li><strong>and</strong> → verdadeiro se <strong>todas</strong> as condições forem verdadeiras</li>
                                        <li><strong>or</strong> → verdadeiro se <strong> pelo menos uma</strong> condição for verdadeira</li>
                                        <li><strong>not</strong> → inverte o valor lógico (True vira False, e vice-versa)</li>

                                    </ul>
                                </div>

                                <div class="example-box">
                                    <p><strong>Exemplo:</strong></p>
                                    <img src="/operacaoex3.png" alt="Imagem sobre Funções" className="mudar " />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
                <br></br>
                <div className="navigation-links">
          <a href="/blog" className="back-link">
            <img src="/flecha1.png" alt="Voltar" className="logo-img" />
            Voltar
          </a>
          <a href="/blog" className="back-link">
            Próximo
            <img src="/flecha2.png" alt="Próximo" className="logo-img" />
          </a>
        </div>
            </div>
        </div>
    )
}
export default Operacao;
