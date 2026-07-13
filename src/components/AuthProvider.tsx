import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { doc, getDoc, setDoc, onSnapshot, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { v4 as uuidv4 } from 'uuid';

interface CustomUser {
  name: string;
  email: string;
}

interface AuthContextType {
  user: CustomUser | null;
  loading: boolean;
  login: (name: string, email: string) => Promise<void>;
  logout: () => Promise<void>;
  error: string | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => {},
  logout: async () => {},
  error: null,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<CustomUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const unsubscribeRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const restoreSession = async () => {
      const storedEmail = localStorage.getItem('userEmail');
      const storedName = localStorage.getItem('userName');
      const sessionId = localStorage.getItem('sessionId');

      if (storedEmail && storedName && sessionId) {
        try {
          const userDocRef = doc(db, 'users', storedEmail.toLowerCase());
          
          unsubscribeRef.current = onSnapshot(userDocRef, (docSnap) => {
            if (docSnap.exists()) {
              const data = docSnap.data();
              if (data.activeSessionId === sessionId) {
                setUser({ name: storedName, email: storedEmail });
                setLoading(false);
              } else {
                setError('Sessão encerrada: Você fez login em outro dispositivo.');
                handleLocalLogout();
              }
            } else {
               handleLocalLogout();
            }
          });
        } catch (err) {
           handleLocalLogout();
        }
      } else {
        setLoading(false);
      }
    };

    restoreSession();

    return () => {
      if (unsubscribeRef.current) unsubscribeRef.current();
    };
  }, []);

  const handleLocalLogout = () => {
    setUser(null);
    setLoading(false);
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('sessionId');
    if (unsubscribeRef.current) unsubscribeRef.current();
  };

  const login = async (name: string, email: string) => {
    setError(null);
    setLoading(true);
    try {
      const lowerEmail = email.toLowerCase().trim();
      
      const emailsRef = collection(db, 'authorized_emails');
      const q = query(emailsRef, where('email', '==', lowerEmail));
      const querySnapshot = await getDocs(q);
      
      let isAuthorized = !querySnapshot.empty;
      
      if (!isAuthorized && lowerEmail === 'katiass9713@gmail.com') {
         await setDoc(doc(emailsRef, lowerEmail), {
           email: lowerEmail,
           addedBy: 'system',
           addedAt: new Date()
         });
         isAuthorized = true;
      }

      if (!isAuthorized) {
        setError('E-mail não autorizado. Adquira o acesso para continuar.');
        setLoading(false);
        return;
      }

      let deviceId = localStorage.getItem('deviceId');
      if (!deviceId) {
        deviceId = uuidv4();
        localStorage.setItem('deviceId', deviceId);
      }

      const userDocRef = doc(db, 'users', lowerEmail);
      const userDocSnap = await getDoc(userDocRef);
      
      let devices: string[] = [];
      if (userDocSnap.exists()) {
        const data = userDocSnap.data();
        devices = data.devices || [];
      }

      if (!devices.includes(deviceId)) {
        if (devices.length >= 3) {
           setError('Limite de 3 dispositivos atingido. Você não pode logar em novos dispositivos.');
           setLoading(false);
           return;
        } else {
           devices.push(deviceId);
        }
      }

      const newSessionId = uuidv4();
      
      await setDoc(userDocRef, {
        name,
        email: lowerEmail,
        activeSessionId: newSessionId,
        devices: devices,
        lastLogin: new Date()
      }, { merge: true });

      localStorage.setItem('userEmail', lowerEmail);
      localStorage.setItem('userName', name);
      localStorage.setItem('sessionId', newSessionId);
      
      setUser({ name, email: lowerEmail });
      
      if (unsubscribeRef.current) unsubscribeRef.current();
      unsubscribeRef.current = onSnapshot(userDocRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.activeSessionId !== newSessionId) {
            setError('Sessão encerrada: Você fez login em outro dispositivo.');
            handleLocalLogout();
          }
        }
      });
      
      setLoading(false);

    } catch (err: any) {
      console.error("Login error details:", err);
      const isNetworkError = err?.code === 'unavailable' || 
                             err?.message?.toLowerCase().includes('could not reach') || 
                             err?.message?.toLowerCase().includes('unavailable') ||
                             err?.message?.toLowerCase().includes('network');
                             
      if (isNetworkError) {
        setError('Não foi possível conectar ao banco de dados. Se você usa bloqueadores de anúncios (AdBlock, uBlock, Brave Shields) ou antivírus, por favor desative-os ou clique no botão de "abrir em nova aba" no topo do navegador.');
      } else {
        setError('Ocorreu um erro ao tentar fazer o login. Por favor, tente novamente.');
      }
      setLoading(false);
    }
  };

  const logoutAction = async () => {
    handleLocalLogout();
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout: logoutAction, error }}>
      {children}
    </AuthContext.Provider>
  );
};
