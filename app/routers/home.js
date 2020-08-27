"use strict";

const app = require('./index');

app.get('/', (req, res) => {
    res.render('home', {'vue': true});
});