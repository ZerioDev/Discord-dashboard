const { Router } = require('express');

module.exports.Router = class Routes extends Router {
    constructor() {
        super();

        this.get('/', function (req, res) {
            return res.send(client.user.username);
        });
    };
};

module.exports.page = '/';