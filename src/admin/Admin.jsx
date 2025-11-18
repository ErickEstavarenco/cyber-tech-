import React from "react";
import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import styles from "./Admin.module.css";

export default function Admin() {
  const navigate = useNavigate();
  const location = useLocation(); 

  // Função para destacar o link ativo na sidebar
  const isLinkActive = (path) => {
    if (path === '/admin' && location.pathname === '/admin') return true;
    if (path !== '/admin' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Verifica se estamos exatamente na raiz '/admin' para mostrar o dashboard
  const isDashboard = location.pathname === '/admin';

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2>Admin Panel</h2>
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

      {/* Área Principal */}
      <main className={styles.main}>
        {/* Se estiver na rota exata '/admin', mostra o conteúdo do Dashboard.
           Caso contrário, mostra o Outlet (as sub-páginas como Notas, Blog, etc.)
        */}
        {isDashboard ? (
           <div className="dashboard-welcome">
             <h1>Dashboard Administrativo</h1>
             <p>Bem-vindo ao painel de controle do CyberTech.</p>
             <p style={{ marginTop: '1rem', color: '#666' }}>
               Selecione uma opção no menu lateral para gerenciar o conteúdo.
             </p>
           </div>
        ) : (
           <Outlet />
        )}
      </main>
    </div>
  );
}