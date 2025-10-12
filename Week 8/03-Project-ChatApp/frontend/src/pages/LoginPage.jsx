import React, { useState, useContext } from 'react';
import axios from 'axios';
import { API } from '../App';
import { AuthContext } from '../App';

export default function LoginPage(){
  const { setToken } = useContext(AuthContext);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');
  const [mode,setMode] = useState('login'); // or register
  async function submit(e){
    e.preventDefault();
    try{
      if(mode === 'login'){
        const r = await axios.post(API + '/api/auth/login', { email, password });
        setToken(r.data.token);
      } else {
        await axios.post(API + '/api/auth/register', { name, email, password });
        setMode('login');
        alert('Registered. Now log in.');
      }
    }catch(e){ alert(e.response?.data?.error || e.message); }
  }
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">{mode === 'login' ? 'Login' : 'Register'}</h2>
      <form onSubmit={submit} className="space-y-3">
        {mode === 'register' && <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="w-full p-2 border rounded" />}
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded" />
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" className="w-full p-2 border rounded" />
        <div className="flex justify-between items-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">{mode==='login' ? 'Login' : 'Register'}</button>
          <button type="button" onClick={()=>setMode(mode==='login'?'register':'login')} className="text-sm text-blue-600">
            {mode==='login' ? 'Create account' : 'Back to login'}
          </button>
        </div>
      </form>
    </div>
  );
}
