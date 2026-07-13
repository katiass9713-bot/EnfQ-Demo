import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAXuAxiMJdZwKc9dmz-ibcn0ljU_TK8FZQ",
  authDomain: "calm-totem-nhh41.firebaseapp.com",
  projectId: "calm-totem-nhh41",
  storageBucket: "calm-totem-nhh41.firebasestorage.app",
  messagingSenderId: "853280505434",
  appId: "1:853280505434:web:aad1e27ae77d8b0da7a263",
};

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
}, "ai-studio-enfq-19741464-bd21-4473-969d-b1a1e6673b9c");

