const express = require('express');
const app = express();

const businesses = require('../model/businesses.js');
let reviews = require('./reviews.js');
app.use('/:businessid/reviews', reviews);

app.get('/:businessid', (req, res) => {
    let businessid = parseInt(req.params.businessid, 10);
    console.log(businessid)
    let result = businesses.filter(mybiz => mybiz.businessid == businessid)[0];

    if (!result) {
        res.sendStatus(404);
    } else {
        res.send(result);
    }
});


app.get('/', (req, res) => res.status(200).send(businesses));

app.post('/', (req, res) => {
    const newBiz = req.body;
    console.log(newBiz.businessid);
    let found = businesses.find((check) => {
        return check.businessid === newBiz.businessid;
    });
    if (found) {
        return res.sendStatus(400);
    }
    else {
        businesses.push(newBiz);
    }
    // return posted businesses
    const result = businesses.filter(newBusiness => newBusiness.businessid === newBiz.id)[0];
    res.send(newBiz);
});

module.exports = app;