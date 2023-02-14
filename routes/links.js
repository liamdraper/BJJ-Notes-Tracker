const express = require('express');
const router = express.Router();
const linksCtrl = require('../controllers/links');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with /links

// GET /links
router.get('/', ensureLoggedIn, linksCtrl.index);

//POST /links
router.post('/', linksCtrl.create);

//DELETE /links/:id
router.delete('/:id', linksCtrl.delete);

module.exports = router;