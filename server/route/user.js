const express = require('express');
const bcrypt = require('bcryptjs');
const app = express();

const users = require('../model/user.js');

app.get('/users', (req, res) => res.status(200).send(users));
app.post('/signup', (req, res) => {
    const newUser = req.body;
    console.log(newUser.email);
    let found = users.find((check) => {
        return check.email === newUser.email;
    });
    if (found) {
        return res.sendStatus(400);
    }

    else {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                newUser.password = hash;
            });
        });
        users.push(newUser);
        return res.sendStatus(200);
    }

});
app.post('/signin', (req, res) => {

});

module.exports = app;