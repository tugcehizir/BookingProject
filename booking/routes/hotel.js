var express = require('express');
var router = express.Router();
var hotelModel = require('../model/Hotel');
router.route('/api/getData')
    .get(function (req, res, next) {
        hotelModel.find({})
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
    router.route('/api/postData')
    .post(function (req, res, next) {
        hotelModel.create(req.body, (err, data) => {
            console.log(data);
            console.log(err);
        })
        res.status(201).json(req.body);
    })



module.exports = router;