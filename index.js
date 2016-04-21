// require the express and body-parser packages
var express = require('express');
var bodyParser = require('body-parser');

// initialize the express app
var app = express();

//use the body-parser's json function
app.use(bodyParser.json());





app.listen(port, function() {

});
