var express = require('express');
var app = express();
var bodyParser = require("body-parser")
var uncss = require('uncss');
var request = require("request");


var fs = require('fs');
var http = require('http');
var cheerio = require('cheerio')

var url = require('url');
var request = require('request');

	var http = require('http');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 4000);
module.exports = {app}