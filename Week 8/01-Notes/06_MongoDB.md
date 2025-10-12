# MongoDB & Mongoose – Detailed Notes

## 1. Concepts
- Document store: JSON-like BSON documents in collections.
- No strict schema by default; Mongoose adds schemas.

## 2. Mongoose basics
- Connect: `mongoose.connect(uri, options)`.
- Schema + Model:
```js
const userSchema = new mongoose.Schema({ name: String, email: {type:String, unique:true} }, { timestamps:true });
const User = mongoose.model('User', userSchema);
```

## 3. Common patterns
- References vs Embedding:
  - Embed small subdocuments (comments inside posts) when data is read together.
  - Reference large/independent documents (user profiles).
- Indexes for query speed:
```js
userSchema.index({ email: 1 });
```

## 4. Aggregation pipeline
- `Model.aggregate([ { $match: {...} }, { $group: {...} } ])`.

## 5. Transactions
- Use sessions for multi-document transactions (Mongo replica set required).

## 6. Backups & production readiness
- Use `mongodump`/`mongorestore` or managed backups on cloud providers (Atlas).
