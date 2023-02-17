const express = require('express');
const router = express.Router();
const chartsCtrl = require('../controllers/charts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, chartsCtrl.index)

router.post('/', ensureLoggedIn, chartsCtrl.create);

router.delete('/:id', ensureLoggedIn, chartsCtrl.delete);

router.put('/:id', ensureLoggedIn, chartsCtrl.update);

router.get('/:id', ensureLoggedIn, chartsCtrl.show)

module.exports = router;