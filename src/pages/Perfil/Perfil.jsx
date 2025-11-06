// src/pages/Perfil/Perfil.jsx
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
  const [form, setForm] = useState({
    name: "",
    birthDate: "",
    phone: "",
    nickname: "",
  });
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Carrega dados do Firestore se existir currentUser.uid
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
          setForm({
            name: data.name || "",
            birthDate: data.birthDate || "",
            phone: data.phone || "",
            nickname: data.nickname || "",
          });
        } else {
          // fallback — preenche com currentUser (se houver)
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

  // Handlers
  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleStartEdit = () => setEditing(true);
  const handleCancelEdit = () => {
    // re-sincroniza formulário com profile
    setForm({
      name: profile?.name || "",
      birthDate: profile?.birthDate || "",
      phone: profile?.phone || "",
      nickname: profile?.nickname || "",
    });
    setEditing(false);
  };

  const handleSave = async () => {
    // validações simples
    if (!form.name.trim()) {
      alert("Por favor, informe o nome completo.");
      return;
    }
    setSaving(true);
    try {
      const userRef = doc(db, "users", currentUser.uid);
      await updateDoc(userRef, {
        name: form.name,
        nickname: form.nickname || "",
        birthDate: form.birthDate || "",
        phone: form.phone || "",
        updatedAt: new Date(),
      });
      // atualizar estado local
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

    try {
      // Deleta documento do Firestore primeiro (para evitar orphan)
      await deleteDoc(doc(db, "users", currentUser.uid));

      // Tenta deletar usuário do Firebase Auth
      await deleteUser(auth.currentUser);
      // se deletou com sucesso, desloga e redireciona
      alert("Conta excluída com sucesso.");
      navigate("/");
    } catch (err) {
      console.error("Erro ao excluir conta:", err);
      // deleteUser falha se o usuário precisar reautenticar
      if (err.code === "auth/requires-recent-login" || err.code === "auth/requires-recent-login") {
        alert(
          "Por motivos de segurança, é necessário fazer login novamente antes de excluir a conta. Por favor, faça logout e entre novamente e tente excluir."
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
        {/* Card com informações */}
        <motion.div
          className={styles.profileCard}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Exibição quando não editando */}
          {!editing ? (
            <>
              <div className={styles.row}>
                <div className={styles.label}>Nome completo</div>
                <div className={styles.value}>{profile?.name || "—"}</div>
              </div>

              <div className={styles.row}>
                <div className={styles.label}>Apelido</div>
                <div className={styles.value}>{profile?.nickname || "—"}</div>
              </div>

              <div className={styles.row}>
                <div className={styles.label}>Data de nascimento</div>
                <div className={styles.value}>{profile?.birthDate || "—"}</div>
              </div>

              <div className={styles.row}>
                <div className={styles.label}>Email</div>
                <div className={styles.value}>{profile?.email || currentUser.email}</div>
              </div>

              <div className={styles.row}>
                <div className={styles.label}>Telefone</div>
                <div className={styles.value}>{profile?.phone || "—"}</div>
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
            /* Formulário de edição */
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
                <input name="nickname" value={form.nickname} onChange={handleChange} placeholder="Como prefere ser chamado" />
              </div>

              <div className={styles.formRow}>
                <label>Data de nascimento</label>
                <input name="birthDate" value={form.birthDate} onChange={handleChange} placeholder="AAAA-MM-DD" />
              </div>

              <div className={styles.formRow}>
                <label>Telefone</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="(xx) xxxxx-xxxx" />
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
