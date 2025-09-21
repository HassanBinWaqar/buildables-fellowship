# Blog API Pro (Week 6 Day 5) - Professional Project

Features:
- User authentication (register/login) with JWT
- CRUD for posts with ownership checks
- Comments on posts
- Validation with express-validator
- Text search, pagination, filtering
- Centralized error handling, logging, helmet and cors

## Setup
1. Copy `.env.example` to `.env` and set `MONGO_URI` and `JWT_SECRET`.
2. Install:
   ```
   npm install
   ```
3. Run:
   ```
   npm run dev
   ```
4. Endpoints:
   - POST /api/auth/register
   - POST /api/auth/login
   - GET /api/posts
   - GET /api/posts/:id
   - POST /api/posts (auth required)
   - PUT /api/posts/:id (auth & owner)
   - DELETE /api/posts/:id (auth & owner)
   - GET /api/posts/:postId/comments
   - POST /api/posts/:postId/comments (auth required)

## Notes
- Project expects MongoDB. For quick tests you can run MongoDB in Docker:
  `docker run -d -p 27017:27017 --name mongo mongo:6.0`
- Passwords are hashed with bcrypt, tokens signed with JWT.
