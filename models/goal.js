const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Goal', goalSchema);