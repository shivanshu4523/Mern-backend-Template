const express = require('express');
const router = express.Router();
const User = require('../models/user');

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post('/', async (req, res) => {
  const { name,registrationNo,department,email,password } = req.body;

  try {
    let user = new User({
      name,
      registrationNo,
      department,
      email,
      password
    });

    await user.save();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

