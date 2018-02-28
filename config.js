/**
 * Created by sanu on 27/2/18.
 */
let express = require('express');
let router = express.Router();

// JWT Secret Key
router.jwt_token = "supersecret";

//Thumbnail Size
router.HS = router.VS = 50;

//Cloudinary API Config [https://cloudinary.com/]
router.cloudinary_config = {
    cloud_name: 'djrrpwqrr',
    api_key: '338224984846272',
    api_secret: 'bl1N27mQp0C7fZ0C3-4lZttRVXo'
};

module.exports = router;