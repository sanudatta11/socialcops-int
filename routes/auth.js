/**
 * Created by sanu on 27/2/18.
 */
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var async = require('async');

router.login = function (req, res, next) {
    if (req.body.email && req.body.password) {
        var token = jwt.sign({
            userId: userId,
            role: check.role,
            companyId: check.companyId,
            bookmarkId: check.bookmarkId
        }, 'supersecret', {
            expiresIn: 150000000
        });
        res.status(200).json({
           "access_token" : token
        });
    }
    else {
        res.status(400).json({
            "message": "Incomplete Data"
        })
    }
};