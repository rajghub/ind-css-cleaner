var express = require('express');
var app = express();
var bodyParser = require("body-parser")
var fs = require('fs');
app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 4000);
module.exports = {app}