"use strict";

const {readdirSync} = require('fs'),
    {resolve} = require('path');

const load = app => {
    console.log('>> Starting load routes...');
    module.exports = app;
    console.log('>> Prepared resources...');
    console.log('>> Preparing Modules...');
    let routers = readdirSync(resolve(__dirname, './'));
    routers = routers.filter(r => __filename !== resolve(__dirname, r));
    routers.forEach(r => require(`./${r}`));
    console.log('>> Loaded modules...');
    console.log('>> Route loading finished...');
};

module.exports = {load};