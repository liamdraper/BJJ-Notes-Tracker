const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chartSchema = new Schema({
    name: {type: String, required: true},
    branches: {type: [], default: ['', '', '', '', '', '', '', '', '', '', '', '', '', '.', '', '', '', '', '', '', '', '', '', '', '']},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
})

module.exports = mongoose.model('Chart', chartSchema);