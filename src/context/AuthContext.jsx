// src/context/AuthContext.jsx
// (Substitua todo o seu arquivo por este)

import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../FirebaseConfig"; // Corrigi o caminho, o seu estava errado

// 🔹 Criação do contexto
const AuthContext = createContext();

// 🔹 Provedor global
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false); // 👈 NOVO ESTADO
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDocRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(userDocRef);

          if (docSnap.exists()) {
            const userData = docSnap.data();
            // Define o usuário completo
            setCurrentUser({ uid: user.uid, ...userData });

            // 👈 LÓGICA DE ADMIN ADICIONADA
            if (userData.role === "admin") {
              setIsAdmin(true);
            } else {
              setIsAdmin(false);
            }
          } else {
            // Usuário do Auth existe, mas não do Firestore
            setCurrentUser({ uid: user.uid, email: user.email });
            setIsAdmin(false); // Não é admin
          }
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error);
          setCurrentUser({ uid: user.uid, email: user.email });
          setIsAdmin(false); // Garante que não é admin em caso de erro
        }
      } else {
        // Usuário deslogado
        setCurrentUser(null);
        setIsAdmin(false); // 👈 Garante que deslogou o admin
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    // 👇 Adicione "isAdmin" ao valor do provedor
    <AuthContext.Provider value={{ currentUser, isAdmin, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// 🔹 Hook customizado (para importar com facilidade)
export const useAuth = () => {
  return useContext(AuthContext);
};