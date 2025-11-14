import React, { useEffect, useRef } from 'react'; // 1. Importe o useRef
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedAdminRoute = ({ children }) => {
  const { currentUser, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // 2. Crie a "trava" (ref)
  const alertFiredRef = useRef(false);

  useEffect(() => {
    if (loading) {
      return; // Ainda carregando
    }

    // 3. Verificação de permissão (a lógica principal)
    if (currentUser && isAdmin) {
      return; // É admin, não faz nada, deixa renderizar
    }

    // --- Lógica de Redirecionamento (só roda se não for admin) ---

    // 4. Se o alerta AINDA NÃO foi disparado
    if (!alertFiredRef.current) {
      // 5. ATIVE A TRAVA
      alertFiredRef.current = true;

      // 6. Verifique POR QUE redirecionar
      if (!currentUser) {
        // Se não está logado
        alert("Você precisa realizar o Login antes!");
        navigate('/login', { state: { from: location }, replace: true });
      } else {
        // Se está logado, mas NÃO é admin
        alert("Você não tem permissão para acessar esta área.");
        navigate('/', { replace: true }); // Manda para a Home
      }
    }
  }, [loading, currentUser, isAdmin, navigate, location]);

  // --- Lógica de Renderização ---

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  // Se for admin, mostre a página
  if (currentUser && isAdmin) {
    return children;
  }

  // Se não for admin, o useEffect está tratando o redirect
  return <div className="loading">Redirecionando...</div>;
};

export default ProtectedAdminRoute;