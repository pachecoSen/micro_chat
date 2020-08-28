"use strict";

const load = io => {
    io.on('connection', cliente => {
        cliente.on('newMsg', (data, callback) => {});
    });
}

module.exports = {load};