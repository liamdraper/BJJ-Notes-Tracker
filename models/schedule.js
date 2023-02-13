const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    activity: {type: String, required: true},
    day: {type: String, required: true, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']},
    timeStart: {type: String, required: true, enum: {}},
    timeEnd: {type: String, required: true, enum: {}},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
})
 
module.exports = mongoose.model('Schedule', scheduleSchema);