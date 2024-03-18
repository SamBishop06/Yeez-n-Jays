const router = require('express').Router();
const argon2 = require('argon2');
const { User, Cart } = require('../../models');
// const withAuth = require('')
// CREATE a new user
router.post('/signup', async (req, res) => {
  try {
    // Create the newUser with the hashed password and save to DB
    const userData = await User.create({
      username: req.body.newUsername,
      email: req.body.newEmail,
      password: req.body.newPassword,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json({ user: userData, message: 'You are Logged In.' });
    });
    return;
  } catch (err) {
    res.status(400).json(err);
  }
});

//Route: Log in.
router.post('/login', async (req, res) => {
  try {
    // Find user by either username
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    console.log(userData.id);

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again.' });
    }
    // Verify password with the database.
    const validPassword = await userData.checkPassword(req.body.password);
    console.log(validPassword);
    console.log(userData.id);
    // console.log(req.session);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again.' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are Logged In.' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  // If user is logged in, log them out
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// router.post('/cart', withAuth, async (req, res) => {
//   try {
//     await Cart.create({
//       product_id: req.body.product_id,
//       user_id: req.session.user_id,
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

module.exports = router;
