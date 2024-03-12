const router = require('express').Router();
const argon2 = require('argon2');
const User = require('../../models/User');

// CREATE a new user
router.post('/', async (req, res) => {
  try {
    // Configure Argon2 password hashing settings
    const hash = await argon2.hash(password, {
      type: argon2.argon2d,
      memoryCost: 2 ** 64,
      hashLength: 50,
    });
    const newUser = req.body;
    // Hash the password from 'req.body' and save to newUser
    newUser.password = await hash(req.body.password);
    // Create the newUser with the hashed password and save to DB
    const userData = await User.create(newUser);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;