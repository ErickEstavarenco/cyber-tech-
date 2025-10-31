// src/context/AuthContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from '../../FirebaseConfig.js'; // Ajuste o caminho se necessário

// 1. Crie o Contexto
const AuthContext = createContext();

// 2. Crie o Provedor (o componente que vai "envolver" seu app)
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de loading para saber se já checamos o auth

  useEffect(() => {
    // 3. ESTA É A LÓGICA DO onAuthStateChanged
    // Esta função é um "ouvinte" do Firebase.
    // Ela é chamada sempre que o estado de login muda (login, logoff)
    // e também UMA VEZ quando o app carrega.
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      // 'user' será um objeto se estiver logado, ou 'null' se estiver deslogado.
      
      if (user) {
        // --- Usuário está LOGADO ---
        // Temos o 'user' do Auth (com uid, email), mas precisamos do 'name' do Firestore.
        
        // 1. Crie a referência para o documento do usuário no Firestore
        const userDocRef = doc(db, "users", user.uid);
        
        // 2. Busque o documento
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
          // 3. Se o documento existe, salve os dados dele (que incluem o 'name' e 'role')
          //    no nosso estado 'currentUser'.
          setCurrentUser(docSnap.data());
        } else {
          // Isso não deveria acontecer se o cadastro estiver correto,
          // mas é bom ter um fallback.
          setCurrentUser(user); // Salva pelo menos os dados do Auth
        }

      } else {
        // --- Usuário está DESLOGADO ---
        setCurrentUser(null);
      }
      
      // 4. Já terminamos de verificar, podemos tirar o loading
      setLoading(false);
    });

    // 5. Função de limpeza
    // Isso é importante para remover o "ouvinte" quando o componente
    // for desmontado, evitando vazamento de memória.
    return () => unsubscribe();

  }, []); // O array vazio [] garante que este useEffect rode apenas uma vez

  // 6. O 'value' é o que será disponibilizado para todos os componentes
  //    que estiverem "dentro" deste Provedor.
  const value = {
    currentUser,
    loading // Exportamos 'loading' caso você queira mostrar um "spinner"
  };

  // Não renderiza nada até que a verificação inicial do Firebase termine
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// 7. Crie um Hook customizado para facilitar o uso do contexto
//    (Assim, em vez de importar 'useContext' e 'AuthContext',
//     só importamos 'useAuth')
export const useAuth = () => {
  return useContext(AuthContext);
};