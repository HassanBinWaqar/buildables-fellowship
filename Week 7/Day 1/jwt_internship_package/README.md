# JWT Authentication — Professional MERN Internship Task
**Author:** Hassan Bin Waqar  
**Week 07 (Day 1) — JWT Authentication**  
**Project:** Secure Express API with JWT (MERN-friendly)

---

## Project Overview (Humanized & Structured)
This package includes a professional, production-minded JWT authentication implementation using **Node.js**, **Express**, and **Mongoose (MongoDB)**. It contains:
- Cleanly organized source code with authentication flows
- Middleware for token verification and role-based access skeleton
- Secure handling of secrets via environment variables
- Instructions for setup, running, and testing (Postman / curl)
- Theory, step-by-step explanation and security best-practices
- A short PDF summary and a Word-style (Markdown) report

This is designed to be **easy to follow**, **scannable**, and **submission-ready** for your internship deliverables.

---

## Folder structure
```
jwt_internship_package/
├─ src/
│  ├─ models/
│  │  └─ User.js
│  ├─ controllers/
│  │  └─ authController.js
│  ├─ middleware/
│  │  └─ auth.js
│  ├─ routes/
│  │  └─ auth.js
│  └─ server.js
├─ .env.example
├─ package.json
├─ README.md  (this file)
└─ report.pdf
```

---

## Key Concepts (Theory — Structured)
### 1. What is JWT?
A JSON Web Token (JWT) is a compact, URL-safe means of representing claims between two parties. It is composed of:
1. **Header** — token type & algorithm
2. **Payload** — claims (e.g., `sub`, `iat`, `exp`, `role`)
3. **Signature** — verifies token integrity using a secret or asymmetric keys

Format: `header.payload.signature` (Base64URL encoded).

### 2. When to use JWT?
- Stateless authentication for APIs, mobile apps, SPAs.
- When you need scalable token-based auth without server-side session storage.
- Not ideal for high-sensitivity sessions requiring immediate revocation unless you implement revocation lists.

### 3. How it works (Flow)
1. Client logs in with credentials.
2. Server verifies credentials and creates a signed JWT.
3. Client stores token (HTTP-only cookie or secure storage) and includes it in subsequent requests (typically `Authorization: Bearer <token>`).
4. Server verifies the token before granting access.

### 4. Security Best Practices
- Use strong, long `JWT_SECRET` and keep it out of repos (.env, Vault).
- Prefer HTTPS always (Secure + HttpOnly cookies).
- Set reasonable `exp` (expiration).
- Implement refresh tokens for long sessions.
- Be cautious with token storage (avoid localStorage for highly-sensitive apps).
- Consider token rotation and server-side revocation lists for logout or compromised keys.
- Use bcrypt for password hashing.

---

## Quick Start — Setup
1. Copy `.env.example` to `.env` and set values:
```
MONGO_URI=mongodb://localhost:27017/jwt_demo
JWT_SECRET=replace_with_a_strong_secret
PORT=5000
```
2. Install dependencies:
```bash
npm install
```
3. Start server:
```bash
npm run dev
```
4. Use Postman or curl to test the endpoints as shown below.

---

## Endpoints (Implemented)
- `POST /api/auth/register` — register with `name`, `email`, `password`, `role` (optional)
- `POST /api/auth/login` — login with `email` & `password`, returns `{ token }`
- `GET /api/auth/profile` — protected route (requires valid token)
- `GET /api/auth/admin-only` — protected route that demonstrates role checking

---

## Example curl requests
Register:
```bash
curl -X POST http://localhost:5000/api/auth/register -H "Content-Type: application/json" -d '{"name":"Hassan","email":"hassan@example.com","password":"Password123"}'
```
Login:
```bash
curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json" -d '{"email":"hassan@example.com","password":"Password123"}'
```
Protected (replace TOKEN):
```bash
curl -H "Authorization: Bearer TOKEN" http://localhost:5000/api/auth/profile
```

---

## Notes for Submission
- Add link to your GitHub repository containing the `src/` folder
- Provide a brief demo video or screenshots showing Postman requests (optional but recommended)
- Mention improvements you would add (refresh token rotation, OAuth2 integration, CSRF protection for cookies)

---

For a concise PDF summary and a Word-style report, see `report.pdf` included in the package.

Happy coding — let me know if you want the RBAC expanded, refresh tokens added, or a client-side example (React) integrated.
