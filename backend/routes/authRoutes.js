const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  const { name, password, roomNo, isAdmin } = req.body;
  try {
    const user = new User({ name, password, roomNo, isAdmin });
    await user.save();
    const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, 'YOUR_SECRET_KEY');
    res.send({ token });
  } catch (err) {
    res.status(422).send({ error: 'Error signing up' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res.status(422).send({ error: 'Must provide name and password' });
  }
  const user = await User.findOne({ name });
  if (!user) {
    return res.status(422).send({ error: 'Invalid name or password' });
  }
  try {
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(422).send({ error: 'Invalid name or password' });
    }
    const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, 'YOUR_SECRET_KEY');
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: 'Invalid name or password' });
  }
});

module.exports = router;