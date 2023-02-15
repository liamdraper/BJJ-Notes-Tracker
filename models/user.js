const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  googleId: {
    type: String,
    required: true
  },
  email: String,
  avatar: String,
  weeklyGoals: {type: String, default: '1enter'},
  monthlyGoals: {type: String, default: 'enter'},
  yearlyGoals: {type: String, default: 'enter'},
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);