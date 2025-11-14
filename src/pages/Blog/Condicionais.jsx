import React, { useState } from "react";
import './Condicionais.css'

export default function Condicionais() {
    return (
       <div class="content-wrapper">
        <div class="blog-article">
           
            <h1 class="article-title">Dominando Estruturas condicionais em Python: if,elif e else</h1>
            
            <p> Uma das habilidades mais fundamentais na programação é a capacidade de <strong>tomar decisões</strong> e de fazer um bloco de código ser executado apenas se uma condição for verdadeira. É aí que entram as <strong>estruturas condicionais</strong>. Elas são os blocos de construção que permitem que seu código "pense" e tome decisões.</p>

            <section class="computer-thought-block">
                <h2>Como um Computador 'Pensa'?</h2>
                <p className="topic-box">
                    Imagine que um computador só entende <strong>sim</strong> (Verdadeiro) ou <strong>não</strong> (Falso). Toda condição que ele analisa é transformada em uma pergunta binária. Por exemplo: <strong>A idade do usuário é maior que 18?</strong>. É com base nessa <strong>lógica booleana</strong> que as estruturas condicionais funcionam!
                </p>
            </section>
            
            <section>
                <h2>A Estrutura 'if'</h2>
                <p>
                    A declaração <strong>if</strong> é a mais simples. Ela executa um bloco de código somente se uma condição for <strong>verdadeira</strong>. Se for falsa, o bloco de código é ignorado.
                </p>
            </section>

            <section>
                <h2>Adicionando Opções com 'else'</h2>
                <p>
                    E se quisermos fazer algo quando a condição for <strong>falsa</strong>? É para isso que serve o <strong>else</strong>. Ele fornece um bloco de código alternativo que é executado quando a condição do <strong>if</strong> não é atendida.
                </p>
            </section>
            
            <section>
                <h2>Múltiplas Condições com 'elif'</h2>
                <p>
                    Para testar várias condições em sequência, usamos <strong>elif</strong> (uma abreviação de "else if"). O Python verificará cada condição <strong>elif</strong> apenas se as condições anteriores (<strong>if</strong> e outros <strong>elif's</strong>) forem falsas.
                </p>
            </section>

            <section class="example-section">
                <h2>Exemplo Prático: Verificação de Idade</h2>
                <p>
                    Vamos juntar tudo em um exemplo clássico: um programa que verifica se uma pessoa pode votar com base em sua idade.
                </p>
                <div class="code-block-container">
                    <div class="code-header">
                   <img src='/condicionais.png' className=""></img>

                    </div>
                   
                </div>
            </section>

            <section>
                <h2>Conclusão</h2>
                <p>
                    Dominar as estruturas 'if', 'elif' e 'else' é um passo crucial para se tornar um programador proficiente. Elas são a base da lógica que permite criar aplicações complexas e inteligentes, dando-lhe o poder para praticar, tentar criar seus próprios cenários e veja como o fluxo do seu programa muda.
                </p>
            </section>

            
  <a href="/blog" className="back-link">
          ← Voltar
        </a>
        &nbsp;&nbsp;&nbsp;
         <a href="/funcoes" className="back-link">
          Próximo →
        </a>
        </div>
    </div>
    )
}