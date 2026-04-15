const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Supabase hosted Postgres
  },
});

const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('✅ Connected to PostgreSQL (Supabase)');
    await client.query('SELECT NOW()');
    client.release();
  } catch (err) {
    console.error('❌ Database connection failed:', err.message);
  }
};

module.exports = { pool, testConnection };
