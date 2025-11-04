// src/admin/Admin.jsx
import React from 'react';
// Importa o CSS que veio da branch do Victor
import styles from './Admin.css'; 

// MUDANÇA: Usando 'export default'
export default function Admin() {
  return (
    <div className="container">
      <h1>Painel de Administração</h1>
      <p>Esta é uma rota protegida.</p>
      <p>O conteúdo da administração (provavelmente do Victor) virá aqui.</p>
    </div>
  );
}