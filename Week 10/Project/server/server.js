const express = require("express");
const cron = require("node-cron");
const fs = require("fs");
const path = require("path");

const app = express();
const DATA = path.join(__dirname, "snapshots.json");
const SAMPLE = path.join(__dirname, "sample_headlines.json");

function readJSON(p){ try { return JSON.parse(fs.readFileSync(p,"utf8")); } catch(e){ return []; } }
function writeJSON(p, obj){ fs.writeFileSync(p, JSON.stringify(obj, null, 2)); }

function getLatestHeadlines(){
  // In real app: fetch from news API. Here read sample file.
  return readJSON(SAMPLE);
}

function appendSnapshot(snapshot){
  const arr = readJSON(DATA);
  arr.unshift(snapshot);
  writeJSON(DATA, arr.slice(0,100));
}

app.get("/api/snapshots", (req, res) => res.json(readJSON(DATA)));
app.get("/api/snapshots/latest", (req, res) => {
  const arr = readJSON(DATA);
  res.json(arr[0] || null);
});

// Cron: hourly at minute 0
cron.schedule("0 * * * *", () => {
  const headlines = getLatestHeadlines();
  const snapshot = { ts: new Date().toISOString(), headlines };
  appendSnapshot(snapshot);
  console.log("Snapshot saved at", snapshot.ts);
});

// create initial snapshot at server start
appendSnapshot({ ts: new Date().toISOString(), headlines: getLatestHeadlines() });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Project server listening on", PORT));
