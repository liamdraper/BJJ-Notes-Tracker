const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, notesCtrl.index);

router.post('/', ensureLoggedIn, notesCtrl.create)

router.delete('/:id', ensureLoggedIn, notesCtrl.delete);

router.put('/:id', ensureLoggedIn, notesCtrl.update);

module.exports = router;