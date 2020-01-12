const RezervationSchema = require('./../model/Rezervation');

function Rezervation(rezervation){
    return new RezervationSchema({
        checkInDate: rezervation.checkInDate,
        checkOutDate: rezervation.checkOutDate,
        userName: rezervation.userName,
        userMail: rezervation.userMail,
        phoneNumber: rezervation.phoneNumber,
        numberOfPerson: rezervation.numberOfPerson
    })
}

module.exports.Rezervation = Rezervation;