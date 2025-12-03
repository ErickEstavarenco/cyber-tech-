import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation, Outlet } from "react-router-dom";
import styles from "./Admin.module.css";
// Imports do Firebase
import { db } from "../../FirebaseConfig";
import { collection, getCountFromServer, getDocs } from "firebase/firestore";
// Import dos Gráficos (Certifique-se de ter instalado: npm install recharts)
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Admin() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [stats, setStats] = useState({ users: 0, posts: 0 });
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  const isDashboard = location.pathname === '/admin';

  useEffect(() => {
    if (!isDashboard) return;

    async function fetchDashboardData() {
      try {
        // 1. Contagens
        const usersSnap = await getCountFromServer(collection(db, "users"));
        const blogSnap = await getCountFromServer(collection(db, "blog"));

        setStats({
          users: usersSnap.data().count,
          posts: blogSnap.data().count,
        });

        // 2. Dados do Gráfico
        const querySnapshot = await getDocs(collection(db, "pontuacoes"));
        const desafiosMap = {};

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const nomeDesafio = data.desafio ? data.desafio.split(" - ")[0] : "Geral"; 
          
          if (!desafiosMap[nomeDesafio]) {
            desafiosMap[nomeDesafio] = { name: nomeDesafio, totalNotas: 0, count: 0 };
          }
          desafiosMap[nomeDesafio].totalNotas += Number(data.nota);
          desafiosMap[nomeDesafio].count += 1;
        });

        const dataFormatada = Object.values(desafiosMap).map(item => ({
          name: item.name,
          media: Number((item.totalNotas / item.count).toFixed(1)),
          tentativas: item.count
        })).sort((a, b) => a.name.localeCompare(b.name));

        setChartData(dataFormatada);

      } catch (error) {
        console.error("Erro ao carregar dashboard:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, [isDashboard]);

  const isLinkActive = (path) => {
    if (path === '/admin' && location.pathname === '/admin') return true;
    if (path !== '/admin' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h2>Admin Panel</h2>
        <ul>
          <li className={isLinkActive('/admin') ? styles.active : ''}>
            <Link to="/admin"><span>📊</span> Dashboard</Link>
          </li>
          <li className={isLinkActive('/admin/notas') ? styles.active : ''}>
            <Link to="/admin/notas"><span>⭐</span> Notas</Link>
          </li>
          <li className={isLinkActive('/admin/new-blog') ? styles.active : ''}>
            <Link to="/admin/new-blog"><span>📝</span> Blog</Link>
          </li>
          <li className={isLinkActive('/admin/comentarios') ? styles.active : ''}>
            <Link to="/admin/comentarios"><span>💬</span> Comentários</Link>
          </li>
        </ul>
      </aside>

      <main className={styles.main}>
        {isDashboard ? (
           <div className="dashboard-content">
             <h1 style={{color: '#333'}}>Visão Geral</h1>
             
             {loading ? <p style={{color: '#333'}}>Carregando dados...</p> : (
               <>
                 <div className={styles.cards} style={{marginBottom: '30px', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'}}>
                   <div className={styles.card}>
                     <h3>👥 Alunos</h3>
                     <p style={{fontSize: '2rem', fontWeight: 'bold', color: '#095e8b', margin: '10px 0'}}>{stats.users}</p>
                     <p>Cadastrados</p>
                   </div>
                   <div className={styles.card}>
                     <h3>📝 Posts</h3>
                     <p style={{fontSize: '2rem', fontWeight: 'bold', color: '#095e8b', margin: '10px 0'}}>{stats.posts}</p>
                     <p>Publicados</p>
                   </div>
                 </div>

                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    <div className={styles.card} style={{ minHeight: '350px' }}>
                      <h3>📊 Média de Notas</h3>
                      {chartData.length > 0 ? (
                        <div style={{ width: '100%', height: 250, marginTop: '20px' }}>
                          <ResponsiveContainer>
                            <BarChart data={chartData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" stroke="#888" fontSize={12} />
                              <YAxis domain={[0, 10]} stroke="#888" fontSize={12} />
                              <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '8px'}} />
                              <Bar dataKey="media" fill="#095e8b" name="Média" radius={[4, 4, 0, 0]} barSize={40} />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      ) : (
                        <p>Sem dados de notas ainda.</p>
                      )}
                    </div>

                    <div className={styles.card}>
                      <h3>Ações Rápidas</h3>
                      <div style={{display:'flex', flexDirection:'column', gap:'10px', marginTop:'20px'}}>
                        <button onClick={() => navigate('/admin/newblog')} className={styles.notaBtn}>Criar Novo Post</button>
                        <button onClick={() => navigate('/')} style={{padding: '12px', borderRadius: '10px', border:'1px solid #ccc', background:'transparent', color:'#333', cursor:'pointer', fontWeight:'600'}}>Ir para o Site</button>
                      </div>
                    </div>
                 </div>
               </>
             )}
           </div>
        ) : (
           <Outlet />
        )}
      </main>
    </div>
  );
}