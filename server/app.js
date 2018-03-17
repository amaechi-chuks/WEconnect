const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const passport = require('passport-local');

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

// GET all businesses by location ( not fully implented)
app.get('/bus', (req, res) => {
    if (req.query) {
        res.send(req.query);
    }


});



let businesses = require('./route/businesses.js');
let auth = require('./route/user.js');

app.use('/auth', auth);
app.use('/businesses', businesses);


// GET all reviews
// app.get('/reviews', (req, res) => res.status(200).send(reviews));

// PUT Method
app.put('/api/businesses/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const oldbusinesses = businesses.filter(r => r.id === id)[0];

    if (!oldbusinesses) {
        const item = req.body;
        item.id = id;
        businesses.push(item);
        // res.setHeader('Location', `/api/businesses/) + {id}`);
        res.sendStatus(201);
    } else {
        oldbusinesses.name = req.body.name;
        oldbusinesses.id = req.body.id;
        oldbusinesses.reviews = req.body.reviews;
        res.sendStatus(204);
    }
});
// Post a review
app.post('/businesses/:businessid/reviews', (req, res) => {
    let bizid = parseInt(req.params.businessid, 10);
    const newReview = req.body;
    let known = reviews.filter((now) => {
        return now.businessid === bizid;
    });
    res.send(found);

});
// PUT Method
app.put('/api/businesses/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const oldbusinesses = businesses.filter(r => r.id === id)[0];

    if (!oldbusinesses) {
        const item = req.body;
        item.id = id;
        businesses.push(item);
        // res.setHeader('Location', `/api/businesses/) + {id}`);
        res.sendStatus(201);
    } else {
        oldbusinesses.name = req.body.name;
        oldbusinesses.id = req.body.id;
        oldbusinesses.reviews = req.body.reviews;
        res.sendStatus(204);
    }
});
// Delete Method
app.delete('/businesses/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const existingItem = businesses.filter(r => r.id === id)[0];

    if (!existingItem) {
        return res.sendStatus(404);
    }

});

module.exports = app;