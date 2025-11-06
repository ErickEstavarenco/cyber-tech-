// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../FirebaseConfig.js";

// 🔹 Criação do contexto
const AuthContext = createContext();

// 🔹 Provedor global
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Monitora login / logout no Firebase
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Tenta buscar o perfil no Firestore
          const userDocRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(userDocRef);

          if (docSnap.exists()) {
            setCurrentUser({ uid: user.uid, ...docSnap.data() });
          } else {
            // Se o Firestore não tiver documento, usa os dados básicos
            setCurrentUser({ uid: user.uid, email: user.email });
          }
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error);
          setCurrentUser({ uid: user.uid, email: user.email });
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// 🔹 Hook customizado (para importar com facilidade)
export const useAuth = () => {
  return useContext(AuthContext);
};
