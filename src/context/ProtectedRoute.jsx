import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // "Trava" para evitar alerta duplo
  const alertFiredRef = useRef(false);

  useEffect(() => {
    if (loading) {
      return; // Ainda carregando, espere
    }

    // Se carregou, NÃO tem usuário E a trava NÃO foi ativada
    if (!currentUser && !alertFiredRef.current) {
      // ATIVE A TRAVA
      alertFiredRef.current = true;

      // Dispare o alerta (agora só uma vez) e navegue
      alert("Você precisa realizar o Login antes!");
      navigate('/login', { state: { from: location }, replace: true });
    }
  }, [loading, currentUser, navigate, location]);

  // --- Lógica de Renderização ---

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  // Se tem usuário, mostre a página protegida
  if (currentUser) {
    return children;
  }

  // Se não tem usuário, o useEffect acima está cuidando do redirect.
  return <div className="loading">Redirecionando...</div>;
};

export default ProtectedRoute;