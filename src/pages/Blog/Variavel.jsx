import React from "react";
import "./variavel.css";

const Variavel = () => {
  return (
   <main class="container">
        <section class="content-section">
            <h1 class="main-title">O que são Variáveis?</h1>
            <p class="subtitle">As variáveis são um dos blocos de construção mais fundamentais na programação. Elas nos permitem armazenar e gerenciar dados em nossos programas.</p>

            <div class="layout-columns">
                <div class="column-left">
                    <article class="topic-box">
                        <h2 class="topic-title">Uma Caixa na Memória</h2>
                        <p className="Letra">Pense em uma variável como uma <strong>caixa com uma etiqueta</strong>. Você pode guardar algo dentro dessa caixa e, sempre que precisar, pode usar a etiqueta para encontrá-la e ver o que está dentro. Em termos de programação, essa "caixa" é um espaço na memória do computador, a "etiqueta" é o nome da variável, e o que está dentro é o seu valor.</p>
                    </article>

                    <article class="topic-box">
                        <h2 class="topic-title">Componentes de uma Variável</h2>
                        <p>Toda variável possui três componentes principais:</p>
                        <ul class="components-list">
                            <li>
                                <div class="component-item">
                                    <p><i className="fa fa-pasta"></i> <img src='/user.png' className='user'></img></p>
                                    <div class="component-details">
                                        <strong>Nome</strong>
                                        <p>Um identificador único que usamos para nos referir à variável. Por exemplo: <code>idade</code>, <code>nome</code>, <code>preco</code>, <code>total</code>.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="component-item">
                                  <p><i className="fa fa-azulejos"></i> <img src='/azulejos.png' className='user'></img></p>

                                    <div class="component-details">
                                        <strong>Tipo de Dado</strong>
                                        <p>Define que tipo de informação a variável pode armazenar. Pode ser um número (<code>inteiro</code>), texto (<code>string</code>), verdadeiro/falso (<code>booleano</code>), etc.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="component-item">
                                  <p><i className="fa fa-pasta"></i> <img src='/pasta.png' className='user'></img></p>
                                    <div class="component-details">
                                        <strong>Valor</strong>
                                        <p>A informação real que está armazenada na variável. Por exemplo: <code>30</code>, <code>"Maria"</code>, <code>true</code>.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </article>
                </div>

                <div class="column-right">
                    <aside class="visual-representation">
                        <h3 class="visual-title">Representação Visual</h3>
                        
                        <div class="var-box">
                            <p class="var-meta">Nome: <strong>nome</strong></p>
                            <p class="var-meta">Tipo: String</p>
                            <p class="var-label">VALOR</p>
                            <div class="var-value-text">"Alice"</div>
                        </div>

                        <div class="var-box">
                            <p class="var-meta">Nome: <strong>idade</strong></p>
                            <p class="var-meta">Tipo: Inteiro</p>
                            <p class="var-label">VALOR</p>
                            <div class="var-value-number">30</div>
                        </div>
                    </aside>
                </div>
            </div>
            
            <article class="topic-box full-width">
                <h2 class="topic-title">Exemplo em Python</h2>
                <p>Vamos ver como isso funciona na prática com um exemplo em Python. Aqui, criamos duas variáveis: uma para armazenar um nome e outra para uma idade.</p>

                <div class="code-block">
                   <img src='/variaveis.png' className="fotos"></img>
                </div>
            </article>
            <a href="/blog" className="back-link">
          ← Voltar
        </a>
        &nbsp;&nbsp;&nbsp;
         <a href="/tipo" className="back-link">
          Próximo →
        </a>
        </section>
    </main>
  );
};

export default Variavel;
