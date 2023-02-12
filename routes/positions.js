const express = require('express');
const router = express.Router();
const positionsCtrl = require('../controllers/positions');

// All route start with '/positions'

//GET /positions
router.get('/', positionsCtrl.index);

//POST /positions
router.post('/', positionsCtrl.create);

module.exports = router;