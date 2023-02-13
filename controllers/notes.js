const Note = require('../models/note');
const { move } = require('../routes');

module.exports = {
    index,
    create,
    delete: deleteNote
}

function index(req, res) {
     Note.find({}, function(err, notes) {
         res.render('notes/index', { notes });
    })
}

// function create(req, res) {
//     const note = new Note(req.body);
//     note.save(function(err) {
//         if (err) return res.redirect('/notes');
//         res.redirect(`/notes`);
//     });
// }

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const note = new Note(req.body);   
    note.save(function(err) {
        req.body.user = req.user._id;
        if (err) return res.redirect('/notes');
        res.redirect(`/notes`);
    });
}

function deleteNote(req, res, next) {
    // Note.findOne({
    //     'notes._id': req.params.id
    // }).then(function(note) {
    //     if (!note) return res.redirect('/notes');
    //     note.remove(req.params.id);
    //     note.save().then(function() {
    //         res.redirect('/notes');
    //     }).catch(function(err) {
    //         return next(err);
    //     });
    // });
}   