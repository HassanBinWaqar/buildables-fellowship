const express = require("express");
const cron = require("node-cron");
const fs = require("fs");
const path = require("path");

const app = express();
const DATA = path.join(__dirname, "snapshots.json");

function readSnapshots(){
  try {
    return JSON.parse(fs.readFileSync(DATA, "utf8"));
  } catch(e){
    return [];
  }
}

function writeSnapshot(snapshot){
  const arr = readSnapshots();
  arr.unshift(snapshot);
  fs.writeFileSync(DATA, JSON.stringify(arr.slice(0,100), null, 2));
}

app.get("/api/snapshots", (req, res) => {
  res.json(readSnapshots());
});

app.get("/api/snapshots/latest", (req, res) => {
  const arr = readSnapshots();
  res.json(arr[0] || null);
});

cron.schedule("* * * * *", () => {
  const snapshot = { ts: new Date().toISOString(), note: "cron tick every minute" };
  console.log("Cron:", snapshot.ts);
  writeSnapshot(snapshot);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server listening on", PORT));
