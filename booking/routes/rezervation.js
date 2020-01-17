var express = require('express');
var router = express.Router();

var rezervationModel = require('./../model/Rezervation');

router.route('/api/getData')
    .get(function (req, res, next) {
        rezervationModel.find({})
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

router.route('/api/createRezervation')
    .post(function (req, res, next) {
        rezervationModel.create(req.body, (err, data) => {
            console.log(data);
            console.log(err);
        })
        res.status(201).json(req.body);
    })
// router.post("/api/createRezervation", (request, response, next) => {
//     const rezervation = Rezervation(request.body);
//     rezervation.save()
//         .then(rezervation => {
//             return response.status(201).send({
//                 status: "success",
//                 data: rezervation
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
router.route('/api/updateRezervation/:id')
.put((req, res, next) => {
    rezervationModel.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data)
        console.log('Rezervation updated successfully !')
      }
    })
  })
router.route('/api/deleteRezervation/:id')
.delete((req, res, next) => {
    rezervationModel.findByIdAndRemove(req.params.id, (error, data) => {
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