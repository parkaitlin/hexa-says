const express = require('express');
const router = express.Router();
const controller = require('../controllers/playerC');

router.post('/new', controller.new);
router.get('/', controller.index);

module.exports = router;