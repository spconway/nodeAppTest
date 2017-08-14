/**
 * Created by Spconway on 8/9/17.
 */
var express = require('express');
var router = express.Router();

/* GET index page. */
module.exports = router.get('/', function(req, res, next) {
    res.send('This is not a path in the api service call.');
});

module.exports = router.get('/paths/all', function(req, res, next) {
    res.send(stringify(getRoutes(req.app._router.stack)));
});

function stringify(val) {
    return JSON.stringify(val);
}

// takes req.app._router.stack as parameter
function getRoutes(routers) {
    var paths = [];
    var route;
    for (var r in routers) {
        route = routers[r];
        if (route.name === 'router') {
            var match = route.regexp.toString()
                .replace('\\/?', '')
                .replace('(?=\\/|$)', '$')
                .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//);
            paths.push(
                match[1].replace(/\\/, "") === '' ? '/' : match[1].replace(/\\/, "")
            );
        }
    };
    return { paths: paths };
}