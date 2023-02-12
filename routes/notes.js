const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes');

// All routes start with '/notes'

// GET /notes
router.get('/', notesCtrl.index);

//GET /notes/new
//router.get('/new', notesCtrl.new)

//POST /notes/
router.post('/', notesCtrl.create)

module.exports = router;