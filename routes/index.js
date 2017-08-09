var express = require('express');
var router = express.Router();

/* GET index page. */
module.exports = router.get('/', function(req, res, next) {
    res.render('index', {
        title: res.__("INDEX_TITLE")
    });
});