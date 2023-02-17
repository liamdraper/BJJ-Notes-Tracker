const express = require('express');
const router = express.Router();
const positionsCtrl = require('../controllers/positions');
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, positionsCtrl.index);

router.post('/', ensureLoggedIn, positionsCtrl.create);

router.delete('/:id', ensureLoggedIn, positionsCtrl.delete)

router.put('/:id', ensureLoggedIn, positionsCtrl.update)

module.exports = router;