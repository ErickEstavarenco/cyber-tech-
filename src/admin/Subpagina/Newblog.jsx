import React from "react";
import { Link, useNavigate } from "react-router-dom"; // 👈 importa o roteador
import styles from "../Admin.module.css";

export default function Newblog({ username = "isabella", stats = {} }) {
  const { media = "8.5/10", posts = 15, drafts = 3, pendingComments = 23 } = stats;
  const navigate = useNavigate(); // 👈 permite redirecionar via código

  // Funções agora navegam para rotas reais
  function gerirNotas() {
    navigate("/admin/notas");
  }

  function gerirBlog() {
    navigate("/blog");
  }

  function moderar() {
    navigate("/admin/comentarios");
  }

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2>Admin Panel</h2>
        <ul>
          <li className={styles.active}>
            <span>📊</span> Dashboard
          </li>
          <li>
            <Link to="/admin/notas">
              <span>⭐</span> Notas
            </Link>
          </li>
          <li>
            <Link to="/admin/newblog">
              <span>📝</span> Blog
            </Link>
          </li>
          <li>
            <Link to="/admin/comentarios">
              <span>💬</span> Comentários
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
