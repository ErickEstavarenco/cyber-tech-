import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Admin.module.css";

// Imports do Firebase
import { db } from "../../../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function NewBlog() {
  const [titulo, setTitulo] = useState("");
  const [subTitulo, setSubTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagemUrl, setImagemUrl] = useState(""); // URL da imagem
  
  const [loading, setLoading] = useState(false);
  const [collapsed, setCollapsed] = useState(false); 

  async function salvarPost() {
    if (!titulo || !descricao) {
      alert("Preencha pelo menos o Título e a Descrição.");
      return;
    }

    // Validação simples para garantir que o link da imagem é válido
    if (imagemUrl && !imagemUrl.startsWith("http")) {
      alert("O link da imagem parece incompleto. Certifique-se de que começa com 'http' ou 'https'.");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "blog"), {
        titulo: titulo,
        resumo: subTitulo,
        conteudo: descricao,
        imagemUrl: imagemUrl, 
        dataCriacao: new Date().toISOString()
      });

      alert("Post publicado com sucesso!");
      
      // Limpa o formulário
      setTitulo("");
      setSubTitulo("");
      setDescricao("");
      setImagemUrl("");

    } catch (error) {
      console.error("Erro ao publicar post:", error);
      alert("Erro ao salvar. Verifique o console.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      {/* SIDEBAR */}
      <aside className={`${styles.sidebar} ${collapsed ? styles.sidebarCollapsed : ""}`}>
        <button className={styles.toggleBtn} onClick={() => setCollapsed(prev => !prev)}>
          <img src="/menu.png" alt="menu" />
        </button>
        <h2 className={styles.title}>Administrador</h2>
        <ul className={styles.navList}>
          <li><Link to="/admin" className={styles.navLink}><img src="/casa.png" alt="" /><span className={styles.linkText}>Home</span></Link></li>
          <li><Link to="/admin/notas" className={styles.navLink}><img src="/estrela.png" alt="" /><span className={styles.linkText}>Notas</span></Link></li>
          <li><Link to="/admin/newblog" className={styles.navLink}><img src="/blog.png" alt="" /><span className={styles.linkText}>Blog</span></Link></li>
          <li><Link to="/admin/curtidas" className={styles.navLink}><img src="/curti.png" alt="" /><span className={styles.linkText}>like</span></Link></li>
        </ul>
      </aside>

      <main className={styles.main}>
        <h1>Novo Post</h1>

        <div className={styles.card}>
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className={styles.input}
            placeholder="Digite o título do post"
          />

          <label>Subtítulo (Resumo):</label>
          <input
            type="text"
            value={subTitulo}
            onChange={(e) => setSubTitulo(e.target.value)}
            className={styles.input}
            placeholder="Digite uma breve descrição"
          />

          <label>Conteúdo:</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className={styles.textarea}
            rows={10}
            placeholder="Escreva o conteúdo do post aqui..."
          />

          {/* MUDANÇA: Agora usamos 'textarea' para o Link da Imagem */}
          <label>Link da Imagem (URL):</label>
          <textarea
            value={imagemUrl}
            onChange={(e) => setImagemUrl(e.target.value)}
            className={styles.input} 
            // Estilo inline para garantir que pareça um campo de texto grande
            style={{ 
                minHeight: '80px', 
                resize: 'vertical', 
                fontFamily: 'monospace', // Ajuda a ler URLs
                fontSize: '0.9rem'
            }}
            placeholder="Cole o link completo aqui (https://...)"
          />
          
          {/* Pré-visualização da imagem */}
          {imagemUrl && (
            <div style={{marginTop: '10px', marginBottom: '20px', textAlign: 'center'}}>
              <p style={{fontSize: '0.9rem', color: '#666', marginBottom: '5px'}}>Pré-visualização:</p>
              <img 
                src={imagemUrl} 
                alt="Preview" 
                style={{maxWidth: '100%', maxHeight: '300px', borderRadius: '8px', objectFit: 'contain'}} 
                onError={(e) => {
                    e.target.style.display = 'none'; // Esconde se quebrar
                    // Adiciona um aviso visual
                    e.target.parentNode.innerHTML += '<p style="color:red; font-size:0.8rem">Erro ao carregar imagem. Verifique o link.</p>'
                }}
              />
            </div>
          )}

          <button 
            className={styles.notaBtn} 
            onClick={salvarPost}
            disabled={loading}
            style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'wait' : 'pointer' }}
          >
            {loading ? "Publicando..." : "Salvar Post"}
          </button>
        </div>
      </main>
    </div>
  );
}