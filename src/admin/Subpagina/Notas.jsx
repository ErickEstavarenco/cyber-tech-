import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Admin.module.css";

// Firebase
import { db } from "../../../FirebaseConfig";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export default function Notas() {
  const [notas, setNotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [collapsed, setCollapsed] = useState(false); // controla sidebar no desktop
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // NOVO ESTADO AQUI

  useEffect(() => {
    // Listener para redimensionamento de tela
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Função para buscar as notas
    const buscarNotas = async () => {
      try {
        const q = query(collection(db, "pontuacoes"), orderBy("data", "desc"));
        const snapshot = await getDocs(q);

        const listaNotas = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setNotas(listaNotas);
      } catch (error) {
        console.error("Erro ao buscar notas:", error);
      } finally {
        setLoading(false);
      }
    };

    buscarNotas();

    // Limpeza do listener ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const formatarData = (isoString) => {
    if (!isoString) return "-";
    const d = new Date(isoString);
    return (
      d.toLocaleDateString("pt-BR") +
      " " +
      d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
    );
  };

  return (
    <div className={styles.container}>
      {/* SIDEBAR */}
      <aside
        className={`${styles.sidebar} ${
          collapsed ? styles.sidebarCollapsed : ""
        }`}
      >
        {/* Botão só existe no desktop */}
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
            <Link to="/admin/curtidas" data-tooltip="like" className={styles.navLink}>
              <img src="/curti.png" alt="curti" />
              <span className={styles.linkText}>like</span>
            </Link>
          </li>
          
        </ul>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className={styles.main}>
        <h1>Histórico de Notas</h1>

        {loading ? (
          <p>Carregando notas...</p>
        ) : notas.length === 0 ? (
          <p>Nenhuma nota registrada ainda.</p>
        ) : (
          <>
            {isMobile ? (
              /* =======================================
                 VISUALIZAÇÃO MOBILE (CARDS EMPILHADOS)
                 ======================================= */
              <div className={styles.mobileCardsContainer}> {/* Renomeado para melhor clareza */}
                {notas.map((n) => (
                  <div key={n.id} className={styles.notaCard}>
                    <div className={styles.cardHeader}>
                      <span className={styles.alunoNome}>
                        {n.nome || "Aluno"}
                      </span>
                      <span className={styles.alunoEmail}>
                        {n.email}
                      </span>
                      <span
                        className={styles.notaScore}
                        style={{
                          color: n.nota / n.total >= 0.6 ? "green" : "red",
                        }}
                      >
                        {n.nota} / {n.total}
                      </span>
                    </div>
                    <div className={styles.cardDetail}>
                      <strong>Desafio:</strong> {n.desafio}
                    </div>
                    <div className={styles.cardDetail}>
                      <strong>Data:</strong> {formatarData(n.data)}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* =======================================
                 VISUALIZAÇÃO DESKTOP (TABELA) - ORIGINAL
                 ======================================= */
              <div className={styles.card} style={{ overflowX: "auto" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    textAlign: "left",
                    minWidth: "600px", /* Adicionei um min-width para desktop */
                  }}
                >
                  <thead>
                    <tr style={{ borderBottom: "1px solid #eee" }}>
                      <th style={{ padding: "10px" }}>Aluno (Email)</th>
                      <th style={{ padding: "10px" }}>Desafio</th>
                      <th style={{ padding: "10px" }}>Nota</th>
                      <th style={{ padding: "10px" }}>Data</th>
                    </tr>
                  </thead>

                  <tbody>
                    {notas.map((n) => (
                      <tr key={n.id} style={{ borderBottom: "1px solid #f5f5f5" }}>
                        <td style={{ padding: "10px" }}>
                          <strong>{n.nome || "Aluno"}</strong>
                          <br />
                          <span style={{ fontSize: "0.8rem", color: "#666" }}>
                            {n.email}
                          </span>
                        </td>

                        <td style={{ padding: "10px" }}>{n.desafio}</td>

                        <td style={{ padding: "10px" }}>
                          <span
                            style={{
                              fontWeight: "bold",
                              color: n.nota / n.total >= 0.6 ? "green" : "red",
                            }}
                          >
                            {n.nota} / {n.total}
                          </span>
                        </td>

                        <td style={{ padding: "10px", fontSize: "0.9rem" }}>
                          {formatarData(n.data)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}