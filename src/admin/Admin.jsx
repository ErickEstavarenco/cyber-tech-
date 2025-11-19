import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Admin.module.css";

export default function Home({ username = "Alexandre", stats = {} }) {
  const { media = "8.5/10", posts = 15, drafts = 3, pendingComments = 23 } = stats;
  const navigate = useNavigate();

  // Navegação dos cards
  function gerirNotas() {
    navigate("/admin/notas");
  }

  function gerirBlog() {
    navigate("/admin/newblog");
  }

  function moderar() {
    navigate("/admin/comentarios");
  }

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2>Administrador</h2>
        <ul>
          <li className={styles.active}>
            <Link to="/admin">
              <span><img src="public/casa.png" alt="" /></span> Home
            </Link>          
          </li>

          <li>
            <Link to="/admin/notas">
              <span><img src="public/estrela.png" alt="" /></span> Notas
            </Link>
          </li>

          <li>
            <Link to="/admin/newblog">
              <span><img src="public/blog.png" alt="" /></span> Blog
            </Link>
          </li>

          <li>
            <Link to="/admin/comentarios">
              <span><img src="public/comentarios.png" alt="" /></span> Comentários
            </Link>
          </li>
        </ul>
      </aside>

      {/* Conteúdo Principal */}
      <main className={styles.main}>
        <h1>
          Bem-vindo, <span>{username}!</span>
        </h1>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Gestão de Notas</h3>
            <p>Média geral: <strong>{media}</strong></p>
            <p>Últimas notas submetidas hoje.</p>
            <button onClick={gerirNotas}>Gerir Notas</button>
          </div>

          <div className={styles.card}>
            <h3>Gestão de Blog</h3>
            <p>Total de <strong>{posts} posts</strong></p>
            <p>{drafts} rascunhos por publicar.</p>
            <button onClick={gerirBlog}>Gerir Blog</button>
          </div>

          <div className={styles.card}>
            <h3>Moderação de Comentários</h3>
            <p><strong>{pendingComments}</strong> comentários pendentes</p>
            <p className={styles.warning}>Moderação necessária.</p>
            <button className={styles.red} onClick={moderar}>Moderar</button>
          </div>
        </div>
      </main>
    </div>
  );
}
