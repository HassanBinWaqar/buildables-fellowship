const express = require('express');
const ctrl = require('../controllers/commentController');
const auth = require('../middleware/auth');
const router = express.Router({ mergeParams: true });

router.get('/', ctrl.getComments);
router.post('/', auth, ctrl.addComment);

module.exports = router;
