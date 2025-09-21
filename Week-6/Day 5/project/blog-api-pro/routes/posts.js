const express = require('express');
const ctrl = require('../controllers/postController');
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');
const router = express.Router();

router.get('/', ctrl.getPosts);
router.get('/:id', ctrl.getPost);
router.post('/', auth, [body('title').isLength({min:3}), body('content').isLength({min:10}), (req,res,next)=>{ const e=validationResult(req); if(!e.isEmpty()) return res.status(400).json({ errors: e.array() }); next(); }], ctrl.createPost);
router.put('/:id', auth, ctrl.updatePost);
router.delete('/:id', auth, ctrl.deletePost);

module.exports = router;
