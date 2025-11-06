// src/admin/Admin.jsx
import React from 'react';

// MUDANÇA CRÍTICA:
// Mude a importação de 'styles from...' para uma importação direta.
// O 'Admin.css' não é um CSS Module.
import './Admin.css'; 

export default function Admin() {
  return (
    // O resto do código (usando classes globais) está correto
    <div className="container">
      <h1>Painel de Administração</h1>
      <p>Esta é uma rota protegida.</p>
      <p>O conteúdo da administração virá aqui.</p>
    </div>
  );
}