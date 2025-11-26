import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import posts from '../../../cyber-tech-/src/data/blog-posts.jso';
import posts from '../../data/blog-posts.json'
import './Blog.css';

function Blog() {
  const [mostrarMais, setMostrarMais] = useState(false);


  return (
    <div className="blog-page">
      <div className='hero-section'></div>

      <div className="post-container-blog">
       <div className="post-card-alg">
    <Link to="/algoritmo" className="read-more-link">
      <div className="post-image">
        <img src="/algex23.png" alt="Imagem sobre Algoritmos" className="post-img-blog" />
      </div>

      <div className="post-info">
        <h3 className="post-title">Do pensamento à ação: o poder dos algoritmos</h3>
        <div className="post-meta">
          <p><i className="fa fa-user"></i> <img src='/user.png' className='user'></img>Lidiane Fonesca</p>
          <p><i className="fa fa-calendar"></i> <img src='calendar.png' alt="" className='user'></img> 10/10/2023</p>
<p>
  <i className="fa fa-clock"></i> 
  <img src='/time-left.png' className='user' alt="Tempo restante" /> 10 min
</p>
        </div>
      </div>
    </Link>
  </div>
  
   <div className="post-card-alg">
    <Link to="/variavel" className="read-more-link">
      <div className="post-image">
        <img src="/variblog.png" alt="Imagem sobre Algoritmos" className="post-img-blog" />
      </div>

      <div className="post-info">
        <h3 className="post-title">  Entenda onde os dados vivem dentro do computador</h3>
        <div className="post-meta">
          <p><i className="fa fa-user"></i> <img src='/user.png' className='user'></img>Augusto da Silva</p>
          <p><i className="fa fa-calendar"></i> <img src='calendar.png' alt="" className='user'></img> 12/04/2020</p>
<p>
  <i className="fa fa-clock"></i> 
  <img src='/time-left.png' className='user' alt="Tempo restante" /> 10 min
</p>
        </div>
      </div>
    </Link>
  </div>
         
         <div className="post-card-alg">
    <Link to="/tipo" className="read-more-link">
      <div className="post-image">
        <img src="/tipoblog.png" alt="Imagem sobre Algoritmos" className="post-img-blog" />
      </div>

      <div className="post-info">
        <h3 className="post-title"> Aprenda o que são e para que servem os tipos básicos de dados na programação</h3>
        <div className="post-meta">
          <p><i className="fa fa-user"></i> <img src='/user.png' className='user'></img>Julia Mariana Reinalda</p>
          <p><i className="fa fa-calendar"></i> <img src='calendar.png' alt="" className='user'></img> 20/06/2022</p>
<p>
  <i className="fa fa-clock"></i> 
  <img src='/time-left.png' className='user' alt="Tempo restante" /> 10 min
</p>
        </div>
      </div>
    </Link>
  </div>
        <div className="post-card-alg">
    <Link to="/condicionais" className="read-more-link">
      <div className="post-image">
        <img src="/condblog.png" alt="Imagem sobre Algoritmos" className="post-img-blog" />
      </div>

      <div className="post-info">
        <h3 className="post-title">    Quando o 'se' muda tudo <br></br>na programação</h3>
        <div className="post-meta">
          <p><i className="fa fa-user"></i> <img src='/user.png' className='user'></img>Luiz Inácio de Almeida</p>
          <p><i className="fa fa-calendar"></i> <img src='calendar.png' alt="" className='user'></img> 17/06/2019</p>
<p>
  <i className="fa fa-clock"></i> 
  <img src='/time-left.png' className='user' alt="Tempo restante" /> 10 min
</p>
        </div>
      </div>
    </Link>
  </div>
            <div className="post-card-alg">
    <Link to="/funcoes" className="read-more-link">
      <div className="post-image">
        <img src="/funblog.png" alt="Imagem sobre Algoritmos" className="post-img-blog" />
      </div>

      <div className="post-info">
        <h3 className="post-title">          Aprenda o que são funções e por que elas<br></br> tornam a programação mais simples</h3>
        <div className="post-meta">
          <p><i className="fa fa-user"></i> <img src='/user.png' className='user'></img>Roberto Souza</p>
          <p><i className="fa fa-calendar"></i> <img src='calendar.png' alt="" className='user'></img> 09/11/2024</p>
<p>
  <i className="fa fa-clock"></i> 
  <img src='/time-left.png' className='user' alt="Tempo restante" /> 10 min
</p>
        </div>
      </div>
    </Link>
  </div>

            <div className="post-card-alg">
    <Link to="/operacao" className="read-more-link">
      <div className="post-image">
        <img src="/operablog.png" alt="Imagem sobre Algoritmos" className="post-img-blog" />
      </div>

      <div className="post-info">
        <h3 className="post-title">   Entenda o papel dos operadores na manipulação de dados e expressões lógicas</h3>
        <div className="post-meta">
          <p><i className="fa fa-user"></i> <img src='/user.png' className='user'></img>Paulo Ferreira</p>
          <p><i className="fa fa-calendar"></i> <img src='calendar.png' alt="" className='user'></img> 14/01/2021</p>
<p>
  <i className="fa fa-clock"></i> 
  <img src='/time-left.png' className='user' alt="Tempo restante" /> 10 min
</p>
        </div>
      </div>
    </Link>
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