import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Admin.module.css";
// Imports do Firebase
import { db } from "../../../FirebaseConfig";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export default function Notas() {
  const [notas, setNotas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buscarNotas = async () => {
      try {
        const q = query(collection(db, "pontuacoes"), orderBy("data", "desc"));
        const querySnapshot = await getDocs(q);
        
        const listaNotas = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setNotas(listaNotas);
      } catch (error) {
        console.error("Erro ao buscar notas:", error);
      } finally {
        setLoading(false);
      }
    };

    buscarNotas();
  }, []);

  // Função auxiliar para formatar data
  const formatarData = (isoString) => {
    if (!isoString) return "-";
    const data = new Date(isoString);
    return data.toLocaleDateString('pt-BR') + ' ' + data.toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'});
  };

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
        <h1>Histórico de Notas</h1>

        {loading ? (
          <p>Carregando notas...</p>
        ) : notas.length === 0 ? (
          <p>Nenhuma nota registrada ainda.</p>
        ) : (
          <div className={styles.card} style={{overflowX: 'auto'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'left'}}>
              <thead>
                <tr style={{borderBottom: '1px solid #eee'}}>
                  <th style={{padding: '10px'}}>Aluno (Email)</th>
                  <th style={{padding: '10px'}}>Desafio</th>
                  <th style={{padding: '10px'}}>Nota</th>
                  <th style={{padding: '10px'}}>Data</th>
                </tr>
              </thead>
              <tbody>
                {notas.map((nota) => (
                  <tr key={nota.id} style={{borderBottom: '1px solid #f5f5f5'}}>
                    <td style={{padding: '10px'}}>
                      <strong>{nota.nome || "Aluno"}</strong>
                      <br/>
                      <span style={{fontSize: '0.8rem', color: '#666'}}>{nota.email}</span>
                    </td>
                    <td style={{padding: '10px'}}>{nota.desafio}</td>
                    <td style={{padding: '10px'}}>
                      <span style={{
                        fontWeight: 'bold',
                        color: nota.nota / nota.total >= 0.6 ? 'green' : 'red'
                      }}>
                        {nota.nota} / {nota.total}
                      </span>
                    </td>
                    <td style={{padding: '10px', fontSize: '0.9rem'}}>
                      {formatarData(nota.data)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}