// src/admin/Admin.jsx
import React from "react";
// Corrigido: CSS global deve ser importado sem 'styles'
import "./Admin.css";

export default function Admin() {
  return (
    <div className="admin-container">
      <h1 className="admin-title">Painel de Administração</h1>
      <p className="admin-text">Esta é uma rota protegida.</p>
      <p className="admin-text">O conteúdo da administração (provavelmente do Victor) virá aqui.</p>
    </div>
  );
}
