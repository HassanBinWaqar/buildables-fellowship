# 01 - Express Introduction

## What is Express?
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### Key points
- Built on top of Node.js HTTP module
- Easy routing and middleware support
- Useful for building REST APIs

## Quick example
```js
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello Express'));
app.listen(3000);
```