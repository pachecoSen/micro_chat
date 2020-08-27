"use strict";

const app = require('./index');

app.get('/', (req, res) => {
    res.send('Hola Mundo')
});