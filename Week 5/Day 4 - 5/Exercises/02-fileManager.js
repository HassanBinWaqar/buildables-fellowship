const fs = require("fs");

// Write
fs.writeFileSync("example.txt", "Hello, this is Node.js File Manager!");

// Append
fs.appendFileSync("example.txt", "\nAppended text...");

// Read
const data = fs.readFileSync("example.txt", "utf-8");
console.log("File content:", data);

// Delete
// fs.unlinkSync("example.txt");
