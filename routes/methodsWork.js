/**
 * Created by sanu on 28/2/18.
 */
let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');
let jsonpatch = require('json-patch');
let Jimp = require('jimp');
let request = require('request');
let cloudinary = require('cloudinary');

let config = require('../config');

let magic = {
    jpg: 'ffd8ffe0',
    png: '89504e47',
    gif: '47494638'
};

cloudinary.config(config.cloudinary_config);

router.jsonPatch =  (req, res, next) => {
    let document = req.body.document;
    let patch = req.body.patch;

    try {
        if (document && patch) {
            try {
                jsonpatch.apply(document, patch);
                res.status(200).json({
                    document: document
                })
            }
            catch (err) {
                console.log("Patch Error");
                res.status(500).json({
                    "error": err
                });
            }
        }
        else {
            return res.status(403).send({
                success: false,
                message: 'Incomplete Data'
            });
        }
    } catch (e) {
        res.status(501).json({
            message : "JSON Validation Error"
        })
    }
};

router.thumbnail = (req, res, next) => {
    let imgURL = req.body.imageUrl;
    if (imgURL) {
        let options = {
            method: 'GET',
            url: imgURL,
            encoding: null // keeps the body as buffer
        };

        request(options, function (err, response, body) {
            if (!err && response.statusCode == 200) {
                let magigNumberInBody = body.toString('hex', 0, 4);
                if (magigNumberInBody == magic.jpg ||
                    magigNumberInBody == magic.png ||
                    magigNumberInBody == magic.gif) {

                    Jimp.read(imgURL, function (err, img) {
                        if (err)
                            res.status(500).json({
                                error: err
                            });
                        img.resize(config.HS, config.VS).getBase64(Jimp.AUTO,
                            function (e, img64) {
                                if (e)
                                    res.status(500).json({
                                        error: err
                                    });
                                else{
                                    cloudinary.uploader.upload(img64, function(result) {
                                        res.status(200).json({
                                            image64: img64,
                                            result: result
                                        })
                                    });
                                }
                            });
                    });

                }
                else {
                    return res.status(503).send({
                        success: false,
                        message: 'Invalid or Corrupted URL'
                    });
                }
            } else {
                return res.status(503).send({
                    success: false,
                    message: 'Invalid or Corrupted URL'
                });
            }
        });


    }
    else {
        return res.status(403).send({
            success: false,
            message: 'Incomplete Data'
        });
    }
};

module.exports = router;