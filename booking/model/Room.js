var mongoose = require('mongoose');

module.exports = new mongoose.model('Room', mongoose.Schema({
    code: String,
    name: String,
    description: String,
    imageUrl: String,
    price: Number
}));

