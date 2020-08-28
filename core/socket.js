"use strict";

const socket = require('socket.io'),
    {resolve} = require('path');

const load = (server, path_base) => {
    console.log('>> Starting socket server load...');
    const io = socket(server);
    const events = require(resolve(path_base, './app/events/index'));
    console.log('>> Starting socket event loading...');
    events.load(io);
    console.log('>> Socket event loading finished...');
    console.log('>> Socket server load finished...');
}

module.exports = {load};