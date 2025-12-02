import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../FirebaseConfig";
import "./BlogPost.css"; // 1. Troca o import para o CSS padrão

const PostDinamico = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "blog", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPost(docSnap.data());
        } else {
          console.log("Post não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar post:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) return <div className="loading">Carregando conteúdo...</div>;
  if (!post) return <div className="loading">Post não encontrado.</div>;

  return (
    // 2. Container principal padrão
    <div className="blog-post-container">
      
      {/* 3. Cabeçalho Padronizado */}
      <header className="blog-post-header">
        <h1 className="blog-title">{post.titulo}</h1>
        {post.resumo && <p className="blog-subtitle">{post.resumo}</p>}
      </header>

      {/* 4. Imagem Principal */}
      {post.imagemUrl && (
        <div className="blog-image-container">
          <img 
            src={post.imagemUrl} 
            alt={post.titulo} 
            className="blog-img" 
          />
        </div>
      )}

      {/* 5. Conteúdo Principal */}
      <section>
        {post.conteudo.split("\n").map((paragrafo, index) => (
          // Verifica se o parágrafo não está vazio para evitar espaços grandes
          paragrafo.trim() !== "" && (
            <p key={index} className="blog-text">
              {paragrafo}
            </p>
          )
        ))}
      </section>

      {/* 6. Navegação Padronizada */}
      <nav className="blog-navigation">
        <Link to="/blog" className="blog-nav-link">
          <img src="/flecha1.png" alt="" className="nav-icon" /> Voltar para o Blog
        </Link>
      </nav>

    </div>
  );
};

export default PostDinamico;