const { Router } = require('express');

module.exports.Router = class Routes extends Router {
    constructor() {
        super();

        this.get('/', function (req, res) {
            return res.redirect(`https://discord.gg/${req.client.config.supportGuild.urlCode || '5cGSYV8ZZj'}`);
        });
    }
};

module.exports.page = '/support';