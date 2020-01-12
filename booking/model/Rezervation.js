var mongoose = require('mongoose');
var Room = require('./Room');

const RezervationSchema = new mongoose.Schema({
  checkInDate: Date,
  checkOutDate: Date,
  userName: String,
  userMail: String,
  phoneNumber: Number,
  numberOfPerson: Number,
  room: [Room.schema]
});

module.exports = mongoose.model("Rezervation", RezervationSchema)
