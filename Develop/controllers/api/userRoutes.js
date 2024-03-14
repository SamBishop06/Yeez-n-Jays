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

//Route: Log in.
router.post('/login', async (req, res) => {
  try {
    // Find user by either username or email, whichever one was used to login.
    const userData = await User.findOne({ where: {username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again.' });
    }
    // Verify password with the database.
    const validPassword = await userData.checkPassword(
      req.body.password
    );

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again.' });
      return;
    }

  // Need to save user session but is causing password field to malfunction
  //   req.session.save(() => {
  //     req.session.user_id=userData.id;
  //     req.session.logged_in=true;
  //     res.json({user:userData, message:'You are Logged In.'});
  // });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  // If user is logged in, log them out
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
