const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkSchema = new Schema({
    link: String
});

module.exports = mongoose.model('Link', linkSchema);