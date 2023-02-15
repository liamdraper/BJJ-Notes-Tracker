const Schedule = require('../models/schedule');

module.exports = {
    index,
    create,
    delete: deleteSchedule,
    update
}

function index (req, res) {
  Schedule.find({}, function(err, schedules) {
      res.render('schedules/index', { schedules });
  });
}

function create (req, res) {
  req.body.user = req.user._id;
  const schedule = new Schedule(req.body);
  schedule.save(function (err) {
      req.body.user = req.user._id;
      if (err) return res.redirect('/schedules');
      res.redirect('/schedules');
  })
}

function deleteSchedule(req, res) {
  Schedule.findOneAndDelete(
    {_id: req.params.id}, function(err) {
      res.redirect('/schedules');
    }
  );
}

function update(req, res) {
  Schedule.findOneAndUpdate(
    {_id: req.params.id},
    req.body,
    function(err, schedule) {
      if (err || !schedule) return res.redirect('/schedules');
      res.redirect('/schedules');
    }
  );
}