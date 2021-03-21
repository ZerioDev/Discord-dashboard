const { Router } = require('express');

module.exports.Router = class Routes extends Router {
    constructor() {
        super();

        this.use('/', function (req, res) {
            if (!req.user) return res.redirect('/login');

            if (!req.path.split('/')[1]) return res.send(req.user.guilds.map(x => x.name));

            const guild = client.guilds.cache.get(req.path.split('/')[1]);

            if (!guild) return res.redirect('/invite');
            if (!guild.members.cache.get(req.user.me.id).hasPermission('MANAGE_GUILD')) return res.redirect('/guilds');

            return res.send(guild.name);
        });
    };
};

module.exports.page = '/guilds';