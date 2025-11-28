import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Admin.module.css";

export default function NewBlog() {
  const [titulo, setTitulo] = useState("");
  const [subTitulo, setSubTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagens, setImagens] = useState([]);

  const [collapsed, setCollapsed] = useState(false); // mesmo padrão das outras páginas

  function handleUpload(e) {
    setImagens([...e.target.files]);
  }

  function salvarPost() {
    if (!titulo || !descricao) {
      alert("Preencha tudo antes de salvar.");
      return;
    }

    console.log("Post salvo:", { titulo, subTitulo, descricao, imagens });
    alert("Post salvo (apenas no console por enquanto).");
  }

  return (
    <div className={styles.container}>

      {/* SIDEBAR — mesma lógica das outras telas */}
      <aside className={`${styles.sidebar} ${collapsed ? styles.sidebarCollapsed : ""}`}>

        {/* Botão hambúrguer — SOMENTE EM TELAS GRANDES */}
        <button
          className={styles.toggleBtn}
          onClick={() => setCollapsed(prev => !prev)}
          aria-label={collapsed ? "Abrir menu" : "Fechar menu"}
        >
          <img src="/menu.png" alt="menu" />
        </button>

        <h2 className={styles.title}>Administrador</h2>

        <ul className={styles.navList}>
          <li>
            <Link to="/admin" data-tooltip="Home" className={styles.navLink}>
              <img src="/casa.png" alt="Home" />
              <span className={styles.linkText}>Home</span>
            </Link>
          </li>

          <li>
            <Link to="/admin/notas" data-tooltip="Notas" className={styles.navLink}>
              <img src="/estrela.png" alt="Notas" />
              <span className={styles.linkText}>Notas</span>
            </Link>
          </li>

          <li>
            <Link to="/admin/newblog" data-tooltip="Blog" className={styles.navLink}>
              <img src="/blog.png" alt="Blog" />
              <span className={styles.linkText}>Blog</span>
            </Link>
          </li>

          <li>
            <Link to="/admin/curtidas" data-tooltip="like" className={styles.navLink}>
              <img src="/curti.png" alt="Blog" />
              <span className={styles.linkText}>like</span>
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main */}
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

          <label>Subtítulo:</label>
          <input
            type="text"
            value={subTitulo}
            onChange={(e) => setSubTitulo(e.target.value)}
            className={styles.input}
            placeholder="Digite o subtítulo do post"
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
