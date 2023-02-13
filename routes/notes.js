const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/notes'

// GET /notes
router.get('/', ensureLoggedIn, notesCtrl.index);

//POST /notes
router.post('/', ensureLoggedIn, notesCtrl.create)

//DELETE /notes/:id
router.delete('/:id', notesCtrl.delete);

//GET /notes/:id
router.get('/:id', notesCtrl.show);

//PUT /notes/:id
router.put('/:id', notesCtrl.update);

module.exports = router;