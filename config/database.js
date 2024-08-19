const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'express_db',
    password: 'postgres',
    port: 5432,
    connectTimeout: 5000,
});

module.exports = pool;
