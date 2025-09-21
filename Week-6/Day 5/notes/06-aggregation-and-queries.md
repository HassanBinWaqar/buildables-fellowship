# 06 - Aggregation & Advanced Queries

Aggregation pipeline stages:
- $match, $group, $sort, $project, $lookup, $unwind

Common use-cases:
- Reports (counts per day)
- Joins across collections ($lookup)
- Faceted search

Indexes:
- Use indexes for frequent queries: text index for search, compound indexes for filters.
