# 02 - Setup & Connection

## Local
- Install MongoDB Community or use Docker:
  `docker run -d -p 27017:27017 --name mongo mongo:6.0`

## Atlas (cloud)
- Create a cluster, whitelist IP or use 0.0.0.0/0 for labs, get connection string.

## Connecting from Node.js
Two options:
1. **MongoClient (native driver)** - finer control, lighter
2. **Mongoose (ORM/ODM)** - schema, validation, middleware, models

Example (Mongoose):
```js
const mongoose = require('mongoose');
await mongoose.connect(process.env.MONGO_URI);
```

Handle errors and retries. Use environment variables to avoid leaking credentials.
