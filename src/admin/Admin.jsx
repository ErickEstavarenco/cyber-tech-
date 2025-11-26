import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Admin.module.css";

export default function Home({ username = "Alexandre", stats = {} }) {
  const {
    media = "8.5/10",
    posts = 15,
    drafts = 3,
    pendingComments = 23,
  } = stats;

  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const gerirNotas = () => navigate("/admin/notas");
  const gerirBlog = () => navigate("/admin/newblog");
  const moderar = () => navigate("/admin/comentarios");

  return (
    <div className={styles.container}>
      <aside
        className={`${styles.sidebar} ${
          collapsed ? styles.sidebarCollapsed : ""
        }`}
      >
        <button
          className={styles.toggleBtn}
          onClick={() => setCollapsed((prev) => !prev)}
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
            <Link
              to="/admin/notas"
              data-tooltip="Notas"
              className={styles.navLink}
            >
              <img src="/estrela.png" alt="Notas" />
              <span className={styles.linkText}>Notas</span>
            </Link>
          </li>

          <li>
            <Link
              to="/admin/newblog"
              data-tooltip="Blog"
              className={styles.navLink}
            >
              <img src="/blog.png" alt="Blog" />
              <span className={styles.linkText}>Blog</span>
            </Link>
          </li>

          <li>
            <Link
              to="/admin/comentarios"
              data-tooltip="Comentários"
              className={styles.navLink}
            >
              <img src="/comentarios.png" alt="Comentários" />
              <span className={styles.linkText}>Comentários</span>
            </Link>
          </li>
        </ul>
      </aside>

      <main className={styles.main}>
        <h1>
          Bem-vindo, <span>{username}!</span>
        </h1>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Gestão de Notas</h3>
            <p>
              Média geral: <strong>{media}</strong>
            </p>
            <p>Últimas notas submetidas hoje.</p>
            <button onClick={gerirNotas}>Gerir Notas</button>
          </div>

          <div className={styles.card}>
            <h3>Gestão de Blog</h3>
            <p>
              Total de <strong>{posts} posts</strong>
            </p>
            <p>{drafts} rascunhos por publicar.</p>
            <button onClick={gerirBlog}>Gerir Blog</button>
          </div>

          <div className={styles.card}>
            <h3>Moderação de Comentários</h3>
            <p>
              <strong>{pendingComments}</strong> comentários pendentes
            </p>
            <p className={styles.warning}>Moderação necessária.</p>
            <button className={styles.red} onClick={moderar}>
              Moderar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
