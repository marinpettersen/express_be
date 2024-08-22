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
    connectionString: process.env.DATABASE_URL || 'postgres://u374jdm29knbfe:p46f194cb39aa1f95e0c3c3b6308e1c4f6d111f38f0377c70cfcdcc1f371fa0aa@c67okggoj39697.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/dbeg92gpt2i5kv',
    ssl: {
        rejectUnauthorized: false,
    },
    connectTimeout: 5000,
});

module.exports = pool;

