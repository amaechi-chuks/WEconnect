const express = require('express');
const app = express();

const reviews = require('../model/reviews.js');


// Setup a default catch-all route that sends back reviews of a business by id.
app.get('/', (req, res) => {
    let bizid = parseInt(req.params.businessid, 10);
    let known = reviews.filter((now) => {
        return now.businessid === bizid;
    });
    known.forEach((memm) => {
        res.send(memm.comments);
    });

});

// Post a review ( not fully implemented)
app.post('/', (req, res) => {
    let bizid = parseInt(req.params.businessid, 10);
    const newReview = req.body;
    let known = reviews.filter((now) => {
        return now.businessid === bizid;
    });
    res.send(found);

});


module.exports = app;