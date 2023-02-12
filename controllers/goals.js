const Goal = require('../models/goal');

module.exports = {
    index
};

function index(req, res) {
    Goal.find({}, function(err, goals) {
        res.render('goals/index', { goals });
    })
}