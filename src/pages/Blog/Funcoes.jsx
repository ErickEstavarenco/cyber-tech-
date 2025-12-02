import React from "react";
import "./BlogPost.css";

const Funcoes = () => {
  return (
    <div className="blog-post-container">
      <header className="blog-post-header">
        <h1 className="blog-title">Funções</h1>
        <p className="blog-subtitle">Organizando e reutilizando seu código</p>
      </header>

      <section>
        <p className="blog-text">
          As <strong>funções</strong> são blocos de código nomeados, criados para realizar uma tarefa específica. 
          Elas permitem <strong>organizar, reutilizar e simplificar</strong> o desenvolvimento, evitando repetições desnecessárias.
        </p>

        <div className="blog-highlight-box">
          <h3 className="blog-highlight-title">Definindo uma função</h3>
          <p className="blog-text">
            Em Python, usamos a palavra-chave <code>def</code>, seguida pelo nome da função e parênteses.
          </p>
          <div className="blog-image-container">
            <img src="/funex1.png" alt="Definição de função" className="blog-img" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="blog-section-title">Parâmetros e Argumentos</h2>
        <p className="blog-text">
          Funções podem receber dados para processar, chamados de <strong>parâmetros</strong>. 
          No exemplo abaixo, a função <code>saudacao</code> recebe o nome de uma pessoa para personalizar a mensagem.
        </p>
        <div className="blog-image-container">
          <img src="/funcaoex1.png" alt="Função com parâmetros" className="blog-img" />
        </div>
        <p className="blog-text">
          Ao chamar <code>saudacao("João")</code>, o programa exibirá: <strong>"Olá, João!"</strong>.
        </p>
      </section>

      <section>
        <h2 className="blog-section-title">Retorno de Valores</h2>
        <p className="blog-text">
          Muitas vezes queremos que a função calcule algo e nos devolva o resultado. Para isso, usamos a instrução <code>return</code>.
        </p>
        <div className="blog-image-container">
          <img src="/funcaoex2.png" alt="Função com return" className="blog-img" />
        </div>
        <p className="blog-text">
          Isso permite armazenar o resultado em uma variável para ser usado posteriormente no programa.
        </p>
      </section>

      <nav className="blog-navigation">
        <a href="/condicionais" className="blog-nav-link">
          <img src="/flecha1.png" alt="" className="nav-icon" /> Anterior
        </a>
        <a href="/operacao" className="blog-nav-link">
          Próximo <img src="/flecha2.png" alt="" className="nav-icon" />
        </a>
      </nav>
    </div>
  );
};

export default Funcoes;