const { Client } = require('discord.js');

global.client = new Client();
global.config = require('./config');

client.on('ready', () => require('./src/router'));

client.login(config.client.auth);