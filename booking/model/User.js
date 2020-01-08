var mongoose = require('mongoose');

module.exports = new mongoose.model('User', mongoose.Schema({
    name: String,
    mail: String,
    phone: Number,
    comment: String
  }));

