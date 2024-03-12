const { Product } = require('../models');

const productData = [
  {
    //TODO: Fill in each table with data correlating to the sneaker's wireframe and items listed-
    //1s are being used as placeholders for now.
    product_name: 'adidas Mens Yeezy Boost 350',
    price: 446,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: 'adidas Mens Boost 350 V2',
    price: 430,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: 'YEEZY BOOST 350 V2',
    price: 214,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: 'Nike Air Yeezy 2 Red October',
    price: 600,
    stock: 12,
    category_id: 1,
  },
  {
    product_name: 'adidas Yeezy Boost 350 Pirate Black (2023)',
    price: 240,
    stock: 1,
    category_id: 1,
  },
  {
    product_name: 'adidas Yeezy Boost 350 V2 Black Red',
    price: 247,
    stock: 1,
    category_id: 1,
  },
  {
    product_name: 'adidas Yeezy Boost 350 V2 Granite',
    price: 270,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: 'adidas Yeezy Boost 350 V2 Cream',
    price: 312,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: 'adidas Yeezy Boost 700 Wave Runner',
    price: 371,
    stock: 20,
    category_id: 2,
  },
   {
    product_name: 'adidas Yeezy 500 Utility Black',
    price: 319,
    stock: 20,
    category_id: 2,
  },
  {
    product_name: '',
    price: 1,
    stock: 20,
    category_id: 2,
  },
  {
    product_name: '',
    price: 1,
    stock: 20,
    category_id: 2,
  },
  {
    product_name: '',
    price: 1,
    stock: 20,
    category_id: 2,
  },
  {
    product_name: '',
    price: 1,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: '',
    price: 1,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: '',
    price: 1,
    stock: 20,
    category_id: 2,
  },

  {
    product_name: '',
    price: 1,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: '',
    price: 1,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: '',
    price: 1,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: '',
    price: 1,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: '',
    price: 1,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: '',
    price: 1,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: '',
    price: 1,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: '',
    price: 1,
    stock: 20,
    category_id: 3,
  },

];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
