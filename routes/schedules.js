const express = require('express');
const router = express.Router();
const schedulesCtrl = require('../controllers/schedules');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, schedulesCtrl.index);

router.post('/', ensureLoggedIn, schedulesCtrl.create);

router.delete('/:id', ensureLoggedIn, schedulesCtrl.delete);

router.put('/:id', ensureLoggedIn, schedulesCtrl.update);

module.exports = router;