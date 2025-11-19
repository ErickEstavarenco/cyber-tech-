import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Admin.module.css";

export default function NewBlog() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagens, setImagens] = useState([]);

  function handleUpload(e) {
    setImagens([...e.target.files]);
  }

  function salvarPost() {
    if (!titulo || !descricao) {
      alert("Preencha tudo antes de salvar.");
      return;
    }
    console.log("Post salvo:", { titulo, descricao, imagens });
    alert("Post salvo (só no console por enquanto).");
  }

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2>Administrador</h2>
        <ul>
          <li className={styles.active}>
            <Link to="/admin">
              <span><img src="/public/casa.png" alt="" /></span> Home
            </Link>
          </li>

          <li>
            <Link to="/admin/notas">
              <span><img src="/public/estrela.png" alt="" /></span> Notas
            </Link>
          </li>

          <li>
            <Link to="/admin/newblog">
              <span><img src="/public/blog.png" alt="" /></span> Blog
            </Link>
          </li>

          <li>
            <Link to="/admin/comentarios">
              <span><img src="/public/comentarios.png" alt="" /></span> Comentários
            </Link>
          </li>
        </ul>
      </aside>
      {/* Conteúdo */}
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

          <label>Sub titulo:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setSubTitulo(e.target.value)}
            className={styles.input}
            placeholder="Digite o sub título do post"
          />

          <label>Descrição:</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className={styles.textarea}
            placeholder="Escreva a descrição..."
          />

          <label>Imagens:</label>
          <input
            type="file"
            multiple
            onChange={handleUpload}
            className={styles.inputFile}
          />

          <button className={styles.notaBtn} onClick={salvarPost}>
            Salvar Post
          </button>
        </div>
      </main>
    </div>
  );
}
