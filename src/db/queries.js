// src/db/queries.js

const pool = require('./dbConfig');

// Create a new record
const createData = async (data) => {
  const { person_id, absence_type, sub_absence_type, start_date, end_date } = data;
  const query = 'INSERT INTO absencetable (person_id, absence_type, sub_absence_type, start_date, end_date) VALUES ($1, $2, $3, $4, $5) RETURNING *';
  const values = [person_id, absence_type, sub_absence_type, start_date, end_date];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};



// Read all records
const getAllData = async () => {
  const query = 'SELECT * FROM empdata';

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

// Read a record by ID
const getDataById = async (quota_id) => {
  const query = 'SELECT * FROM balance_quota WHERE quota_id = $1';
  const values = [quota_id];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

// Update a record by ID
const updateData = async (person_id, newData) => {
  const { absence_type, sub_absence_type, start_date, end_date } = newData;
  const query = 'UPDATE absencetable SET absence_type = $2, sub_absence_type = $3, start_date = $4, end_date = $5 WHERE person_id = $1 RETURNING *';
  const values = [person_id, absence_type, sub_absence_type, start_date, end_date];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

// Delete a record by ID
const deleteData = async (person_id) => {
  const query = 'DELETE FROM absencetable WHERE person_id = $1 RETURNING *';
  const values = [person_id];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createData,
  getAllData,
  getDataById,
  updateData,
  deleteData,
};
