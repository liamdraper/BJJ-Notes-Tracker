const express = require('express');
const router = express.Router();
const linksCtrl = require('../controllers/links');

// All routes start with /links

// GET /links
router.get('/', linksCtrl.index);

//POST /links
router.post('/', linksCtrl.create);

module.exports = router;