const Schedule = require('../models/schedule');

module.exports = {
    index
}

function index(req, res) {
    Schedule.find({}, function(err, schedules) {
        res.render('schedules/index', { schedules });
    })
}