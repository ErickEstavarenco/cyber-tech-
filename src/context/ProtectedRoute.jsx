// src/context/ProtectedRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // O AuthContext está na mesma pasta

const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  // 1. Espera o Firebase verificar a autenticação
  if (loading) {
    // Idealmente, um componente "Spinner" ou "Carregando..."
    return <div>Carregando...</div>; 
  }

  // 2. Se não houver usuário, redireciona para a página de login
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // 3. Se houver usuário, renderiza a página real
  return children;
};

export default ProtectedRoute;