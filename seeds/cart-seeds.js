const { Cart } = require('../models');

const cartData = [
  {
    product_id: 3,
    user_id: 1,
  },
  {
    product_id: 8,
    user_id: 1,
  },
  {
    product_id: 5,
    user_id: 1,
  },
  {
    product_id: 13,
    user_id: 1,
  },
  {
    product_id: 24,
    user_id: 1,
  },
];

const seedUsers = () => Cart.bulkCreate(cartData);

module.exports = seedUsers;
