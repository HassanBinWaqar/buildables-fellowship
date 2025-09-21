const fs = require("fs");

function logMessage(message) {
  const timestamp = new Date().toISOString();
  fs.appendFileSync("log.txt", `[${timestamp}] ${message}\n`);
}

logMessage("Server started");
logMessage("User logged in");
