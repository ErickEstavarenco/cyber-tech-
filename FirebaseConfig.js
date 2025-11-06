import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Variáveis globais MANDATÓRIAS fornecidas pelo ambiente
// Usamos um bloco try/catch e um valor padrão para garantir que o código seja executável
let firebaseConfig = {};
try {
    const configString = typeof window.__firebase_config !== 'undefined' ? window.__firebase_config : '{}';
    firebaseConfig = JSON.parse(configString);
} catch (e) {
    console.error("Erro ao parsear a configuração do Firebase:", e);
}

// 1. Inicializa o Firebase
export const app = initializeApp(firebaseConfig);

// 2. Inicializa os serviços
export const auth = getAuth(app);
export const db = getFirestore(app);

// Nota: O listener de autenticação e a chamada de signInWithCustomToken/signInAnonymously
// foram movidos para o AuthContext.jsx para melhor gerenciamento de estado React.