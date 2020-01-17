var express = require('express');
var router = express.Router();

var reservationModel = require('../model/Reservation');

router.route('/api/getData')
    .get(function (req, res, next) {
        reservationModel.find({})
            .then((data) => {
                res.status(200).json({
                    status: 200,
                    message: "Başarılı",
                    data: data
                })
            })
            .catch((err) => {
                console.log(err);
            })

    })

router.route('/api/createReservation')
    .post(function (req, res, next) {
        reservationModel.create(req.body, (err, data) => {
            console.log(data);
            console.log(err);
        })
        res.status(201).json(req.body);
    })
// router.post("/api/createReservation", (request, response, next) => {
//     const reservation = Reservation(request.body);
//     reservation.save()
//         .then(reservation => {
//             return response.status(201).send({
//                 status: "success",
//                 data: reservation
//             });
//         })
//         .catch(err => {
//             return response.status(400).send({
//                 status: "fail",
//                 data: {
//                     error: err.message,
//                     errorMessage: "Yanlis bilgiler"
//                 }
//             });
//         });
// });
// Update Student
router.route('/api/updateReservation/:id')
.put((req, res, next) => {
    reservationModel.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data)
        console.log('Reservation updated successfully !')
      }
    })
  })
router.route('/api/deleteReservation/:id')
.delete((req, res, next) => {
    reservationModel.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })

module.exports = router;