import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "./Perfil.module.css";
import { motion } from "framer-motion";

// Firebase imports
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { deleteUser } from "firebase/auth";
import { db, auth } from "../../../FirebaseConfig"; 
import { useNavigate } from "react-router-dom";

export default function Perfil() {
  const { currentUser } = useAuth();
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  
  // 1. CORREÇÃO: Nomes dos campos iguais ao banco (Cadastro.jsx)
  const [form, setForm] = useState({
    name: "",
    dataNascimento: "", 
    telefone: "",       
    apelido: "",        
  });
  
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProfile() {
      if (!currentUser || !currentUser.uid) {
        setProfile(null);
        return;
      }
      try {
        const docRef = doc(db, "users", currentUser.uid);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          const data = snap.data();
          setProfile(data);
          
          // 2. CORREÇÃO: Preenche o form com os dados corretos do banco
          setForm({
            name: data.name || "",
            dataNascimento: data.dataNascimento || "", 
            telefone: data.telefone || "",       
            apelido: data.apelido || "",        
          });
        } else {
          setProfile({ email: currentUser.email, uid: currentUser.uid });
        }
      } catch (err) {
        console.error("Erro ao carregar perfil:", err);
        setProfile({ email: currentUser.email, uid: currentUser.uid });
      }
    }
    loadProfile();
  }, [currentUser]);

  if (!currentUser) {
    return (
      <div className={styles.container}>
        <div className={styles.messageCard}>
          <h2>Você precisa estar logado para ver seu perfil.</h2>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleStartEdit = () => setEditing(true);

  const handleCancelEdit = () => {
    // 3. CORREÇÃO: Reseta usando os nomes corretos
    setForm({
      name: profile?.name || "",
      dataNascimento: profile?.dataNascimento || "", 
      telefone: profile?.telefone || "",       
      apelido: profile?.apelido || "",        
    });
    setEditing(false);
  };

  const handleSave = async () => {
    if (!form.name.trim()) {
      alert("Por favor, informe o nome completo.");
      return;
    }
    setSaving(true);
    try {
      const userRef = doc(db, "users", currentUser.uid);
      
      // 4. CORREÇÃO: Salva no banco com os nomes corretos
      await updateDoc(userRef, {
        name: form.name,
        apelido: form.apelido || "",        
        dataNascimento: form.dataNascimento || "", 
        telefone: form.telefone || "",       
        updatedAt: new Date(),
      });

      setProfile({ ...profile, ...form });
      setEditing(false);
      alert("Perfil atualizado com sucesso!");
    } catch (err) {
      console.error("Erro ao salvar perfil:", err);
      alert("Ocorreu um erro ao salvar. Tente novamente.");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteAccount = async () => {
    const ok = window.confirm(
      "Tem certeza que deseja excluir sua conta? Esta ação é irreversível."
    );
    if (!ok) return;

    const user = auth.currentUser;
    if (!user) {
      alert("Usuário não encontrado. Tente fazer login novamente.");
      return;
    }

    try {
      // Deleta primeiro do Firestore (para não ter erro de permissão)
      await deleteDoc(doc(db, "users", user.uid));
      // Depois deleta do Auth
      await deleteUser(user);
      
      alert("Conta excluída com sucesso.");
      navigate("/");
    } catch (err) {
      console.error("Erro detalhado ao excluir conta:", err);
      if (err.code === "auth/requires-recent-login") {
        alert("Por segurança, faça login novamente antes de excluir a conta.");
      } else {
        alert("Não foi possível excluir a conta. Tente novamente mais tarde.");
      }
    }
  };

  return (
    <div className={styles.container}>
      <motion.div className={styles.headerCard} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
        <div>
          <h1>Meu Perfil</h1>
          <p className={styles.subtitle}>Visualize e edite suas informações</p>
        </div>
      </motion.div>

      <div className={styles.content}>
        <motion.div className={styles.profileCard} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {!editing ? (
            // 5. CORREÇÃO: Exibição correta dos dados
            <>
              <div className={styles.row}>
                <div className={styles.label}>Nome completo</div>
                <div className={styles.value}>{profile?.name || "—"}</div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Apelido</div>
                <div className={styles.value}>{profile?.apelido || "—"}</div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Data de nascimento</div>
                <div className={styles.value}>{profile?.dataNascimento || "—"}</div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Email</div>
                <div className={styles.value}>{profile?.email || currentUser.email}</div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Telefone</div>
                <div className={styles.value}>{profile?.telefone || "—"}</div>
              </div>
              <div className={styles.actions}>
                <button className="btn primary" onClick={handleStartEdit}>Editar perfil</button>
                <button className="btn danger" onClick={handleDeleteAccount}>Excluir conta</button>
              </div>
            </>
          ) : (
            // 6. CORREÇÃO: Inputs ligados aos campos corretos
            <>
              <div className={styles.formRow}>
                <label>Nome completo</label>
                <input name="name" value={form.name} onChange={handleChange} />
              </div>
              <div className={styles.formRow}>
                <label>Apelido</label>
                <input name="apelido" value={form.apelido} onChange={handleChange} placeholder="Como prefere ser chamado" />
              </div>
              <div className={styles.formRow}>
                <label>Data de nascimento</label>
                <input name="dataNascimento" type="date" value={form.dataNascimento} onChange={handleChange} />
              </div>
              <div className={styles.formRow}>
                <label>Telefone</label>
                <input name="telefone" value={form.telefone} onChange={handleChange} placeholder="(xx) xxxxx-xxxx" />
              </div>
              <div className={styles.actions}>
                <button className="btn primary" onClick={handleSave} disabled={saving}>
                  {saving ? "Salvando..." : "Salvar"}
                </button>
                <button className="btn ghost" onClick={handleCancelEdit} disabled={saving}>Cancelar</button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}