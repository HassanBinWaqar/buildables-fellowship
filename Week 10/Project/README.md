# Project — Scheduled News Snapshot

This is a small full-stack example:
- Server: Node + Express + node-cron
  - Cron job fetches (mock) top headlines every hour and stores snapshots in snapshots.json
  - Endpoints:
    - GET /api/snapshots — returns all snapshots
    - GET /api/snapshots/latest — returns latest snapshot
- Client: React (simple app) that displays latest snapshot and list

Note: This example uses a mock fetch (server reads sample_headlines.json) to avoid API keys.

Run server:
1. cd server
2. npm install
3. npm start

Run client:
1. cd client
2. npm install
3. npm run dev (if using Vite) or npm start

