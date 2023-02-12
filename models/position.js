const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const positionSchema = new Schema({
    name: String,
    content: String
})

module.exports = mongoose.model('Position', positionSchema);