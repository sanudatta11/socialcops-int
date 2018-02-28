/**
 * Created by sanu on 27/2/18.
 */
/*jslint es6 */
let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');
let async = require('async');
let validator = require("email-validator");

let auth = require('./auth');;
let config = require('../config');

//Including Winston
let winston = require("winston");
require("winston-loggly-bulk");

/**
 * Takes 3 parameters(request,result,next) and returns result data.
 * @param   {object} req be the first object
 * @param   {object} res be the second object
 * @param   {object} next is called for calling any next function in the chain
 * 
 * @returns {object} the final result object
 */

router.login = (req, res, next) => {
    let email = req.body.email;
    let pass = req.body.password;
    if (email && pass && validator.validate(email)) {
        let token = jwt.sign({
            email: email
        }, config.jwt_token, {
            expiresIn: 1500000000
        });
        winston.log("info", "Login Successfull");
        res.status(200).json({
            "access_token": token
        });
    } else {
        winston.log("error", "Invalid Data in Login");
        res.status(403).json({
            "message": "Invalid Data"
        })
    }
};

module.exports = router