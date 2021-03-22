const { Router } = require('express');

module.exports.Router = class Routes extends Router {
    constructor() {
        super();

        this.get('/', function (req, res) {
            return res.send({
                client: req.client.user.username,
                session: req.user ? req.user.me.username : false
            });
        });
    };
};

module.exports.page = '/';