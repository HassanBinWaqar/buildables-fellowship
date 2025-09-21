// validation.js - demo using express-validator
const { body, validationResult } = require('express-validator');

const validatePost = [
  body('title').isString().isLength({ min: 3 }).withMessage('title min 3 chars'),
  body('content').isString().isLength({ min: 10 }).withMessage('content min 10 chars'),
  (req, res, next) => {
    const errs = validationResult(req);
    if (!errs.isEmpty()) return res.status(400).json({ errors: errs.array() });
    next();
  }
];

module.exports = { validatePost };