const { Router } = require('express');

module.exports.Router = class Routes extends Router {
	constructor() {
		super();

		this.get('/', function (req, res) {
			if (!req.user) return res.redirect('/login');

			return res.render('guilds.ejs', {
				user: req.user.me,
				guilds: req.user.guilds.sort((a, b) => a.name.localeCompare(b.name)),
			});
		});

		this.get('/:ID', function (req, res) {
			if (!req.user) return res.redirect('/login');

			const guild = req.client.guilds.cache.get(req.params.ID);

			if (!guild) return res.redirect('/invite');
			if (!guild.members.cache.get(req.user.me.id).hasPermission('MANAGE_GUILD')) return res.redirect('/guilds');

			return res.send(guild.name);
		});
	}
};

module.exports.page = '/guilds';