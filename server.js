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




app.post('/test', function(req, res){
	//console.log('body: ' + req.body.name);
	var mergeHTML = [];
	req.body.name.forEach(function(arr,index){
		request(arr, function (error, response, body) {
		  var $ = cheerio.load(body.toString());
		  console.log($("title").toString())
		  mergeHTML.push($("body").toString());

			if(req.body.name.length == mergeHTML.length){
				res.json({"name":mergeHTML});
			}
		  
		});
		
		
	})

	
	
	
	
	
	
	
});

app.listen(5555, function() {
    console.log("ready")
})
