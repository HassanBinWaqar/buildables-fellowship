import React, { useContext, useEffect, useState, useRef } from 'react';
import { AuthContext, API } from '../App';
import axios from 'axios';
import { getSocket } from '../socket';

export default function ChatPage(){
  const { token, setToken, user } = useContext(AuthContext);
  const [online, setOnline] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const messagesRef = useRef(null);

  useEffect(()=>{
    const socket = getSocket();
    if(!socket) return;
    socket.on('presence', (list) => setOnline(list));
    socket.on('receive_message', (msg) => {
      // if message belongs to current chat, append; else ignore for now
      if(currentChat && (msg.from === currentChat._id || msg.to === currentChat._id)){
        setMessages(m => [...m, msg]);
      }
    });
    return () => {
      socket.off('presence');
      socket.off('receive_message');
    }
  }, [currentChat]);

  useEffect(()=> {
    // load some example contacts (in production load from API)
    async function loadContacts(){
      try{
        // naive approach: fetch all users (not implemented server-side) - here we'll leave mock
        setContacts([{_id:'mockid1', name:'Alice'},{_id:'mockid2', name:'Bob'}]);
      }catch(e){}
    }
    loadContacts();
  }, []);

  async function openChat(contact){
    setCurrentChat(contact);
    setMessages([]);
    // load messages from server
    try{
      const r = await axios.get(API + '/api/messages/' + contact._id, { headers: { Authorization: 'Bearer ' + token } });
      setMessages(r.data);
    }catch(e){ console.warn('Could not load messages', e.message); }
  }

  function sendMessage(e){
    e.preventDefault();
    if(!text || !currentChat) return;
    const socket = getSocket();
    socket.emit('send_message', { to: currentChat._id, text });
    setMessages(m => [...m, { from: user.id, to: currentChat._id, text, createdAt: new Date().toISOString() }]);
    setText('');
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 bg-white p-3 rounded shadow">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Contacts</h3>
          <button onClick={()=>{ localStorage.removeItem('sf_token'); setToken(''); }} className="text-sm text-red-500">Logout</button>
        </div>
        <ul className="space-y-2">
          {contacts.map(c => (
            <li key={c._id}>
              <button onClick={() => openChat(c)} className="w-full text-left p-2 rounded hover:bg-gray-100 flex justify-between">
                <span>{c.name}</span>
                <span className="text-xs">{online.includes(c._id) ? '●' : '○'}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-2">
        <div className="bg-white p-3 rounded shadow flex flex-col" style={{height: '60vh'}}>
          <div className="flex-1 overflow-auto mb-3" ref={messagesRef}>
            {currentChat ? messages.map((m,i)=> (
              <div key={i} className={`mb-2 ${m.from === user.id ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block px-3 py-2 rounded ${m.from === user.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'}`}>
                  {m.text}
                </div>
                <div className="text-xs text-gray-400">{new Date(m.createdAt).toLocaleString()}</div>
              </div>
            )) : <div className="text-gray-500">Select a contact to start chatting</div>}
          </div>
          <form onSubmit={sendMessage} className="flex gap-2">
            <input value={text} onChange={e=>setText(e.target.value)} className="flex-1 p-2 border rounded" placeholder="Type a message..." />
            <button className="px-4 py-2 bg-green-600 text-white rounded">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
