# 📘 Node.js Notes (Detailed Guide)

## 1. Introduction to Node.js
- **Node.js** is a JavaScript runtime built on Chrome’s V8 engine.
- It allows JavaScript to run outside the browser.
- Created by **Ryan Dahl** in 2009.
- Commonly used for backend, APIs, real-time apps, microservices, and CLI tools.

### Why Node.js?
- Non-blocking, event-driven architecture.
- High performance for I/O-heavy tasks.
- Large ecosystem (npm).
- Used by companies like Netflix, PayPal, LinkedIn.

---

## 2. Node.js Architecture
- **Single-threaded Event Loop**: Handles multiple requests concurrently.
- **Event Loop**: Manages asynchronous tasks (timers, I/O).
- **Libuv**: C library providing thread pool for background tasks.
- **V8 Engine**: Compiles JS into machine code.

---

## 3. Node.js Modules
### Built-in Modules
- `http`: Create servers.
- `fs`: Work with files.
- `os`: System info.
- `path`: File paths.
- `events`: Event handling.
- `url`: Parse URLs.

### Custom Modules
- Export and import your own functions.

### Third-party Modules
- Installed using npm (e.g., express, nodemon, axios).

---

## 4. npm & package.json
- **npm** (Node Package Manager) manages libraries.
- `npm init -y` creates `package.json`.
- **Dependencies**: Required for production.
- **DevDependencies**: Required only for development (e.g., testing tools).

---

## 5. Creating a REST API with Node.js
Example (vanilla Node):
```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/api" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello API" }));
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(3000, () => console.log("Server running..."));
```

---

## 6. Error Handling
- Use try/catch for synchronous code.
- Use callbacks or `.catch()` for promises.
- Always return proper HTTP status codes (400, 404, 500).

---

## 7. Best Practices
- Keep a clear folder structure (`routes`, `controllers`, `utils`).
- Use environment variables (`dotenv`).
- Validate inputs.
- Handle errors gracefully.
- Avoid blocking the event loop.

---

## 8. Conclusion
Node.js is powerful for full-stack apps, APIs, and real-time systems. Mastering the core before using frameworks like **Express** makes you stand out as a solid backend developer.
