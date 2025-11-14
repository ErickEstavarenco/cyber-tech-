import React, { useEffect, useRef } from 'react'; // 1. Importe o useRef
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // 2. Crie a "trava" (ref) para o alerta
  // O valor .current persiste entre renderizações
  const alertFiredRef = useRef(false);

  useEffect(() => {
    // 3. Só execute a lógica se o carregamento terminou
    if (loading) {
      return; // Ainda carregando, espere
    }

    // 4. Se carregou, NÃO tem usuário E a trava NÃO foi ativada
    if (!currentUser && !alertFiredRef.current) {
      // 5. ATIVE A TRAVA IMEDIATAMENTE
      // Agora, mesmo que o StrictMode rode este efeito de novo,
      // a condição !alertFiredRef.current será falsa.
      alertFiredRef.current = true;

      // 6. Dispare o alerta (agora só uma vez) e navegue
      alert("Você precisa realizar o Login antes!");
      navigate('/login', { state: { from: location }, replace: true });
    }
  }, [loading, currentUser, navigate, location]); // Dependências do efeito

  // --- Lógica de Renderização (o que mostrar na tela) ---

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  // Se tem usuário, mostre a página protegida
  if (currentUser) {
    return children;
  }

  // Se não tem usuário, o useEffect acima está cuidando do redirect.
  // Mostre "Redirecionando" enquanto isso acontece.
  return <div className="loading">Redirecionando...</div>;
};

export default ProtectedRoute;