// src/context/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', color: '#fff' }}>
        <p>Carregando...</p>
      </div>
    );
  }

  // CORREÇÃO: Se não tiver usuário, redireciona DIRETAMENTE sem alert
  if (!currentUser) {
    // "replace" impede que o usuário volte para a página restrita pelo botão "Voltar" do navegador
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Se tiver usuário, renderiza o conteúdo normal
  return children;
};

export default ProtectedRoute;