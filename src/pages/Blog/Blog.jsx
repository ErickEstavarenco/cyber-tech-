import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

// --- LISTA DE DADOS (Seus posts originais estão aqui) ---
const postsOriginais = [
  {
    id: 1,
    titulo: "Do pensamento à ação: o poder dos algoritmos",
    autor: "Lidiane Fonesca",
    data: "10/10/2023",
    tempoLeitura: "10 min",
    imagem: "/algex23.png",
    slug: "algoritmo"
  },
  {
    id: 2,
    titulo: "Entenda onde os dados vivem dentro do computador",
    autor: "Augusto da Silva",
    data: "12/04/2020",
    tempoLeitura: "10 min",
    imagem: "/variblog.png",
    slug: "variavel"
  },
  {
    id: 3,
    titulo: "Aprenda o que são e para que servem os tipos básicos de dados",
    autor: "Julia Mariana Reinalda",
    data: "20/06/2022",
    tempoLeitura: "10 min",
    imagem: "/tipoblog.png",
    slug: "tipo"
  },
  {
    id: 4,
    titulo: "Quando o 'se' muda tudo na programação",
    autor: "Luiz Inácio de Almeida",
    data: "17/06/2019",
    tempoLeitura: "10 min",
    imagem: "/condblog.png",
    slug: "condicionais"
  },
  {
    id: 5,
    titulo: "Aprenda o que são funções e por que elas tornam a programação mais simples",
    autor: "Roberto Souza",
    data: "09/11/2024",
    tempoLeitura: "10 min",
    imagem: "/funblog.png",
    slug: "funcoes"
  },
  {
    id: 6,
    titulo: "Entenda o papel dos operadores na manipulação de dados",
    autor: "Paulo Ferreira",
    data: "14/01/2021",
    tempoLeitura: "10 min",
    imagem: "/operablog.png",
    slug: "operacao"
  }
];

// --- SUB-COMPONENTE: CARD INDIVIDUAL (Cuida do Like) ---
function PostCard({ post }) {
  const [foiCurtido, setFoiCurtido] = useState(false);

  const handleLike = (e) => {
    e.preventDefault(); // Impede que o clique no botão abra o link
    setFoiCurtido(!foiCurtido);
  };

  return (
    <div className="post-card-alg">
      <Link to={`/${post.slug}`} className="read-more-link">
        <div className="post-image">
          <img 
            src={post.imagem} 
            alt={`Imagem sobre ${post.titulo}`} 
            className="post-img-blog" 
          />
        </div>

        <div className="post-info">
          <h3 className="post-title">{post.titulo}</h3>
          <div className="post-meta">
            <p><img src='/user.png' className='user' alt="Autor" /> {post.autor}</p>
            <p><img src='/calendar.png' alt="Data" className='user' /> {post.data}</p>
            <p>
              <img src='/time-left.png' className='user' alt="Tempo" /> 
              {post.tempoLeitura}
            </p>
          </div>
        </div>
      </Link>
      
      <div className="post-feedback">
        <button 
          className={`like-btn ${foiCurtido ? 'curtido' : ''}`} 
          onClick={handleLike}
          aria-label="Curtir esta postagem"
        >
          <span className="heart-icon">
            {foiCurtido ? '❤️' : '🤍'} 
          </span> 
        </button>
      </div>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL ---
function Blog() {
  const [mostrarMais, setMostrarMais] = useState(false);

  return (
    <div className="blog-page">
      <div className='hero-section'></div>

      <div className="post-container-blog">
        {/* Gera todos os seus 6 posts automaticamente */}
        {postsOriginais.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* --- CURIOSIDADES (Conteúdo Completo) --- */}
      <div className="curiosidade-card">
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
        <p style={{fontFamily: 'monospace', background: '#f0f0f0', padding: '5px'}}>
           if idade &gt;= 18: <br/> print("Você é maior de idade!") 
        </p>
        <br/>

        {mostrarMais && (
          <div className="conteudo-extra">
            <strong>É uma das linguagens mais populares do mundo</strong>
            <p>
              Python está entre as 3 linguagens mais usadas atualmente —
              junto com JavaScript e Java — graças à sua simplicidade e versatilidade.
            </p>

            <strong>É usada em áreas muito diferentes</strong>
            <p>Python é usada em:</p>
            <ul>
              <li>Inteligência Artificial e Machine Learning</li>
              <li>Desenvolvimento Web (com frameworks como Django e Flask)</li>
              <li>Ciência de dados</li>
              <li>Automação</li>
              <li>Jogos e Robótica</li>
            </ul>

            <strong>Não precisa compilar</strong>
            <p>
              Python é uma linguagem interpretada, ou seja, roda diretamente sem
              precisar compilar o código antes. Isso facilita muito os testes e a aprendizagem.
            </p>

            <strong>Possui uma comunidade gigantesca</strong>
            <p>
              Há milhões de desenvolvedores Python no mundo. A comunidade cria novas
              bibliotecas todos os dias, o que torna a linguagem cada vez mais poderosa.
            </p>

            <strong>Dá pra usar até em arte digital e música</strong>
            <p>
              Com bibliotecas como Turtle, Pygame e Sonic Pi, é possível criar desenhos,
              jogos e até músicas usando código Python!
            </p>

            <strong>É usada em grandes empresas</strong>
            <p>
              Empresas como Google, Instagram, Netflix, Spotify e NASA usam
              Python em partes de seus sistemas.
            </p>
          </div>
        )}

        <button
          className="btn-ver-mais"
          onClick={() => setMostrarMais(!mostrarMais)}
        >
          {mostrarMais ? 'Ver menos ▲' : 'Ver mais curiosidades ▼'}
        </button>
      </div>
    </div>
  );
}

export default Blog;