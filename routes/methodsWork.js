/**
 * Created by sanu on 28/2/18.
 */
/*jslint es6 */
let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');
let jsonpatch = require('json-patch');
let Jimp = require('jimp');
let request = require('request');
let cloudinary = require('cloudinary');

let config = require('../config');

//Including Winston
let winston = require("winston");
require("winston-loggly-bulk");

let magic = {
    jpg: 'ffd8ffe0',
    png: '89504e47',
    gif: '47494638'
};

cloudinary.config(config.cloudinary_config);

/**
 * Takes 3 parameters(request,result,next) and returns result data.
 * @param   {object} req be the first object
 * @param   {object} res be the second object
 * @param   {object} next is called for calling any next function in the chain
 * 
 * @returns {object} the final result object
 */

router.jsonPatch = (req, res, next) => {
    let document = req.body.document;
    let patch = req.body.patch;

    try {
        if (document && patch) {
            try {
                jsonpatch.apply(document, patch);
                winston.log("info", "Json Patch Successfull");
                res.status(200).json({
                    document: document
                })
            } catch (err) {
                console.log("Patch Error");
                winston.log("crit", "Fatal Error in JsonPatch");
                res.status(500).json({
                    "error": err
                });
            }
        } else {
            winston.log("error", "Invalid Data in Login");
            return res.status(403).send({
                success: false,
                message: 'Incomplete Data'
            });
        }
    } catch (e) {
        winston.log("crit", "Json Validation Error");
        res.status(501).json({
            message: "JSON Validation Error"
        })
    }
};

/**
 * Takes 3 parameters(request,result,next) and returns result data.
 * @param   {object} req be the first object
 * @param   {object} res be the second object
 * @param   {object} next is called for calling any next function in the chain
 * 
 * @returns {object} the final result object
 */

router.thumbnail = (req, res, next) => {
    let imgURL = req.body.imageUrl;
    if (imgURL) {
        let options = {
            method: 'GET',
            url: imgURL,
            encoding: null // keeps the body as buffer
        };

        request(options, function(err, response, body) {
            if (!err && response.statusCode == 200) {
                let magigNumberInBody = body.toString('hex', 0, 4);
                if (magigNumberInBody == magic.jpg ||
                    magigNumberInBody == magic.png ||
                    magigNumberInBody == magic.gif) {

                    Jimp.read(imgURL, function(err, img) {
                        if (err) {
                            winston.log("crit", { "message": "Fatal Error in Jimp Read", "err": err });
                            res.status(500).json({
                                error: err
                            });
                        }
                        img.resize(config.HS, config.VS).getBase64(Jimp.AUTO,
                            function(e, img64) {
                                if (e) {
                                    winston.log("crit", { "message": "Fatal Error in Image Resize", "err": err });
                                    res.status(500).json({
                                        error: err
                                    });
                                } else {
                                    cloudinary.uploader.upload(img64, function(result) {
                                        winston.log("info", "Cloudinary Uploaded");
                                        res.status(200).json({
                                            image64: img64,
                                            result: result
                                        })
                                    });
                                }
                            });
                    });

                } else {
                    winston.log("crit", {
                        message: "Fatal Error in URL",
                        err: err
                    });
                    return res.status(503).send({
                        success: false,
                        message: 'Invalid or Corrupted URL'
                    });
                }
            } else {
                winston.log("crit", {
                    message: "Fatal Error in URL",
                    err: err
                });
                return res.status(503).send({
                    success: false,
                    message: 'Invalid or Corrupted URL'
                });
            }
        });
    } else {
        winston.log("error", "Incomplete Data");
        return res.status(403).send({
            success: false,
            message: 'Incomplete Data'
        });
    }
};

module.exports = router;