const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    content: {type: String, required: true},
    date: {type: Date, required: true},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
})

module.exports = mongoose.model('Note', noteSchema);

