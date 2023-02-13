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
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const link = new Link(req.body);
    link.save (function(err) {
        req.body.user = req.user._id;
        if (err) return res.redirect('/links');
        res.redirect('/links');
    })
}
