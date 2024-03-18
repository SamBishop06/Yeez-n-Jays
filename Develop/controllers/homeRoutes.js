const router = require('express').Router();
const { Product, Tag, Cart } = require('../models');
const withAuth = require('../utils/auth');

router.get('/login', (req, res) => {
  // if user is logged in, redirect to homepage
  res.render('login');
});

router.get('/', (req, res) => {
  res.render('homepage', {
    logged_in: req.session.logged_in,
  });
});

router.get('/products', async (req, res) => {
  try {
    const productData = await Product.findAll();

    const shoes = productData.map((post) => post.get({ plain: true }));
    res.render('products', {
      shoes,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/cart', withAuth, async (req, res) => {
  try {
    const cartData = await Cart.findAll({
      where: { user_id: req.session.user_id },
    });
    console.log(cartData);
    const cartItems = cartData.map((post) => post.get({ plain: true }));
    res.render('cart', {
      cartItems,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', (req, res) => {
  // if user is logged in, redirect to homepage
  res.render('signup');
});

module.exports = router;
