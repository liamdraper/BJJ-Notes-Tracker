const User = require('../models/user');

module.exports = {
    index,
    update
};

function index(req, res) {
    User.find({}, function(err, users) {
        res.render('users/index', { users });
    })
}

function update(req, res) {
    User.findOneAndUpdate(
      {_id: req.params.id},
      req.body,
      function(err, user) {
        if (err || !user) return res.redirect('/users');
        res.redirect('/users');
      }
    );
  }