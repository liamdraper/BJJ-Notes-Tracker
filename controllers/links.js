const Link = require('../models/link');

module.exports = {
    index,
    create,
    delete: deleteLink
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

function deleteLink(req, res, next) {
    Link.findOne({
        'links._id': req.params.id
    }).then(function(link) {
        if (!link) return res.redirect('/links');
        link.remove(req.params.id)
        .then(function() {
            res.redirect('/links')
        })
        .catch(function(err) {
            return next(err);
        });
    });
}