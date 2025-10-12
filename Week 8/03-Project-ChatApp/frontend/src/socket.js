import { io } from 'socket.io-client';
let socket;
export function connectSocket(token, apiUrl){
  socket = io(apiUrl, { auth: { token } });
  return socket;
}
export function getSocket(){ return socket; }
