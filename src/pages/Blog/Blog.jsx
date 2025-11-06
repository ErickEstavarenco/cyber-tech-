import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import posts from '../../data/blog-posts.json';
import './Blog.css';

function Blog() {
  const [mostrarMais, setMostrarMais] = useState(false);


  return (
    <div className="blog-page">
      <h1 className="page-title">Blog</h1>
     <br></br>


      <div className="posts-container">
        <div className="post-card">
             <Link to="/algoritmo" className="read-more-link">
            
              <h2>O que é um Algoritmo?</h2>
             <img src="/algoritmo.png" alt="Imagem sobre Algoritmos" className="post-img" />

                 <p>
           Do pensamento à ação: o poder dos algoritmos
        </p>
        </Link>
        <div>
         
           
         
       
        </div>
         
        </div>


        <div className="post-card">
            <Link to="/variavel" className="read-more-link">
          <h2>Variáveis</h2>
          <img src="/variaveis.png" alt="Imagem sobre Variável" className="post-img" />

          <p>
            Entenda onde os dados vivem dentro do computador
         </p>
               
          </Link>
          <div>
            
           
          
            
          </div>
         </div>
            <div className="post-card">
        <Link to="/tipo" className="read-more-link">

          <h2>Tipos de Dados</h2>
          <img src="/tipodedados.png" alt="Imagem sobre Tipos de dados" className="post-img" />

          <p>Aprenda o que são e para que servem os tipos básicos de dados na programação</p>
            </Link>
           
             
                
         </div>


        <div className="post-card">
          <Link to="/condicionais" className="read-more-link">

          <h2>Condicionais (If, Else, Elif)</h2>

              <img src="/condicionais.png" alt="Imagem sobre condicionais" className="post-img" />
          
       
          <p>
            Quando o 'se' muda tudo na programação
         </p>
        </Link>
          
        </div>


        <div className="post-card">
          <h2>Funções</h2>
              <img src="/funcao.png" alt="Imagem sobre Funções" className="post-img" />
          <p>São blocos de código criados para realizar uma tarefa específica.
            Elas ajudam a organizar e reutilizar o código, evitando repetições.
         </p>
          
        </div>
        <div className="post-card">
          <h2>Operações</h2>
              <img src="/operacao.png" alt="Imagem sobre operação" className="post-img" />
          <p>Operadores são símbolos usados para
            realizar ações com os dados, como fazer cálculos ou comparar valores.</p>
           
               </div>

        <div className="post-card">
          <h2>Curiosidades sobre Python</h2>
          <strong>O nome “Python” não vem da cobra</strong>
          <p>
           Apesar do símbolo ser uma cobra, o nome Python veio do grupo de
            comédia britânico “Monty Python’s Flying Circus”, que o criador da linguagem,
             Guido van Rossum, adorava assistir.

          </p>


          <strong>É uma linguagem muito simples de ler</strong>
          <p>
           O Python foi criado para ser fácil de entender até por quem não programa.
          O próprio Guido dizia que o código Python deve parecer “inglês legível”.
        </p>
         <p>Exemplo:
                  {" if idade >="}18 <br></br> print("Você é maior de idade!") </p>

          <br></br>



          {/* Mostra conteúdo extra se clicar em "Ver mais" */}
          {mostrarMais && (
            <div className="conteudo-extra">
          <strong>É uma das linguagens mais populares do mundo</strong>

              <p>
                Python está entre as 3 linguagens mais usadas atualmente —
                junto com JavaScript e Java — graças à sua simplicidade e versatilidade.
                </p>
               </div>
          )}
           {mostrarMais && (
            <div className="conteudo-extra">
              <strong>É usada em áreas muito diferentes  </strong>
              <p>
                Phyton é usada em:
              </p>
              <p>
               - Inteligência Artificial e Machine Learning
              </p>
              <p>
                -Desenvolvimento Web  (com frameworks como Django e Flask)
              </p>
              <p>
               - Ciência de dados
              </p>
              <p>
               - Automação
              </p>
              <p>
                - Jogos e Robótica
              </p>

            </div>
          )}
           {mostrarMais && (
            <div className="conteudo-extra">
          <strong>Não precisa compilar</strong>

              <p>
                Python é uma linguagem interpretada, ou seja, roda diretamente sem
                precisar compilar o código antes. Isso facilita muito os testes e a aprendizagem.
               </p>
               </div>
          )}
          {mostrarMais && (
            <div className="conteudo-extra">
          <strong>Possui uma comunidade gigantesca</strong>

              <p>
                Há milhões de desenvolvedores Python no mundo. A comunidade cria novas
                bibliotecas todos os dias, o que torna a linguagem cada vez mais poderosa.
              </p>
               </div>
          )}
          {mostrarMais && (
            <div className="conteudo-extra">
          <strong>Dá pra usar até em arte digital e música</strong>

              <p>
                Com bibliotecas como Turtle, Pygame e Sonic Pi, é possível criar desenhos,
                 jogos e até músicas usando código Python!
              </p>
               </div>
          )}

         {mostrarMais && (
            <div className="conteudo-extra">
          <strong>É usada em grandes empresas</strong>

              <p>Empresas como Google, Instagram, Netflix, Spotify e NASA usam
                Python em partes de seus sistemas.
                </p>
               </div>
          )}


          {/* Botão Ver mais / Ver menos */}
          <button
            className="btn-ver-mais"
            onClick={() => setMostrarMais(!mostrarMais)}
          >
            {mostrarMais ? 'Ver menos ▲' : 'Ver mais curiosidades ▼'}
          </button>
        </div>
      </div>


      {/* Mensagem se não houver posts */}
      {posts.length === 0 && <p>Ainda não há posts publicados.</p>}
    </div>
  );
}


export default Blog;