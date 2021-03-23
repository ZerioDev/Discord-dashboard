const { Router } = require('express');

module.exports.Router = class Routes extends Router {
	constructor() {
		super();

		this.get('/', async function(req, res) {

			req.session.destroy();
			res.status(200).redirect('/');

		});
	}
};

module.exports.page = '/logout';