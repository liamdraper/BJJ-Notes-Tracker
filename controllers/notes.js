const Note = require('../models/note');

module.exports = {
    index,
    create,
    delete: deleteNote,
    update
}

function index (req, res) {
     Note.find({})
        .sort('-date')
        .exec(function (err, notes) {
         res.render('notes/index', { notes });
    })
}

function create (req, res) {
    req.body.user = req.user._id;
    const note = new Note(req.body);   
    note.save(function(err) {
        req.body.user = req.user._id;
        if (err) return res.redirect('/notes');
        res.redirect(`/notes`);
    });
}

function deleteNote(req, res) {
    Note.findOneAndDelete(
      {_id: req.params.id}, function(err) {
        res.redirect('/notes');
      }
    );
  }

function update(req, res) {
    Note.findOneAndUpdate(
      {_id: req.params.id},
      req.body,
      function(err, note) {
        if (err || !note) return res.redirect('/notes');
        res.redirect('/notes');
      }
    );
  }