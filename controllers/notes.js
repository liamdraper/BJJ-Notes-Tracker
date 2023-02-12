const Note = require('../models/note');

module.exports = {
    index,
    //new: newNote,
    create
}

function index(req, res) {
     Note.find({}, function(err, notes) {
         res.render('notes/index', { notes });
    })
}

// function newNote(req, res) {
//     res.render('notes/new');
// }

function create(req, res) {
    const note = new Note(req.body);
    note.save(function(err) {
        if (err) return res.redirect('/notes');
        res.redirect(`/notes`);
    });
}