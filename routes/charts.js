const express = require('express');
const router = express.Router();
const chartsCtrl = require('../controllers/charts');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/', chartsCtrl.index)

//POST /charts
router.post('/', chartsCtrl.create);

router.get('/:id', chartsCtrl.show)

module.exports = router;