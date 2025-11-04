import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Importe a autenticação também

// Sua configuração, lendo do .env.local
const firebaseConfig = {
  apiKey: "AIzaSyBQ1i_DyfGcVmMwIZex_L3JBc_dGfF31VE",
  authDomain: "cybertech-ce995.firebaseapp.com",
  projectId: "cybertech-ce995",
  storageBucket: "cybertech-ce995.firebasestorage.app",
  messagingSenderId: "116364534281",
  appId: "1:116364534281:web:ce3588b5a3804f393a0ed8"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta os serviços que você vai usar
export const db = getFirestore(app);
export const auth = getAuth(app); // Exporta a autenticação