var mongoose = require('mongoose');
var Room = require('./Room');

module.exports = new mongoose.model('Rezervation', mongoose.Schema({
  checkInDate: Date,
  checkOutDate: Date,
  userName: String,
  userMail: String,
  phoneNumber: Number,
  numberOfPerson: Number,
  room: [Room.schema]
}));

