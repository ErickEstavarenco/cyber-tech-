import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

// ATENÇÃO: Recebemos 'children' novamente para renderizar o componente filho
const ProtectedAdminRoute = ({ children }) => { 
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const alertFiredRef = useRef(false);

  // Defina o UID do Admin
  const ADMIN_UID = "SswilmG3ZQPAfIfCaA4NohaKZzM2"; 

  const isAuthorized = currentUser && currentUser.uid === ADMIN_UID;

  useEffect(() => {
    if (loading) return;
    if (isAuthorized) return;

    if (!alertFiredRef.current) {
      alertFiredRef.current = true;
      
      if (!currentUser) {
        alert("Você precisa realizar o Login antes!");
        navigate('/login', { state: { from: location }, replace: true });
      } else {
        alert("Acesso Negado: Esta área é restrita para administradores.");
        navigate('/', { replace: true }); 
      }
    }
  }, [loading, currentUser, isAuthorized, navigate, location]);

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  // SE AUTORIZADO, RENDERIZA O FILHO (<Admin />, <Newblog />, etc.)
  if (isAuthorized) {
    return children;
  }

  return <div className="loading">Redirecionando...</div>;
};

export default ProtectedAdminRoute;