const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
//const businesses = require('./businesses.js');
//const reviews = require('./reviews.js');
// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));



// Setting up API routes
app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the Weconnect API!',
}));



// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/businesses/:businessid', (req, res) => {
    let businessid = parseInt(req.params.businessid, 10);
    console.log(businessid);
    let result = businesses.filter(mybiz => mybiz.businessid === businessid)[0];

    if ((!result) ?  res .sendStatus(404) : res.send(result));
    
});

module.exports = app;
