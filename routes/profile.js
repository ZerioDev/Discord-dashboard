const { Router } = require('express');

module.exports.Router = class Routes extends Router {
    constructor() {
        super();

        this.get('/', function (req, res) {
            if (!req.user) return res.redirect('/login');

            return res.render('profile.ejs', {
                user: req.user.me,
            });
        });
    }
};

module.exports.page = '/profile';