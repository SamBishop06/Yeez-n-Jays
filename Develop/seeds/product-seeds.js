const { Product } = require('../models');

const productData = [
  {
    //TODO: Fill in each table with data correlating to the sneaker's wireframe and items listed-
    //1s are being used as placeholders for now.
    product_name: '',
    price: 1,
    stock: 1,
    category_id: 1,
  },
  {
    product_name: '',
    price: 1,
    stock: 1,
    category_id: 1,
  },
  {
    product_name: '',
    price: 1,
    stock: 1,
    category_id: 1,
  },
  {
    product_name: '',
    price: 1,
    stock: 1,
    category_id: 1,
  },
  {
    product_name: '',
    price: 1,
    stock: 1,
    category_id: 1,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
