const Schedule = require('../models/schedule');

module.exports = {
    index,
    create
}

function index (req, res) {
    Schedule.find({}, function(err, schedules) {
        res.render('schedules/index', { schedules });
    })
}

function create (req, res) {
    //req.body.user = req.user._id;
    const schedule = new Schedule(req.body);
    schedule.save(function (err) {
        //req.body.user = req.user._id;
        if (err) return res.redirect('/schedules');
        res.redirect('/schedules');
    })
}
