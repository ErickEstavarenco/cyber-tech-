import React from "react";
import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import styles from "./Admin.module.css";
// import { useAuth } from "../context/AuthContext"; // Ajuste o caminho se precisar

export default function Admin() {
  const navigate = useNavigate();
  const location = useLocation(); 

  // const { currentUser } = useAuth();
  // const username = currentUser?.nome || "Admin";

  const isLinkActive = (path) => {
    // Lógica para destacar o link ativo
    if (path === '/admin' && location.pathname === '/admin') return true;
    if (path !== '/admin' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className={styles.container}>
      {/* Sidebar (agora é persistente) */}
      <aside className={styles.sidebar}>
        <h2>Admin Panel</h2>
        {/* <h4>Olá, {username}</h4> */}
        <ul>
          <li className={isLinkActive('/admin') ? styles.active : ''}>
            <Link to="/admin">
              <span>📊</span> Dashboard
            </Link>
          </li>
          <li className={isLinkActive('/admin/notas') ? styles.active : ''}>
            <Link to="/admin/notas">
              <span>⭐</span> Notas
            </Link>
          </li>
          <li className={isLinkActive('/admin/new-blog') ? styles.active : ''}>
            <Link to="/admin/new-blog">
              <span>📝</span> Blog
            </Link>
          </li>
          <li className={isLinkActive('/admin/comentarios') ? styles.active : ''}>
            <Link to="/admin/comentarios">
              <span>💬</span> Comentários
            </Link>
          </li>
        </ul>
      </aside>

      {/* O React Router vai renderizar a sub-página (Dashboard, Notas, etc.) aqui */}
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}