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
    const position = new Position(req.body);
    position.save(function(err) {
        req.body.user = req.user._id;
        if (err) return res.redirect('/positions');
        res.redirect('/positions');
    })
}

function deletePosition(req, res) {
    Position.findOneAndDelete(
      {_id: req.params.id}, function(err) {
        res.redirect('/positions');
      }
    );
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