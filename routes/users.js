const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with /users

// GET /users
router.get('/', ensureLoggedIn, usersCtrl.index);

//PUT /users/:id
router.put('/:id', ensureLoggedIn, usersCtrl.update);

module.exports = router;