const { Pool } = require('pg');

const pool = new Pool({
    user: 'express_user',
    host: '192.168.18.160',
    database: 'express_db',
    password: 'admin123',
    port: 5432,
    connectTimeout: 5000,
});

module.exports = pool;
