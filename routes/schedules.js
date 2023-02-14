const express = require('express');
const router = express.Router();
const schedulesCtrl = require('../controllers/schedules');

// All routes start with /schedules

// GET /schedules
router.get('/', schedulesCtrl.index);

//POST /schedules
router.post('/', schedulesCtrl.create);

module.exports = router;