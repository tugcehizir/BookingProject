var mongoose = require('mongoose');

module.exports = new mongoose.model('Rezervation', mongoose.Schema({
  checkInDate: Date,
  checkOutDate: Date,
  userName: String,
  userMail: String,
  phoneNumber: Number  
}));

