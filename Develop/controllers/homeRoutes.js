const router = require('express').Router();
const { Product, Tag } = require('../models');

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
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

// router.get('/cart', withAuth, async (req, res) => {
//   try {
//     const cartData = await Cart.findAll({where: {}});

//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
