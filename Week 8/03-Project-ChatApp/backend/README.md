# Backend - MERN Chat App

## Setup (local)
1. Install dependencies: `npm install`
2. Create `.env` based on `.env.example`
3. Start server: `npm start` (or `npm run dev` for nodemon)

## Endpoints
- POST /api/auth/register {name,email,password}
- POST /api/auth/login {email,password} -> returns {token}
- GET /api/messages/:userId (requires Authorization: Bearer <token>)

## Socket.io
- Connect with token: `io(url, { auth: { token } })`
- Events:
  - client -> server: 'send_message' { to, text }
  - server -> client: 'receive_message' (message object)
  - server -> client: 'presence' (array of online userIds)
