const router = require('express').Router();
const { Product, Tag } = require('../models');

router.get('/login', (req, res) => {
  // if user is logged in, redirect to homepage
  res.render('login');
});

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/products', async (req, res) => {
  // res.render('dashboard');
  try {
    const productData = await Product.findAll();

    const shoes = productData.map((post) => post.get({ plain: true }));
    res.render('products', {
      shoes,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
