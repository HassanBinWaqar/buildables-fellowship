# 04 - Building RESTful APIs

## Principles
- Use nouns for resources (e.g., /tasks)
- Use appropriate HTTP verbs (GET, POST, PUT, DELETE)
- Use status codes: 200, 201, 400, 404, 500
- Keep controllers thin; delegate business logic to services or models

## Example resource routes for tasks
- GET /api/tasks
- GET /api/tasks/:id
- POST /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id
