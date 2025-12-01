import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../FirebaseConfig";
import "./Funcoes.css"; // Reutiliza o estilo visual existente

const PostDinamico = () => {
  const { id } = useParams(); // Pega o ID da URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "blog", id); // Busca na coleção 'blog'
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
    <div className="content-wrapper"> {/* */}
      <div className="blog-article"> {/* */}
        
        {/* Cabeçalho do Post */}
        <h1 className="article-title">{post.titulo}</h1> {/* */}
        <p>{post.resumo}</p>

        {/* Imagem Principal (se houver) */}
        {post.imagemUrl && (
          <div className="pop"> {/* */}
            <img src={post.imagemUrl} alt={post.titulo} className="posta-img" />
          </div>
        )}

        {/* Conteúdo Principal */}
        {/* Aqui usamos uma técnica para quebrar o texto em parágrafos se você usar 'Enter' no admin */}
        <div style={{ marginTop: "20px" }}>
          {post.conteudo.split("\n").map((paragrafo, index) => (
            <p key={index} style={{ marginBottom: "15px" }}>{paragrafo}</p>
          ))}
        </div>

        <div className="navigation-links"> {/* */}
          <Link to="/blog" className="back-link">
            ← Voltar para o Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDinamico;