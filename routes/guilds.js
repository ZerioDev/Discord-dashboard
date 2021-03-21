const { Router } = require('express');

module.exports.Router = class Routes extends Router {
    constructor() {
        super();

        this.get('/', function (req, res) {
            if (!req.user) return res.redirect('/login');

            return res.send(req.user.guilds.map(x => x.name));
        });
    };
};

module.exports.page = '/guilds';