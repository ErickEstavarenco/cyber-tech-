import React, { useEffect, useRef } from 'react';
// 1. Importe o Outlet
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

// Removido 'children' dos props
const ProtectedAdminRoute = () => { 
  const { currentUser, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const alertFiredRef = useRef(false);

  useEffect(() => {
    if (loading) {
      return; // Ainda carregando
    }
    if (currentUser && isAdmin) {
      return; // É admin, não faz nada, deixa renderizar
    }

    // --- Lógica de Redirecionamento ---
    if (!alertFiredRef.current) {
      alertFiredRef.current = true;
      
      if (!currentUser) {
        alert("Você precisa realizar o Login antes!");
        navigate('/login', { state: { from: location }, replace: true });
      } else {
        // Está logado, mas não é admin
        alert("Você não tem permissão para acessar esta área.");
        navigate('/', { replace: true }); 
      }
    }
  }, [loading, currentUser, isAdmin, navigate, location]);


  // --- Lógica de Renderização ---
  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  // 2. A MUDANÇA PRINCIPAL
  // Se for admin, renderiza o <Outlet /> (que vai carregar o <Admin /> layout)
  if (currentUser && isAdmin) {
    return <Outlet />;
  }

  // Se não for, o useEffect está tratando o redirect
  return <div className="loading">Redirecionando...</div>;
};

export default ProtectedAdminRoute;