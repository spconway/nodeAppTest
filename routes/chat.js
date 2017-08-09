var express = require('express');
var router = express.Router();

/* GET page. */
module.exports = router.get('/', function(req, res, next) {
    res.render('chat', {
        title: res.__("CHAT_TITLE")
    });
});