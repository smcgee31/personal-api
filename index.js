// require the express and body-parser packages
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
                                                    // these all have to be set before express is initialized
// require the controllers and middleware
var middleware = require('./controllers/middleware');
var mainCtrl = require('./controllers/mainCtrl');
var users = require('./models/users');




// initialize the express app
var app = express();

// use the body-parser's json function
app.use(bodyParser.json());
// app.use(middleware.addHeaders) <------ THIS MAY BE NEEDED------
app.use(cors);

// setup our get requests - linked to the mainCtrl.js file where the work is being done
app.get('/name/:id', mainCtrl.showName);
app.get('/location/:id', mainCtrl.showLocation);
app.get('/occupations', mainCtrl.showOccupations);
app.get('/occupations/:id', mainCtrl.showlatestOccupation);
app.get('/hobbies/:id', mainCtrl.showHobbies);






// lastly we need to set up our "listen"
var port = 3000;
app.listen(port, function() {
    console.log('listening to aliens on port ', port);
});
