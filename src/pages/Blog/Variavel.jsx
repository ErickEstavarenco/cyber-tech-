import React from "react";
import "./blog.css";

const Variavel = () => {
  return (
    <div className="blog-page">
      <h1 className="page-title">Variáveis</h1>
      <br />

      <div className="variavel">
           <h3 className="borda">O que é uma variável?</h3>
        <p>
          Uma <strong>variável</strong> é como uma <strong>caixa nomeada</strong> dentro da
          memória do computador usada para <strong>armazenar informações temporariamente</strong>.
        </p>

        <p>
          Essas informações podem ser <strong>números, textos, valores lógicos</strong> ou outros tipos de dados.
          O valor de uma variável <strong>pode mudar</strong> ao longo do programa, conforme novas informações são atribuídas a ela.
        </p>

        <p>
          Em programação, as variáveis são essenciais porque permitem <strong>guardar e manipular dados</strong>,
          tornando o código dinâmico e interativo. Cada variável tem:
        </p>

        <p><strong>- Um nome:</strong> usado para identificá-la (ex: nome, idade);</p>
        <p><strong>- Um tipo de dado:</strong> define o tipo de valor que ela armazena (ex: texto, número, etc.);</p>
        <p><strong>- Um valor:</strong> o dado guardado dentro dela.</p>

        <br />

        <strong>Exemplo em Python:</strong> <br></br> <br></br>
        <img src="/variavelex1.png" alt="Imagem sobre Variável" className="pos-img" />

        <p>Nesse exemplo:</p>
        <p>- A variável "nome" guarda um <strong>texto</strong> (“João”).</p>
        <p>- A variável "idade" guarda um <strong>número inteiro</strong> (25).</p>

        <br />

        <img src="/variavelex2.png" alt="Imagem sobre Variável" className="post-img" />
        <p>
          A imagem mostra uma representação visual de uma variável, parecida com uma caixa nomeada onde um valor é guardado.
          No exemplo, a “caixa” tem o nome da variável (<strong>idade</strong>) e dentro dela está o valor (<strong>25</strong>).
          Isso ajuda a entender que uma variável serve como um recipiente na memória do computador,
          onde os dados podem entrar, ser modificados e sair conforme o programa executa.
        </p>

        <a href="/blog" className="back-link">← Voltar</a>
        &nbsp;&nbsp;&nbsp;
         <a href="/tipo" className="back-link">
          Próximo →
        </a>
      </div>
    </div>
  );
};

export default Variavel;
