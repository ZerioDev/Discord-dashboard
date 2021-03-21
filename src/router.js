const fs = require('fs');
const express = require('express');
const session = require('express-session');

class Dashboard {
    constructor() {
        this.app = express();

        this.setup();
        this.routes();

        console.log(`Dashboard launched on the port ${config.dashboard.port}`);
    }

    setup() {
        this.app.use(express.json());
        this.app.set('view engine', 'ejs');
        this.app.use(express.static('style'));
        this.app.use(express.urlencoded({ extended: false }));

        this.app.use(session({ secret: client.token, resave: false, saveUninitialized: false }));

        this.app.use((req, res, next) => {
            req.user = req.session.user;

            next();
        });

        this.app.listen(config.dashboard.port);
    }

    routes() {
        const files = fs.readdirSync('./routes/').filter(file => file.endsWith('.js'));

        for (const file of files) {
            const route = require(`../routes/${file}`);
            this.app.use(route.page, new route.Router());

            console.log(`Route ${file.split('.')[0].toLowerCase()} launched`);
        }
    }
};

module.exports = new Dashboard();