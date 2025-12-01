// FirebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getStorage } from "firebase/storage"; // Import do Storage

// ✅ Configurações do Firebase via variáveis de ambiente (.env)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// ✅ 1. Inicializa o Firebase (Obrigatório ser a primeira inicialização)
const app = initializeApp(firebaseConfig);

// ✅ 2. Inicializa serviços principais (Usando a variável 'app' criada acima)
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // Agora está na ordem correta

// ✅ Inicializa o Analytics (apenas se suportado pelo navegador)
isSupported().then((yes) => {
  if (yes) getAnalytics(app);
});

// ✅ Log de verificação (só em dev)
if (import.meta.env.DEV) {
  console.log("🔥 Firebase inicializado com sucesso:", firebaseConfig.projectId);
}

export default app;