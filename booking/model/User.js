var mongoose = require('mongoose');

module.exports = new mongoose.model('User', mongoose.Schema({
    name: String,
    password: String,
    code: String
  }));

