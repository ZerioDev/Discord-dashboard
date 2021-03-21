const { Router } = require('express');

module.exports.Router = class Routes extends Router {
    constructor() {
        super();

        this.get('/', function (req, res) {
            if (!req.user) return res.redirect('/login');

            return res.send(req.user.guilds.map(x => x.name));
        });

        this.get('/:ID', function (req, res) {
            if (!req.user) return res.redirect('/login');

            const guild = client.guilds.cache.get(req.params.ID);

            if (!guild) return res.redirect('/invite');
            if (!guild.members.cache.get(req.user.me.id).hasPermission('MANAGE_GUILD')) return res.redirect('/guilds');

            return res.send(guild.name);
        });
    };
};

module.exports.page = '/guilds';