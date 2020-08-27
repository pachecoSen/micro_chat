"use strict";

const {resolve} = require('path');

const {app, path_base} = require(resolve(__dirname, './../index'));

const routers = require(resolve(path_base, 'app/routers/index'));

module.exports = {path_base};

const http = require('./http');

const start = () => {
    routers.load(app);
    
    http(app);
}

module.exports = {start};