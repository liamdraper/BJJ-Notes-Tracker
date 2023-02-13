const Link = require('../models/link');

module.exports = {
    index,
    create
}

function index(req, res) {
    Link.find({}, function(err, links) {
        res.render('links/index', { links })
    })
}

function create(req, res) {
    const link = new Link(req.body);
    link.save (function(err) {
        if (err) return res.redirect('/links');
        res.redirect('/links');
    })
}
