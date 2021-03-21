const fetch = require('node-fetch');
const { Router } = require('express');

module.exports.Router = class Routes extends Router {
    constructor() {
        super();

        this.get('/', async function (req, res) {
            const URL = `${config.dashboard.url}:${config.dashboard.port}/login`;

            if (!req.query.code) return res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&scope=identify%20guilds&response_type=code&redirect_uri=${encodeURIComponent(URL)}`);

            const params = new URLSearchParams();

            params.set('code', req.query.code);
            params.set('client_id', client.user.id);
            params.set('grant_type', 'authorization_code');
            params.set('client_secret', config.client.secret);
            params.set('redirect_uri', URL);

            const auth = await fetch('https://discord.com/api/oauth2/token', {
                body: params,
                method: 'POST',
            });

            const tokens = await auth.json();

            if (!tokens.access_token) return res.redirect('/login');

            const user = {};

            await get('https://discord.com/api/users/@me').then(data => user.me = data);
            await get('https://discord.com/api/users/@me/guilds').then(data => user.guilds = data);

            req.session.user = user;

            return res.redirect('/profile');

            async function get(url) {
                const data = await fetch(url, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${tokens.access_token}`
                    }
                });

                return await data.json();
            }
        });
    };
};

module.exports.page = '/login';