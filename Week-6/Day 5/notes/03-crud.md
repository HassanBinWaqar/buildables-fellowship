# 03 - CRUD with MongoDB

## Create
- `Model.create()` or `collection.insertOne()`

## Read
- `Model.find()`, `findOne`, `findById`
- Projection: `.select('title content')`

## Update
- `findByIdAndUpdate(id, update, { new: true, runValidators: true })`
- Use atomic operators: `$set`, `$inc`, `$push`

## Delete
- `findByIdAndDelete(id)` or `deleteOne`

Best practices:
- Validate input
- Use transactions for multi-document updates when needed (replica set)
