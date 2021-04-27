const { Pool } = require('pg');

const tables = require('./tables');
const config = require('../config');

const pool = new Pool(config.database);

pool.on('error', (err) => console.error(err));

pool.query(`CREATE TABLE users (${tables.users.type.map((x, i) => `${tables.users.insert[i]} ${x}`).join(', ')})`);