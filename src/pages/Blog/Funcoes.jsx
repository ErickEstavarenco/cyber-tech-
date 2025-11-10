import React from "react";


const Funcoes = () => {
    return (
  <div className="blog-page-dados">
      <h1 className="page-title"> Funções</h1> <br></br>
      <div className="pense">
          <h3 className="borda"> Funções em Python</h3>
         <p>
          As <strong>funções</strong> são blocos de código criados para
           executar uma tarefa específica dentro de um programa. 
           Elas permitem<strong> organizar, reutilizar e simplificar</strong> o código, tornando o desenvolvimento mais eficiente e fácil de entender. Com funções, é possível evitar repetições e manter o código mais limpo e modular.
         </p><br></br>
         <p>
          Em Python, uma função é definida com a palavra-chave def, 
          seguida pelo nome da função e, entre parênteses, os 
          <strong>parâmetros</strong> (ou argumentos) que ela pode receber. Depois, dentro do bloco indentado, vem o conjunto de instruções que a função deve realizar.
         </p>
         <p>Exemplo:</p>
         <img src="/funcaoex1.png" alt="Imagem sobre Funções" className="posta-img" />
         <p>
          Ao chamar saudacao("João"), o programa exibirá <strong>“Olá, João!”</strong>.
          </p><br></br>
          <p>
            As funções podem <strong> retornar valores </strong>utilizando a palavra-chave return. Isso permite que o resultado de um cálculo ou operação seja guardado ou usado em outra parte do código.
          </p>
          <p>Exemplo:</p>
          <img src="/funcaoex2.png" alt="Imagem sobre Funções" className="posta-img" />
          <p>
            Além das funções criadas pelo programador, o Python possui várias <strong>funções embutidas </strong><strong>(</strong>como print(), len(), type(), int(), entre outras<strong>)</strong> que facilitam tarefas do dia a dia.
          </p><br></br>
          <p>
            No geral, aprender a usar funções é fundamental para 
            quem deseja escrever códigos bem estruturados, eficientes 
            e de fácil manutenção. Elas são uma das bases da <strong>programação estruturada e modular.</strong>
          </p>

         
       
      
       
       <a href="/blog" className="back-link">← Voltar</a>
        &nbsp;&nbsp;&nbsp;
         <a href="/condicionais" className="back-link">
          Próximo →
        </a>
       
      </div>
      </div>
    );
};
export default Funcoes;
    