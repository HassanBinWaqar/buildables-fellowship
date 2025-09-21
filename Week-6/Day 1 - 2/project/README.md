# Task Manager API (Week 6 - Express Project)

A small, professional Express-based Task Manager API created as part of Week 6 exercises.

## Features
- RESTful endpoints for tasks (CRUD)
- Proper project structure (controllers, routes, models, middleware, config, utils)
- Mongoose support with an in-memory fallback if MongoDB is not configured
- Centralized error handling

## Quick start
1. Copy `.env.example` to `.env` and set `MONGO_URI` (optional).
2. Install dependencies:
```
npm install
```
3. Start the server:
```
npm run start
```
Or for development (requires nodemon):
```
npm run dev
```

API endpoints:
- GET /api/tasks
- GET /api/tasks/:id
- POST /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id

The project will run without MongoDB by using an in-memory fallback (useful for local testing and class submissions).
