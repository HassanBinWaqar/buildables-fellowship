const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.end("Welcome to Home Page");
  } else if (req.url === "/about" && req.method === "GET") {
    res.end("About Page");
  } else if (req.url === "/contact" && req.method === "GET") {
    res.end("Contact Page");
  } else {
    res.writeHead(404);
    res.end("Page Not Found");
  }
});

server.listen(4000, () => console.log("Server running at http://localhost:4000"));
