# 04 - REST API Design with MongoDB

## Resource naming
- Use nouns: `/api/posts`, `/api/users`
- Nest resources for relationships: `/api/posts/:id/comments`

## HTTP verbs & status codes
- GET 200, POST 201, PUT 200/204, DELETE 200/204, 404 not found, 400 bad request

## Pagination & filtering
- Use `?page=1&limit=10&sort=-createdAt`
- Filtering via query params: `/posts?author=abc&tag=nodejs`

## Security
- Rate limiting
- Helmet
- Validate inputs and escape outputs

## Example routes
- GET /api/posts
- GET /api/posts/:id
- POST /api/posts
- PUT /api/posts/:id
- DELETE /api/posts/:id
