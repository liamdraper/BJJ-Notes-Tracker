const Schedule = require('../models/schedule');

module.exports = {
    index,
    create
}

function index (req, res) {
    Schedule.find({}, function(err, schedules) {
        res.render('schedules/index', { schedules: [
            {activity: 'Workout', day: 'Monday', timeStart: 11.5, timeEnd: 13},
            {activity: 'BJJ Class asdasd fasdfasda sdfasdf asdf', day: 'Monday', timeStart: 14.5, timeEnd: 16.5},
        ], test:true});
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

// // Monday {
//     600: true,
//     630: false
// }

// //