const express = require('express');
const router = express.Router();
const linksCtrl = require('../controllers/links');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, linksCtrl.index);

router.post('/', ensureLoggedIn, linksCtrl.create);

router.delete('/:id', ensureLoggedIn, linksCtrl.delete);


module.exports = router;