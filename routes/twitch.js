var express = require('express');
var router = express.Router();

/* GET index page. */
module.exports = router.get('/', function(req, res, next) {
    res.render('twitch', {
        title: res.__("TWITCH_TITLE")
    });
});

/* GET twitch details with channel id */
module.exports = router.get('/details/:channelID', function(req, res, next){
    res.render('twitchDetails', {
        title: res.__("TWITCH_DETAILS_TITLE")
    })
});