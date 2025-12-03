import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation, Outlet } from "react-router-dom";
import styles from "./Admin.module.css";
// Imports do Firebase
import { db } from "../../FirebaseConfig";
import { collection, getCountFromServer, getDocs, query } from "firebase/firestore";
// Import dos Gráficos
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function Admin() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [stats, setStats] = useState({ users: 0, posts: 0 });
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  // Estado para controlar se a sidebar está recolhida ou não
  const [collapsed, setCollapsed] = useState(false);

  const isDashboard = location.pathname === '/admin';

  useEffect(() => {
    if (!isDashboard) return;

    async function fetchDashboardData() {
      setLoading(true);
      setErrorMsg(null);
      
      try {
        // 1. Buscando Contagens
        const usersColl = collection(db, "users");
        const blogColl = collection(db, "blog");
        
        const [usersSnap, blogSnap] = await Promise.all([
            getCountFromServer(usersColl).catch(() => ({ data: () => ({ count: 0 }) })), 
            getCountFromServer(blogColl).catch(() => ({ data: () => ({ count: 0 }) }))
        ]);

        setStats({
          users: usersSnap.data().count,
          posts: blogSnap.data().count,
        });

        // 2. Buscando Dados do Gráfico
        const pontuacoesRef = collection(db, "pontuacoes");
        const querySnapshot = await getDocs(query(pontuacoesRef));
        
        const desafiosMap = {};

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const nomeDesafio = data.desafio ? data.desafio.split(" - ")[0].trim() : "Geral"; 
          
          if (!desafiosMap[nomeDesafio]) {
            desafiosMap[nomeDesafio] = { name: nomeDesafio, totalNotas: 0, count: 0 };
          }
          desafiosMap[nomeDesafio].totalNotas += Number(data.nota || 0);
          desafiosMap[nomeDesafio].count += 1;
        });

        const dataFormatada = Object.values(desafiosMap).map(item => ({
          name: item.name,
          media: Number((item.totalNotas / item.count).toFixed(1)),
          tentativas: item.count
        })).sort((a, b) => a.name.localeCompare(b.name));

        setChartData(dataFormatada);

      } catch (error) {
        console.error("Erro Dashboard:", error);
        if (error.code === 'permission-denied') {
            setErrorMsg("Acesso negado. Verifique as regras do Firestore.");
        } else {
            setErrorMsg("Erro ao carregar dados.");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, [isDashboard]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className={styles.container}>
      {/* --- NOVA SIDEBAR INSERIDA AQUI --- */}
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
            <Link to="/admin/curtidas" data-tooltip="like" className={styles.navLink}>
              <img src="/curti.png" alt="curti" />
              <span className={styles.linkText}>like</span>
            </Link>
          </li>
        </ul>
      </aside>
      {/* ---------------------------------- */}

      <main className={styles.main}>
        {isDashboard ? (
           <div className="dashboard-content">
             <h1 style={{color: '#333'}}>Visão Geral</h1>
             
             {errorMsg && <p style={{color:'red'}}>{errorMsg}</p>}

             {loading ? <p>Carregando...</p> : (
               <>
                 <div className={styles.cards} style={{marginBottom: '30px', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'}}>
                   <div className={styles.card}>
                     <h3>👥 Alunos</h3>
                     <p style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#095e8b', margin: '10px 0'}}>{stats.users}</p>
                     <p>Cadastrados</p>
                   </div>
                   <div className={styles.card}>
                     <h3>📝 Posts</h3>
                     <p style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#095e8b', margin: '10px 0'}}>{stats.posts}</p>
                     <p>Publicados</p>
                   </div>
                 </div>

                 <div className={styles.card} style={{ minHeight: '400px' }}>
                    <h3>📊 Média de Notas</h3>
                    {chartData.length > 0 ? (
                      <div style={{ width: '100%', height: 300, marginTop: '20px' }}>
                        <ResponsiveContainer>
                          <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" stroke="#666" fontSize={12} />
                            <YAxis domain={[0, 10]} stroke="#666" fontSize={12} />
                            <Tooltip cursor={{fill: '#f3f4f6'}} />
                            <Bar dataKey="media" name="Média" radius={[6, 6, 0, 0]} barSize={50}>
                              {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    ) : (
                      <p style={{marginTop:'20px', color:'#999'}}>Sem dados de notas ainda.</p>
                    )}
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