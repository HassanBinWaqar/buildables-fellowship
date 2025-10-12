# Node.js & Express – Detailed Notes

## 1. Node.js fundamentals
- V8 engine executes JS; Node provides libuv event loop, async I/O.
- `package.json` fields: name, version, scripts, dependencies, devDependencies.
- Useful npm scripts: `"start"`, `"dev": "nodemon server.js"`.

## 2. Modules & project structure
- CommonJS (`require`) vs ESM (`import`) — Node supports ESM when `"type":"module"` in package.json.
- Recommended folder layout:
```
/src
  /controllers
  /models
  /routes
  /middleware
server.js
```

## 3. Express basics
- Create app: `const app = express();`
- Middleware: `app.use(express.json());`
- Routes: `app.get('/api/ping', (req,res)=>res.json({ok:true}))`
- Error handling middleware: function with signature `(err, req, res, next)`

## 4. Security & best practices
- Use `helmet` for security headers.
- CORS: configure `cors()` with origin(s).
- Rate limiting: `express-rate-limit` to mitigate abuse.
- Input validation: `Joi` or `express-validator`.

## 5. Authentication (JWT)
- Flow:
  - User logs in with credentials.
  - Server validates and signs a JWT with secret.
  - Client stores token (HTTP-only cookie recommended) and sends in Authorization header.
- Example verify middleware:
```js
const jwt = require('jsonwebtoken');
function auth(req,res,next){
  const token = req.headers.authorization?.split(' ')[1];
  if(!token) return res.status(401).json({error:'no token'});
  try { req.user = jwt.verify(token, process.env.JWT_SECRET); next(); } catch(e){ res.status(401).json({error:'invalid token'}) }
}
```

## 6. Integrating Socket.io with Express
- Create HTTP server and attach socket.io:
```js
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, { cors: { origin: '*' }});
```
- Auth with sockets: accept token at connection and verify for user identity.

## 7. Logging & monitoring
- Use `morgan` for request logging, `winston` for structured logs.
- Health check routes and metrics endpoints.

