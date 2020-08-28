"use strict";

const load = io => {
    io.on('connection', cliente => {
        cliente.on('newMsg', (msg, callback) => {
            console.log(msg);
            callback('HI')
        });
    });
}

module.exports = {load};