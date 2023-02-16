const Chart = require('../models/chart');

module.exports = {
    index,
    create,
    show
}

// function index (req, res) {
//     Chart.find({}, function(err, charts) {
//         res.render('charts/index', { charts })
//     })
// }

function index(req, res) {
    Chart.find({}, function(err, charts) {
        res.render('charts/index', { charts })
    })
}

function create(req, res) {
    req.body.user = req.user._id;
    const chart = new Chart(req.body);
    chart.save (function(err) {
        req.body.user = req.user._id;
        if (err) return res.redirect('/charts');
        res.redirect('/charts');
    })
}

function show (req, res) {
    Chart.findById(req.params.id, function(err, chart) {
        res.render('charts/show', {chart})
    })
}

// {name: 'Closed Guard', branches: []},
//         {name: 'Butterfly Guard', branches: []},
//         {name: 'De-La-Riva Guard', branches: []},
//         {name: 'X Guard', branches: []}