var express = require('express');
var router = express.Router();

var { Rezervation } = require("./../controller/RezervationController");
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

router.post("/api/createRezervation", (request, response, next) => {
    const rezervation = Rezervation(request.body);
    rezervation.save()
        .then(rezervation => {
            return response.status(201).send({
                status: "success",
                data: rezervation
            });
        })
        .catch(err => {
            return response.status(400).send({
                status: "fail",
                data: {
                    error: err.message,
                    errorMessage: "Yanlis bilgiler"
                }
            });
        });
});




module.exports = router;