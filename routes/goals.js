const express = require('express');
const router = express.Router();
const goalsCtrl = require('../controllers/goals');

// All routes start with /goals

// GET /routes
router.get('/', goalsCtrl.index);

module.exports = router;