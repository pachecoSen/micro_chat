"use strict";

const {resolve} = require('path');

const {app, path_base} = require(resolve(__dirname, './../index'));

const routers = require(resolve(path_base, 'app/routers/index')),
    middlewares = require(resolve(path_base, 'app/middlewares/index')),
    routines = require('./routines');

module.exports = {path_base};

const http = require('./http');

const start = () => {
    routines.load(path_base);
    app.set('view engine', 'pug');
    app.set('views', resolve(path_base, './app/views'));
    console.log('>> loaded views...');
    middlewares.load(app, path_base);
    routers.load(app);

    http(app);
}

module.exports = {start};