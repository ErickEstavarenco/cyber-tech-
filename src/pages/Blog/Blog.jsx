import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

// Imports do Firebase
import { 
  collection, getDocs, orderBy, query, 
  addDoc, deleteDoc, where, onSnapshot, doc 
} from "firebase/firestore";
import { db, auth } from "../../../FirebaseConfig"; 

// --- LISTA DE DADOS ESTÁTICOS (Mantida) ---
const postsOriginais = [
  {
    id: 'static-1',
    titulo: "Do pensamento à ação: o poder dos algoritmos",
    autor: "Lidiane Fonesca",
    data: "10/10/2023",
    tempoLeitura: "10 min",
    imagem: "/algex23.png",
    slug: "algoritmo"
  },
  {
    id: 'static-2',
    titulo: "Entenda onde os dados vivem dentro do computador",
    autor: "Augusto da Silva",
    data: "12/04/2020",
    tempoLeitura: "10 min",
    imagem: "/variblog.png",
    slug: "variavel"
  },
  {
    id: 'static-3',
    titulo: "Aprenda o que são e para que servem os tipos básicos de dados",
    autor: "Julia Mariana Reinalda",
    data: "20/06/2022",
    tempoLeitura: "10 min",
    imagem: "/tipoblog.png",
    slug: "tipo"
  },
  {
    id: 'static-4',
    titulo: "Quando o 'se' muda tudo na programação",
    autor: "Luiz Inácio de Almeida",
    data: "17/06/2019",
    tempoLeitura: "10 min",
    imagem: "/condblog.png",
    slug: "condicionais"
  },
  {
    id: 'static-5',
    titulo: "Aprenda o que são funções e por que elas tornam a programação mais simples",
    autor: "Roberto Souza",
    data: "09/11/2024",
    tempoLeitura: "10 min",
    imagem: "/funblog.png",
    slug: "funcoes"
  },
  {
    id: 'static-6',
    titulo: "Entenda o papel dos operadores na manipulação de dados",
    autor: "Paulo Ferreira",
    data: "14/01/2021",
    tempoLeitura: "10 min",
    imagem: "/operablog.png",
    slug: "operacao"
  }
];

// --- CARD INDIVIDUAL COM LÓGICA DE LIKE ---
function PostCard({ post }) {
  const [likesCount, setLikesCount] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const [likeDocId, setLikeDocId] = useState(null); 

  // Monitora os likes deste post em tempo real
  useEffect(() => {
    // Procura na coleção 'likes' todos os documentos deste post específico
    const q = query(collection(db, "likes"), where("postId", "==", post.id));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      // 1. Conta quantos likes existem
      setLikesCount(snapshot.size);

      // 2. Verifica se EU (usuário logado) dei like
      if (auth.currentUser) {
        const meuLike = snapshot.docs.find(d => d.data().userId === auth.currentUser.uid);
        if (meuLike) {
          setUserLiked(true);
          setLikeDocId(meuLike.id); // Guarda o ID para poder deletar depois
        } else {
          setUserLiked(false);
          setLikeDocId(null);
        }
      } else {
        setUserLiked(false);
      }
    });

    return () => unsubscribe();
  }, [post.id]);

  const handleLike = async (e) => {
    e.preventDefault(); // Evita abrir o link do post

    if (!auth.currentUser) {
      alert("Você precisa estar logado para curtir!");
      return;
    }

    try {
      if (userLiked && likeDocId) {
        // --- REMOVER LIKE ---
        await deleteDoc(doc(db, "likes", likeDocId));
      } else {
        // --- ADICIONAR LIKE ---
        await addDoc(collection(db, "likes"), {
          postId: post.id,
          postTitle: post.titulo, // Salvamos o título para mostrar no Admin
          userId: auth.currentUser.uid,
          userEmail: auth.currentUser.email,
          userName: auth.currentUser.displayName || "Usuário",
          data: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error("Erro ao curtir:", error);
      alert("Erro ao processar curtida.");
    }
  };

  // Define o destino do clique (Post estático ou dinâmico)
  const linkDestino = post.slug ? `/${post.slug}` : `/blog/post/${post.id}`;

  return (
    <div className="post-card-alg">
      <Link to={linkDestino} className="read-more-link">
        <div className="post-image">
          <img 
            src={post.imagem || "/placeholder-blog.png"} 
            alt={`Imagem sobre ${post.titulo}`} 
            className="post-img-blog"
            onError={(e) => e.target.src = "https://placehold.co/600x400?text=Blog+CyberTech"}
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
          className={`like-btn ${userLiked ? 'curtido' : ''}`} 
          onClick={handleLike}
          aria-label="Curtir esta postagem"
          style={{display: 'flex', alignItems: 'center', gap: '6px', background:'transparent', border:'none', cursor:'pointer'}}
        >
          <span className="heart-icon" style={{fontSize: '1.4rem'}}>
            {userLiked ? '❤️' : '🤍'} 
          </span> 
          {/* Exibe o número se houver likes */}
          <span style={{fontWeight: 'bold', color: '#555', fontSize: '1rem'}}>
            {likesCount > 0 ? likesCount : ''}
          </span>
        </button>
      </div>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL ---
function Blog() {
  const [mostrarMais, setMostrarMais] = useState(false);
  const [postsDinamicos, setPostsDinamicos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Busca posts novos do Firebase
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, "blog"), orderBy("dataCriacao", "desc"));
        const querySnapshot = await getDocs(q);
        
        const novosPosts = querySnapshot.docs.map(doc => {
          const data = doc.data();
          const dataFormatada = data.dataCriacao 
            ? new Date(data.dataCriacao).toLocaleDateString('pt-BR') 
            : "Recente";

          return {
            id: doc.id,
            titulo: data.titulo,
            autor: "Equipe CyberTech", 
            data: dataFormatada,
            tempoLeitura: "5 min",
            imagem: data.imagemUrl,
            slug: null
          };
        });
        
        setPostsDinamicos(novosPosts);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const todosOsPosts = [...postsDinamicos, ...postsOriginais];

  return (
    <div className="blog-page">
      <div className='hero-section'></div>

      <div className="post-container-blog">
        {loading && <p style={{textAlign:'center', width:'100%', color:'#666'}}>Carregando posts...</p>}
        
        {todosOsPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Seção de Curiosidades (Mantida igual) */}
      <div className="curiosidade-card">
        <h2>Curiosidades sobre Python</h2>
        <strong>O nome “Python” não vem da cobra</strong>
        <p>Apesar do símbolo ser uma cobra, o nome Python veio do grupo de comédia britânico “Monty Python’s Flying Circus”.</p>
        
        <strong>É uma linguagem muito simples de ler</strong>
        <p>O Python foi criado para ser fácil de entender até por quem não programa.</p>
        <p style={{fontFamily: 'monospace', background: '#f0f0f0', padding: '5px'}}>
           if idade &gt;= 18: <br/> print("Você é maior de idade!") 
        </p>
        <br/>

        {mostrarMais && (
          <div className="conteudo-extra">
            <strong>É uma das linguagens mais populares do mundo</strong>
            <p>Python está entre as 3 linguagens mais usadas atualmente.</p>
            <strong>É usada em grandes empresas</strong>
            <p>Google, Instagram, Netflix, Spotify e NASA usam Python.</p>
          </div>
        )}

        <button className="btn-ver-mais" onClick={() => setMostrarMais(!mostrarMais)}>
          {mostrarMais ? 'Ver menos ▲' : 'Ver mais curiosidades ▼'}
        </button>
      </div>
    </div>
  );
}

export default Blog;