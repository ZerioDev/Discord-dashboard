const { Pool } = require('pg');
const { Collection } = require('discord.js');

class Database {
    constructor(client) {
        this.client = client;

        this.pool = new Pool(client.config.database);

        this.pool.on('error', (err) => console.error(err));

        this.client.dbUsers = new Collection();

        console.log(`Successfully logged to the database as ${client.config.database.user}`);
    }
}

module.exports = Database;