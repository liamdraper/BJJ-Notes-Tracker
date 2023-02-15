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
    const link = new Link(req.body);
    link.save (function(err) {
        req.body.user = req.user._id;
        if (err) return res.redirect('/links');
        res.redirect('/links');
    })
}

function deleteLink(req, res) {
    Link.findOneAndDelete(
      {_id: req.params.id}, function(err) {
        res.redirect('/links');
      }
    );
  }