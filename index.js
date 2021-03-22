const { Client } = require('discord.js');

global.client = new Client();
global.config = require('./config');

client.on('ready', () => require('./src/router'));

client.on('newUser', (user) => console.log(`${user.username} just logged into the dashboard`));

client.login(config.client.token);