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

modules.export = app;
