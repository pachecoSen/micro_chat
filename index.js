"use strict";

const express = require('express');

const path_base = __dirname;

const app = express();

module.exports = {app, path_base};

const server = require('./core/server');

server.start();