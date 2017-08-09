var express = require('express');
var router = express.Router();

/* GET index page. */
module.exports = router.get('/', function(req, res, next) {
    res.render('twitch', {
        title: res.__("TWITCH_TITLE")
    });
});