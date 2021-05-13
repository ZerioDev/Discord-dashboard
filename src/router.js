const fs = require('fs');
const express = require('express');
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts');

class Dashboard {
    constructor(client) {
        this.app = express();
        this.client = client;

        this.setup();
        this.routes();

        this.dashboardURL = `${this.client.config.dashboard.url}${this.client.config.dashboard.port !== 80 ? ':' + this.client.config.dashboard.port : ''}`;

        console.log(`Dashboard launched on the port ${this.client.config.dashboard.port}`);
        console.log(`Access it at : ${this.dashboardURL}`);
    }

    setup() {
        this.app.use(express.json());
        this.app.set('view engine', 'ejs');
        this.app.use(express.static('style'));
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(expressLayouts);

        this.app.use(session({ secret: `${Date.now()}${this.client.user.id}`, resave: false, saveUninitialized: false }));

        this.app.use((req, res, next) => {
            req.user = req.session.user;
            req.client = this.client;
            req.dashURL = this.dashboardURL;
            req.config = this.client.config.dashboard;

            next();
        });

        this.app.listen(this.client.config.dashboard.port);
    }

    routes() {
        const files = fs.readdirSync('./routes/').filter(file => file.endsWith('.js'));

        for (const file of files) {
            const route = require(`../routes/${file}`);

            if (!this.client.config.supportGuild.enabled && route.page === '/support') return;

            this.app.use(route.page, new route.Router());

            console.log(`Route ${file.split('.')[0].toLowerCase()} launched`);
        }
    }
}

module.exports = Dashboard;