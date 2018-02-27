/**
 * Created by sanu on 27/2/18.
 */
let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');
let async = require('async');
let config = require('../config');

router.login = function (req, res, next) {
    if (req.body.email && req.body.password) {
        let token = jwt.sign({
            email : req.body.email
        }, config.jwt_token, {
            expiresIn: 150000000
        });
        res.status(200).json({
           "access_token" : token
        });
    }
    else {
        res.status(403).json({
            "message": "Incomplete Data"
        })
    }
};

module.exports = router;