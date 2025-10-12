import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { connectSocket, getSocket } from './socket';
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';

export const API = import.meta.env.VITE_API || 'http://localhost:4000';

export const AuthContext = createContext();

export default function App(){
  const [token, setToken] = useState(localStorage.getItem('sf_token') || '');
  const [user, setUser] = useState(null);

  useEffect(()=>{
    if(token){
      localStorage.setItem('sf_token', token);
      // decode minimal info from token (optional)
      try{
        const p = JSON.parse(atob(token.split('.')[1]));
        setUser({ id: p.id, email: p.email, name: p.name });
      }catch(e){}
      const socket = connectSocket(token, API);
      socket.on('connect_error', (err) => console.error('Socket error', err.message));
    } else {
      localStorage.removeItem('sf_token');
      setUser(null);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken, user }}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-3xl p-4">
          {!token ? <LoginPage /> : <ChatPage />}
        </div>
      </div>
    </AuthContext.Provider>
  );
}
