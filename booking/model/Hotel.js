var mongoose = require('mongoose');
var User = require('./User');
var Room = require('./Room');

module.exports = new mongoose.model('Hotel', mongoose.Schema({
  name: String,
  city: String,
  country: String,
  info: String,
  description: String,
  imageUrl: String,
  imageUrlScnd: String,
  imageUrlThrd: String,
  star: Number,
  room: [Room.schema],
  user: [User.schema]
}));

