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
    const position = new Position(req.body);
    position.save(function(err) {
        if (err) return res.redirect('/positions');
        res.redirect(`/positions/${position._id}`);
    })
}