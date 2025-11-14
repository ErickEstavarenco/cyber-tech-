// src/pages/Perfil/Perfil.jsx (Corrigido)
import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "./Perfil.module.css";
import { motion } from "framer-motion";

// Firebase imports
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { deleteUser } from "firebase/auth";
import { db, auth } from "../../../FirebaseConfig"; // ajuste caminho se necessário
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Perfil() {
  const { currentUser } = useAuth();
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);

  // 1. ATUALIZADO: O estado 'form' agora usa os nomes corretos
  const [form, setForm] = useState({
    name: "",
    dataNascimento: "", // <-- Era birthDate
    telefone: "",       // <-- Era phone
    apelido: "",        // <-- Era nickname
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
          
          // 2. ATUALIZADO: O 'setForm' agora lê os nomes corretos do Firestore
          setForm({
            name: data.name || "",
            dataNascimento: data.dataNascimento || "", // <-- Era birthDate
            telefone: data.telefone || "",       // <-- Era phone
            apelido: data.apelido || "",        // <-- Era nickname
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
    // ... (código de 'usuário não logado' permanece o mesmo) ...
  }

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleStartEdit = () => setEditing(true);

  const handleCancelEdit = () => {
    // 3. ATUALIZADO: O 'cancelar' também reseta para os nomes corretos
    setForm({
      name: profile?.name || "",
      dataNascimento: profile?.dataNascimento || "", // <-- Era birthDate
      telefone: profile?.telefone || "",       // <-- Era phone
      apelido: profile?.apelido || "",        // <-- Era nickname
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
      
      // 4. ATUALIZADO: O 'updateDoc' agora salva os nomes corretos
      await updateDoc(userRef, {
        name: form.name,
        apelido: form.apelido || "",        // <-- Era nickname
        dataNascimento: form.dataNascimento || "", // <-- Era birthDate
        telefone: form.telefone || "",       // <-- Era phone
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
      // --- CORREÇÃO: ORDEM INVERTIDA ---

      // 1. Delete o documento do Firestore PRIMEIRO.
      // O usuário ainda está logado, então as Regras de Segurança
      // (allow delete: if request.auth.uid == userId) irão funcionar.
      await deleteDoc(doc(db, "users", user.uid));

      // 2. Delete o usuário do Auth DEPOIS.
      await deleteUser(user);

      // 3. Se ambos funcionarem, mostre o sucesso.
      alert("Conta excluída com sucesso.");
      navigate("/");

    } catch (err) {
      console.error("Erro detalhado ao excluir conta:", err);
      console.error("Código do Erro:", err.code);
      
      if (err.code === "auth/requires-recent-login") {
        // Este erro virá do 'deleteUser' (passo 2)
        alert(
          "Atenção: Seus dados foram removidos, mas a conta de autenticação requer um novo login para ser excluída. Por favor, faça login e tente excluir novamente."
        );
      } else if (err.code === "permission-denied" || err.code === "missing-or-insufficient-permissions") {
         // Este erro virá do 'deleteDoc' (passo 1)
         alert(
          "Erro de permissão ao tentar excluir seus dados. Verifique as regras do Firestore."
         );
      } else {
        alert(
          "Não foi possível excluir a conta automaticamente. Tente novamente mais tarde ou contate o suporte."
        );
      }
    }
  };

  return (
    <div className={styles.container}>
      {/* ... (header 'Meu Perfil' permanece o mesmo) ... */}
      <motion.div
        className={styles.headerCard}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <h1>Meu Perfil</h1>
          <p className={styles.subtitle}>Visualize e edite suas informações</p>
        </div>
      </motion.div>

      <div className={styles.content}>
        <motion.div
          className={styles.profileCard}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* 5. ATUALIZADO: Modo de Exibição (lendo os nomes corretos) */}
          {!editing ? (
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
                <button className="btn primary" onClick={handleStartEdit}>
                  Editar perfil
                </button>
                <button className="btn danger" onClick={handleDeleteAccount}>
                  Excluir conta
                </button>
              </div>
            </>
          ) : (
            /* 6. ATUALIZADO: Modo de Edição (usando os nomes corretos nos inputs) */
            <>
              <div className={styles.formRow}>
                <label>Nome completo</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nome completo"
                />
              </div>

              <div className={styles.formRow}>
                <label>Apelido</label>
                <input name="apelido" value={form.apelido} onChange={handleChange} placeholder="Como prefere ser chamado" />
              </div>

              <div className={styles.formRow}>
                <label>Data de nascimento</label>
                <input name="dataNascimento" value={form.dataNascimento} onChange={handleChange} placeholder="AAAA-MM-DD" />
              </div>

              <div className={styles.formRow}>
                <label>Telefone</label>
                <input name="telefone" value={form.telefone} onChange={handleChange} placeholder="(xx) xxxxx-xxxx" />
              </div>

              <div className={styles.actions}>
                <button className="btn primary" onClick={handleSave} disabled={saving}>
                  {saving ? "Salvando..." : "Salvar"}
                </button>
                <button className="btn ghost" onClick={handleCancelEdit} disabled={saving}>
                  Cancelar
                </button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}