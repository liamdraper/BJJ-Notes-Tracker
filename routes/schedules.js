const express = require('express');
const router = express.Router();
const schedulesCtrl = require('../controllers/schedules');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with /schedules

// GET /schedules
router.get('/', ensureLoggedIn, schedulesCtrl.index);

//POST /schedules
router.post('/', schedulesCtrl.create);

//DELETE /schedules/:id
router.delete('/:id', schedulesCtrl.delete);

//PUT /schedules/:id
router.put('/:id', schedulesCtrl.update);

module.exports = router;