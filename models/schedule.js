const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    activity: String,
    day: String,
    time: Number
})
 
module.exports = mongoose.model('Schedule', scheduleSchema);