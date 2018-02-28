/**
 * Created by sanu on 27/2/18.
 */
let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');
let async = require('async');
let validator = require("email-validator");

let config = require('../config');

router.login = (req, res, next) => {
    let email = req.body.email;
    let pass = req.body.password;
    if (email && pass && validator.validate(email)) {
        let token = jwt.sign({
            email: email
        }, config.jwt_token, {
            expiresIn: 1500000000
        });
        res.status(200).json({
            "access_token": token
        });
    } else {
        res.status(403).json({
            "message": "Invalid Data"
        })
    }
};

module.exports = router;