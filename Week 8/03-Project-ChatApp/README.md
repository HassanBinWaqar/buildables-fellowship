# MERN Chat App - SkillForge Chat

This project is a compact full-stack chat app demonstrating:
- User registration/login (JWT)
- Real-time messaging with Socket.io
- React functional components + Hooks
- Tailwind CSS for styling
- MongoDB with Mongoose models

## Run locally
1. Start MongoDB locally or use an Atlas URI.
2. Backend:
   - cd 03-Project-ChatApp/backend
   - npm install
   - copy .env.example to .env and set values
   - npm start
3. Frontend:
   - cd 03-Project-ChatApp/frontend
   - npm install
   - copy .env (set VITE_API)
   - npm run dev
4. Register a user via POST /api/auth/register or use Postman, then login from frontend.

