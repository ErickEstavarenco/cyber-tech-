import React, { useEffect, useRef } from 'react'; // 1. Importe o useRef
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // 2. Crie a "trava" (ref)
  // .current começa como 'false'.
  const alertFired = useRef(false);

  useEffect(() => {
    if (!loading) {
      // 3. Adicione uma verificação:
      // Só execute se o usuário não existir E a trava (alertFired) for 'false'
      if (!currentUser && !alertFired.current) {

        // 4. ATIVE A TRAVA IMEDIATAMENTE
        // Agora, mesmo que o useEffect rode de novo, !alertFired.current será falso.
        alertFired.current = true;

        var msg = "Você precisa realizar o Login antes!";
        alert(msg); // O alerta agora só roda UMA VEZ

        navigate('/login', { replace: true, state: { from: location } });
      }
    }
  }, [loading, currentUser, navigate, location]); // As dependências estão corretas


  
  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if (currentUser) {
    return children;
  }

  return <div className="loading">Redirecionando...</div>;
};

export default ProtectedRoute;