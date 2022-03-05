"use strict";
const api = require('./api');
module.exports.register = async server => {
    await api.register(server);
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'My First Hapi Server';
        }
    });
}