const express = require('express');
const router = express.Router();
const linksCtrl = require('../controllers/links');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with /links

// GET /links
router.get('/', ensureLoggedIn, linksCtrl.index);

//POST /links
router.post('/', linksCtrl.create);

module.exports = router;