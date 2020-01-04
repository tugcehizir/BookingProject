var mongoose = require('mongoose');
var User = require('./User');

module.exports = new mongoose.model('Hotel', mongoose.Schema({
    name: String,
    adress: String,
    city: String,
    description: String,
    imageUrl: String,
    star: Number,
    user: [User.schema]
  }));

