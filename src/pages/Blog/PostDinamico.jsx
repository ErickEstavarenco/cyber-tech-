import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc, collection, query, where, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../../../FirebaseConfig";
import "./BlogPost.css"; 

const PostDinamico = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [prevId, setPrevId] = useState(null);
  const [nextId, setNextId] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "blog", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const currentData = docSnap.data();
          setPost(currentData);
          
          // Navegação (Anterior/Próximo)
          if (currentData.dataCriacao) {
            const blogRef = collection(db, "blog");
            const prevQuery = query(blogRef, where("dataCriacao", ">", currentData.dataCriacao), orderBy("dataCriacao", "asc"), limit(1));
            const nextQuery = query(blogRef, where("dataCriacao", "<", currentData.dataCriacao), orderBy("dataCriacao", "desc"), limit(1));
            
            const [prevSnap, nextSnap] = await Promise.all([getDocs(prevQuery), getDocs(nextQuery)]);
            if (!prevSnap.empty) setPrevId(prevSnap.docs[0].id);
            if (!nextSnap.empty) setNextId(nextSnap.docs[0].id);
          }
        }
      } catch (error) {
        console.error("Erro:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) return <div className="loading">Carregando...</div>;
  if (!post) return <div className="loading">Post não encontrado.</div>;

  return (
    <div className="blog-post-container">
      <header className="blog-post-header">
        <h1 className="blog-title">{post.titulo}</h1>
        {post.resumo && <p className="blog-subtitle">{post.resumo}</p>}
      </header>

      {/* A imagem de capa foi removida daqui conforme solicitado */}

      <section>
        {Array.isArray(post.conteudo) ? (
          // NOVO FORMATO (BLOCOS)
          post.conteudo.map((bloco, index) => (
            <div key={index}>
              {bloco.type === 'paragraph' && <p className="blog-text">{bloco.content}</p>}
              {bloco.type === 'subtitle' && <h2 className="blog-section-title">{bloco.content}</h2>}
              {bloco.type === 'image' && (
                <div className="blog-image-container">
                  <img src={bloco.content} alt="Imagem do post" className="blog-img" />
                </div>
              )}
            </div>
          ))
        ) : (
          // FORMATO ANTIGO (Texto Simples) - Mantém compatibilidade com posts velhos
          post.conteudo && post.conteudo.split("\n").map((paragrafo, index) => (
            paragrafo.trim() !== "" && <p key={index} className="blog-text">{paragrafo}</p>
          ))
        )}
      </section>

      <nav className="blog-navigation">
        {prevId ? <Link to={`/blog/post/${prevId}`} className="blog-nav-link">← Anterior</Link> : <span className="blog-nav-link disabled">← Anterior</span>}
        {nextId ? <Link to={`/blog/post/${nextId}`} className="blog-nav-link">Próximo →</Link> : <span className="blog-nav-link disabled">Próximo →</span>}
      </nav>
    </div>
  );
};

export default PostDinamico;