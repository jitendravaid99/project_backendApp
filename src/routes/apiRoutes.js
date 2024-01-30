// src/routes/apiRoutes.js

const express = require('express');
const router = express.Router();
const { getAllData, getDataById, createData, updateData, deleteData } = require('../db/queries');


// Get all data
router.get('/data', async (req, res) => {
  try {
    const data = await getAllData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get data by ID
router.get('/data/:quota_id', async (req, res) => {
  const { quota_id } = req.params;
  try {
    const data = await getDataById(quota_id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create data
router.post('/data', async (req, res) => {
  const newData = req.body;
  try {
    const createdData = await createData(newData);
    res.json(createdData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update data by ID
router.put('/data/:person_id', async (req, res) => {
  const { person_id } = req.params;
  const updatedData = req.body;
  try {
    const result = await updateData(person_id, updatedData);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete data by ID
router.delete('/data/:person_id', async (req, res) => {
  const { person_id } = req.params;
  try {
    const result = await deleteData(person_id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;


// // backend_project/src/routes/apiRoutes.js

// const express = require('express');
// const router = express.Router();

// router.get('/example', (req, res) => {
//   res.json({ message: 'Hello from the backend API!' });
// });

// module.exports = router;
