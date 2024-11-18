const express = require('express');
const Complaint = require('../models/Complaint');

const router = express.Router();

router.post('/submit', async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    await complaint.save();
    res.status(201).send(complaint);
  } catch (error) {
    res.status(400).send({ error: 'Error submitting complaint' });
  }
});

router.get('/', async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.send(complaints);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching complaints' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(complaint);
  } catch (error) {
    res.status(400).send({ error: 'Error updating complaint' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Complaint.findByIdAndDelete(req.params.id);
    res.send({ message: 'Complaint deleted successfully' });
  } catch (error) {
    res.status(400).send({ error: 'Error deleting complaint' });
  }
});

module.exports = router;