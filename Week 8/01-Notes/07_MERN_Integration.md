# MERN Integration & Real-time (Socket.io) – Detailed Notes

## 1. Architecture
- React (Client) <-> Express API (Backend) <-> MongoDB (Database)
- Socket.io provides a duplex channel: client <-> server via WebSockets (fallbacks to polling).

## 2. Auth across HTTP & WebSocket
- Use JWT for REST endpoints.
- For sockets, send token during connection (`io.connect({ auth: { token }})`) and verify on `connection` event.

## 3. Message flow (Chat App)
- Client emits 'send_message' with payload { to, text }.
- Server stores message in MongoDB and emits to recipient room.
- Maintain online users map keyed by userId -> socketId(s).

## 4. Example server flow
1. Client connects, server verifies token, maps userId -> socketId.
2. Client requests recent messages via REST GET /api/messages/:conversationId
3. When sending, client emits socket event; server saves message and emits to recipient socket.
4. Use rooms for group chats: `socket.join(roomId)`.

## 5. Consistency & ordering
- Use message timestamps and, if necessary, sequence numbers on the server.
- Acknowledge receipts can be implemented via 'message_delivered' and 'message_read' events.

