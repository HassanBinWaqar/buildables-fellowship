# Deployment (Local Instructions + Overview)

This repo includes **local run instructions** only (no deployment steps included per request).

## Local run checklist
- Node.js (v16+) installed
- MongoDB running locally or a connection string to Atlas
- Install dependencies with `npm install` in backend and frontend
- Create `.env` files using `.env.example`
- Start backend: `node server.js` or `npm run dev` (if nodemon)
- Start frontend: `npm start` (create-react-app or Vite-based)

## Basic troubleshooting
- CORS errors: ensure frontend origin allowed in backend cors config.
- Socket connection refused: check backend server is using HTTP server and socket.io attached, and correct client URL.
