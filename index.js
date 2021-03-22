const { Client } = require('discord.js');
const Dashboard = require('./src/router');

const client = new Client();
client.config = require('./config');

client.on('ready', () => client.dashboard = new Dashboard(client));
client.on('newUser', (user) => console.log(`${user.username} just logged into the dashboard`));


client.on('message', message => {
	if(message.content.startsWith('!ping')) message.reply('Pong !');
});


client.login(client.config.client.token);