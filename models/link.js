const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkSchema = new Schema({
    link: {type: String, required: true},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
});

module.exports = mongoose.model('Link', linkSchema);