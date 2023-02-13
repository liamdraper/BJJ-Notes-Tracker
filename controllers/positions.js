const Position = require('../models/position');

module.exports = {
    index,
    create
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