const { Pool } = require('pg');

class Database {
    constructor(client) {
        this.pool = new Pool(client.config.database);

        this.pool.on('error', (err) => console.error(err));

        console.log(`Successfully logged to the database as ${client.config.database.user}`);
    }
}

module.exports = Database;