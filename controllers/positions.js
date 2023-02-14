const Position = require('../models/position');

module.exports = {
    index,
    create,
    delete: deletePosition,
    update
}

function index(req, res) {
    Position.find({}, function(err, positions) {
        res.render('positions/index', { positions });
    })
}

function create(req,res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const position = new Position(req.body);
    position.save(function(err) {
        req.body.user = req.user._id;
        if (err) return res.redirect('/positions');
        res.redirect('/positions');
    })
}

function deletePosition(req, res, next) {
    Position.findOne({
        'positions._id': req.params.id
    }).then(function(position) {
        if (!position) return res.redirect('/positions');
        position.remove(req.params.id)
        .then(function() {
            res.redirect('/positions')
        })
        .catch(function(err) {
            return next(err);
        });
    });
}

function update(req, res) {
    Position.findOneAndUpdate(
      {_id: req.params.id},
      req.body,
      function(err, position) {
        if (err || !position) return res.redirect('/positions');
        res.redirect('/positions');
      }
    );
  }