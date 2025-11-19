import React from "react";
import { Link } from "react-router-dom";
import styles from "../Admin.module.css";

export default function Notas() {
  const alunos = [
    { nome: "Victor", notas: ["10", "5", "5", "7"] },
    { nome: "Carlos", notas: ["", "", "", ""] },
    { nome: "Guilherme", notas: ["", "", "", ""] }
  ];

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

      {/* Conteúdo principal */}
      <main className={styles.main}>
        <h1>Gestão de Notas</h1>

        {alunos.map((aluno, index) => (
          <div key={index} className={styles.card}>
            <h3>{aluno.nome}</h3>

            <div className={styles.notasLinha}>
              {aluno.notas.map((_, i) => (
                <div key={i} className={styles.notaBox}></div>
              ))}
            </div>

            <button className={styles.notaBtn}>Salvar</button>
          </div>
        ))}
      </main>
    </div>
  );
}
