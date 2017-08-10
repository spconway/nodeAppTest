/**
 * Created by Spconway on 8/9/17.
 */
var express = require('express');
var router = express.Router();

/* GET index page. */
//module.exports = router.get('/', function(req, res, next) {
//    res.send('This is not a path in the api service call.');
//});

module.exports = router.get('/paths/all', function(req, res, next) {
    res.send(stringify(getRoutes()));
});

function stringify(val){
    return JSON.stringify(val);
}

function getRoutes() {
    var routes = [];
    var route;

    for(var r in router.stack){
        route = {
            method: router.stack[r].route.stack[0].method,
            path: router.stack[r].route.path
        };
        console.log(router.stack[r].route.stack[0].method);
        routes.push(route);
    }

    return { apiRoutes: routes };
}