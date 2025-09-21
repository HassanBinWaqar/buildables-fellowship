# 03 - Middleware

## What is middleware?
Functions that execute during request-response cycle with access to req, res, next.

### Types
- Application-level middleware
- Router-level middleware
- Error-handling middleware (4 args)
- Built-in middleware (express.json, express.urlencoded)
- Third-party middleware (cors, morgan, helmet)

Example:
```js
app.use(express.json());
app.use((req, res, next) => { console.log(req.method, req.url); next(); });
```