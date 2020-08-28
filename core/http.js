"use strict";

const http = require('http'),
    {resolve} = require('path');

const {path_base} = require(resolve(__dirname, './server'));

const {port_server:port} = require(resolve(path_base, './config/server'));

const socket_server = require('./socket');

module.exports = app => {
    const server_http = http.createServer(app);

    socket_server.load(server_http, path_base);
    server_http.listen(port);
    
    console.log(`>> HTTP server started on port ${port}`);
}