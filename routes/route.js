/**
 * Created by sanu on 27/2/18.
 */
/*jslint es6 */
let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');
let jsonpatch = require('json-patch');

let config = require('../config');
let auth = require('./auth');
let methodsWork = require('./methodsWork');

/**
 * Takes 3 parameters(request,result,next) and returns result data.
 * @param   {object} req be the first object
 * @param   {object} res be the second object
 * @param   {object} next is called for calling any next function in the chain
 * 
 * @returns {object} the final result object
 */

router.use((req, res, next) => {
    let token = req.body.token || req.query.token || req.headers.authorization;
    if (token) {
        jwt.verify(token, config.jwt_token, function(err, decoded) {

            if (err) {
                console.log(err);
                return res.status(401).json({
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

router.post('/jsonPatch', methodsWork.jsonPatch);
router.post('/thumbnail', methodsWork.thumbnail);



module.exports = router;