// src/context/ProtectedAdminRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedAdminRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();
  
  // Seu UID de Administrador
  const ADMIN_UID = "SswilmG3ZQPAfIfCaA4NohaKZzM2"; 

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', color: '#fff' }}>
        <p>Carregando...</p>
      </div>
    );
  }

  // 1. Se não estiver logado -> Manda para o Login
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 2. Se estiver logado mas NÃO for o admin -> Manda para a Home
  if (currentUser.uid !== ADMIN_UID) {
    return <Navigate to="/" replace />;
  }

  // 3. Se for admin -> Acesso liberado
  return children;
};

export default ProtectedAdminRoute;