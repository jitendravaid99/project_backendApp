const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'absenceDB',
  password: 'postgres1234',
  port: 5432,
});

module.exports = pool;
