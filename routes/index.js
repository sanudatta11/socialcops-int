var express = require('express');
var router = express.Router();

/* GET home page. */
/*jslint es6 */
/**
 * Takes 3 parameters(request,result,next) and returns result data.
 * @param   {object} req be the first object
 * @param   {object} res be the second object
 * @param   {object} next is called for calling any next function in the chain
 * 
 * @returns {object} the final result object
 */

router.get('/', function(req, res, next) {
    res.render('index', { title: 'SocialCops' });
});

module.exports = router;