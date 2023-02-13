const Note = require('../models/note');

module.exports = {
    index,
    show,
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

function show (req, res) {
//     const btn = 
//     const modal = document.getElementById('modal');
//     btn.addEventListener('click', e => {
//         modal.classList.remove('active');
// })
//     Note.findById(req.params.id, function(err, note) {
//         res.render('notes/show', note)
//     })
}

function show (req, res) {
    Note.findById(req.params.id, function(err, note) {
        // Add 'active' class to modal
        // const modal = ;
        // res.render('notes/show', note);
    });
}

// function create(req, res) {
//     const note = new Note(req.body);
//     note.save(function(err) {
//         if (err) return res.redirect('/notes');
//         res.redirect(`/notes`);
//     });
// }

function create (req, res) {
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
    Note.findOne({
        'notes._id': req.params.id
    }).then(function(note) {
        if (!note) return res.redirect('/notes');
        note.remove(req.params.id)
        .then(function() {
            res.redirect('/notes')
        })
        .catch(function(err) {
            return next(err);
        });
    });
}

function update (req, res) {
    Note.findOne({
        'notes._id': req.params.id
    }).then(function (note) {
        note.update (req.params.id, req.body);
        note.save()
    .then(function () {
        res.redirect('/notes');
        })
    })
}
