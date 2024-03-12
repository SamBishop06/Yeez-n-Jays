const router = require('express').Router();
const { Product } = require('../models');

router.get('/login', (req, res) => {
  // if user is logged in, redirect to homepage
  res.render('login');
});
