const express = require('express');
const router = express.Router();
const chartsCtrl = require('../controllers/charts');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/', chartsCtrl.index)

//POST /charts
router.post('/', chartsCtrl.create);

//PUT /charts/:id
router.put('/:id', chartsCtrl.update);

router.get('/:id', chartsCtrl.show)

module.exports = router;