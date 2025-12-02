import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  doc, 
  getDoc, 
  collection, 
  query, 
  where, 
  orderBy, 
  limit, 
  getDocs 
} from "firebase/firestore";
import { db } from "../../../FirebaseConfig";
import "./BlogPost.css"; 

const PostDinamico = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Estados para navegação
  const [prevId, setPrevId] = useState(null);
  const [nextId, setNextId] = useState(null);

  useEffect(() => {
    const fetchPostAndNeighbors = async () => {
      setLoading(true);
      setPrevId(null);
      setNextId(null);

      try {
        const docRef = doc(db, "blog", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const currentData = docSnap.data();
          setPost(currentData);

          if (currentData.dataCriacao) {
            const blogRef = collection(db, "blog");

            // --- LÓGICA INVERTIDA ---
            
            const prevQuery = query(
              blogRef,
              where("dataCriacao", ">", currentData.dataCriacao),
              orderBy("dataCriacao", "asc"),
              limit(1)
            );
            const prevSnap = await getDocs(prevQuery);
            if (!prevSnap.empty) {
              setPrevId(prevSnap.docs[0].id);
            }

            const nextQuery = query(
              blogRef,
              where("dataCriacao", "<", currentData.dataCriacao),
              orderBy("dataCriacao", "desc"),
              limit(1)
            );
            const nextSnap = await getDocs(nextQuery);
            if (!nextSnap.empty) {
              setNextId(nextSnap.docs[0].id);
            }
          }
        } else {
          console.log("Post não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar post ou navegação:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostAndNeighbors();
  }, [id]);

  if (loading) return <div className="loading">Carregando conteúdo...</div>;
  if (!post) return <div className="loading">Post não encontrado.</div>;

  return (
    <div className="blog-post-container">
      
      <header className="blog-post-header">
        <h1 className="blog-title">{post.titulo}</h1>
        {post.resumo && <p className="blog-subtitle">{post.resumo}</p>}
      </header>

      {post.imagemUrl && (
        <div className="blog-image-container">
          <img 
            src={post.imagemUrl} 
            alt={post.titulo} 
            className="blog-img" 
          />
        </div>
      )}

      <section>
        {post.conteudo.split("\n").map((paragrafo, index) => (
          paragrafo.trim() !== "" && (
            <p key={index} className="blog-text">
              {paragrafo}
            </p>
          )
        ))}
      </section>

      {/*  NAVEGAÇÃO  */}
      <nav className="blog-navigation">
        {prevId ? (
          <Link to={`/blog/post/${prevId}`} className="blog-nav-link">
            <img src="/flecha1.png" alt="Anterior" className="nav-icon" /> Anterior
          </Link>
        ) : (
          <span className="blog-nav-link disabled" style={{opacity: 0.5, cursor: 'default'}}>
             <img src="/flecha1.png" alt="" className="nav-icon" /> Anterior
          </span>
        )}

        {/*<Link to="/blog" className="blog-nav-link" style={{fontSize: '0.9rem', color: '#666'}}>
          Menu
        </Link> */}

        {nextId ? (
          <Link to={`/blog/post/${nextId}`} className="blog-nav-link">
            Próximo <img src="/flecha2.png" alt="Próximo" className="nav-icon" />
          </Link>
        ) : (
          <span className="blog-nav-link disabled" style={{opacity: 0.5, cursor: 'default'}}>
            Próximo <img src="/flecha2.png" alt="" className="nav-icon" />
          </span>
        )}
      </nav>

    </div>
  );
};

export default PostDinamico;