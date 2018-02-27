/**
 * Created by sanu on 27/2/18.
 */

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

router.use(function(req, res, next) {
    var token = req.body.token || req.query.token || req.headers.authorization;
    if (token) {
        jwt.verify(token, 'supersecret', function(err, decoded) {

            if (err) {
                console.log(err);
                return res.status(403).json({
                    success: false,
                    message: 'Failed to authenticate token.'
                });
            } else {
                req.email = decoded.email;
                next();
            }
        });

    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
});