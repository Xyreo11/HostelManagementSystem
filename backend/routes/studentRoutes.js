const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// GET: Fetch all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
