var mongoose = require('mongoose');
var Room = require('./Room');
var User = require('./User');

module.exports = new mongoose.model('Reservation', mongoose.Schema({
  resCode: String,
  checkInDate: Date,
  checkOutDate: Date,
  userName: {
    type: String,
    required: [true, "İsim zorunlu."]
  },
  userMail: {
    type: String,
    required: [true, "Mail bilgisi zorunlu."]
  },
  phoneNumber: {
    type: String,
    required: [true, "Telefon bilgisi zorunlu."]
  },
  numberOfPerson: {
    type: String,
    required: [true, "Kişi sayısı zorunlu."]
  },
  user:[User.schema],
  room: [Room.schema]
}));

