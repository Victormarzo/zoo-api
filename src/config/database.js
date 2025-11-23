import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const config = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST, 
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
};

const pool = new pg.Pool(config);

async function testConnection() {
    try {
        await pool.query('SELECT 1 + 1 AS result');
        console.log('Database connection successful.');
        return { success: true };
    } catch (error) {
        console.error('Database connection test failed:', error); 
        return { success: false, message: error.message };
    }
}

function query(text, params) {
    return pool.query(text, params);
}

export { pool, query, testConnection };