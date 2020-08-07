"use strict";
var fs = require('fs');
var dbPath = './db.json';
var db = fs.open(dbPath, 6, function (err, fd) { return console.log(err, fd); });
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, function () { return console.log("listen on port " + port); });
app.get('/', function (req, res) {
    var getParams = req.query;
    res.json({ success: true });
});
