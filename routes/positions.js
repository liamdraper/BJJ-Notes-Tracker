const express = require('express');
const router = express.Router();
const positionsCtrl = require('../controllers/positions');
const ensureLoggedIn = require('../config/ensureLoggedIn')

// All route start with '/positions'

//GET /positions
router.get('/', ensureLoggedIn, positionsCtrl.index);

//POST /positions
router.post('/', positionsCtrl.create);

//DELETE /positions/:id
router.delete('/:id', positionsCtrl.delete)

//PUT /positions/:id
router.put('/:id', positionsCtrl.update)

module.exports = router;