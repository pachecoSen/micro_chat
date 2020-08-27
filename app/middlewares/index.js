"use strict";

const express = require('express'),
    {resolve} = require('path');

const load = (app, base) => {
    console.log('>> Starting middleware load...');
    app.use(express.static(resolve(base, './public')));
    console.log('>> Public directory loaded...');
    app.set('view engine', 'pug');
    app.set('views', resolve(base, './app/views'));
    console.log('>> Directory of loaded views');
    console.log('>> Middleware loading finished...');
};

module.exports = {load};