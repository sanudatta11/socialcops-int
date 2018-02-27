/**
 * Created by sanu on 28/2/18.
 */
let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');
let jsonpatch = require('json-patch');

router.jsonPatch = function (req, res, next) {
    let document = req.body.document;
    let patch = req.body.patch;

    if (document && patch) {
        try {
            jsonpatch.apply(document, patch);
            res.status(200).json({
                document : document
            })
        }
        catch(err) {
            console.log("Patch Error");
            res.status(500).json({
                "error" : err
            });
        }
    }
    else {
        return res.status(403).send({
            success: false,
            message: 'Incomplete Data'
        });
    }
};

module.exports = router;