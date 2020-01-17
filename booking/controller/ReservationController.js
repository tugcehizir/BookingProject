const ReservationSchema = require('../model/Reservation');

function Reservation(reservation){
    return new ReservationSchema({
        checkInDate: reservation.checkInDate,
        checkOutDate: reservation.checkOutDate,
        userName: reservation.userName,
        userMail: reservation.userMail,
        phoneNumber: reservation.phoneNumber,
        numberOfPerson: reservation.numberOfPerson
    })
}

module.exports.Reservation = Reservation;