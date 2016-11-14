"use strict";
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var model = require('./datas/index');
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var router = express.Router();
router.get('/', function (req, res, next) {
    console.log('Err');
    res.json({
        'name': 'monkey'
    });
});
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
    });
}
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
});
module.exports = app;

//# sourceMappingURL=maps/app.js.map
