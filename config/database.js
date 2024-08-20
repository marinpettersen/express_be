// const { Pool } = require('pg');

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'express_db',
//     password: 'postgres',
//     port: 5432,
//     connectTimeout: 5000,
// });

// module.exports = pool;

const { Pool } = require('pg');
require('dotenv').config();  // Mengimpor dotenv untuk memuat variabel lingkungan dari file .env

// Konfigurasi Pool dengan URL dari variabel lingkungan, jika tersedia
const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:wBTxaOloXiwqwIGCsZxSDBLEIbIpAMWs@autorack.proxy.rlwy.net:41127/railway',
    ssl: process.env.DATABASE_URL ? {
        rejectUnauthorized: false,
    } : false,
    connectTimeout: 5000,
});

module.exports = pool;
