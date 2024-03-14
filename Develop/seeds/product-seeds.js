const { Product } = require('../models');

const productData = [
  {
    //Fill in each table with data correlating to the sneaker's wireframe and items listed-
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
    product_name: 'adidas Yeezy Boost 700 Salt',
    price: 371,
    stock: 20,
    category_id: 2,
  },
  {
    product_name: 'adidas Yeezy Boost 700 Wave Runner',
    price: 1,
    stock: 20,
    category_id: 2,
  },
  {
    product_name: 'adidas Yeezy Desert Boot',
    price: 479,
    stock: 20,
    category_id: 2,
  },
  {
    product_name: 'adidas Yeezy Desert Boot',
    price: 299,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: 'adidas Yeezy Boost 700 Teal Blue',
    price: 285,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: 'adidas Yeezy 700 V3 Dark Glow',
    price: 460,
    stock: 20,
    category_id: 2,
  },

  {
    product_name: 'adidas Yeezy Foam RNR Clay Red',
    price: 107,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: 'adidas Yeezy Foam RNR MX Cinder',
    price: 115,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: 'adidas Yeezy Foam RNR',
    price: 166,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: 'adidas Yeezy Foam RNR Carbon',
    price: 139,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: 'adidas Yeezy Slide Granite',
    price: 218,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: 'adidas Yeezy Slide Bone (2022/2023) Restock',
    price: 125,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: 'adidas Yeezy Slide Pure (Restock Pair)',
    price: 120,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: 'Jordan 1 Retro High OG Chicago Lost and Found',
    price: 412,
    stock: 20,
    category_id: 4,
  },
  {
    product_name: 'Jordan 1 Retro High OG Patent Bred',
    price: 200,
    stock: 20,
    category_id: 4,
  },
  {
    product_name: 'Jordan 1 Retro High OG Black White',
    price: 121,
    stock: 20,
    category_id: 4,
  },
  {
    product_name: 'Jordan 1 Retro High OG Yellow Ochre',
    price: 371,
    stock: 20,
    category_id: 4,
  },
  {
    product_name: 'Jordan 1 Retro High OG Palomino',
    price: 220,
    stock: 20,
    category_id: 4,
  },
  {
    product_name: 'Jordan 1 Retro High OG SP Travis Scott Mocha',
    price: 1495,
    stock: 0,
    category_id: 4,
  },
  {
    product_name: 'Jordan 1 Retro Low OG SP Travis Scott Black Phantom',
    price: 651,
    stock: 20,
    category_id: 4,
  },
  {
    product_name: 'Jordan 1 Retro Low OG SP Travis Scott Olive (PS)',
    price: 190,
    stock: 20,
    category_id: 4,
  },
  {
    product_name: 'Jordan 4 Retro Bred Reimagined',
    price: 371,
    stock: 20,
    category_id: 5,
  },
  {
    product_name: 'Jordan 4 Retro Thunder (2023) ',
    price: 256,
    stock: 20,
    category_id: 5,
  },
  {
    product_name: 'Jordan 4 Retro Military Black',
    price: 420,
    stock: 20,
    category_id: 5,
  },
  {
    product_name: 'Jordan 4 Retro SB Pine Green',
    price: 401,
    stock: 20,
    category_id: 5,
  },
  {
    product_name: 'Jordan 4 Retro Black Cat (2020)',
    price: 825,
    stock: 20,
    category_id: 5,
  },
  {
    product_name: 'Jordan 4 Retro Midnight Navy',
    price: 326,
    stock: 20,
    category_id: 5,
  },
  {
    product_name: 'Jordan 4 Retro Off-White Sail',
    price: 756,
    stock: 20,
    category_id: 5,
  },
  {
    product_name: 'Jordan 4 Retro Lightning (2021)',
    price: 306,
    stock: 20,
    category_id: 5,
  },
  {
    product_name: 'Jordan 11 Retro DMP Gratitude (2023)',
    price: 215,
    stock: 20,
    category_id: 6,
  },
  {
    product_name: 'Jordan 11 Retro Cool Grey (2021)',
    price: 285,
    stock: 20,
    category_id: 6,
  },
  {
    product_name: 'Jordan 11 Retro Cherry (2022)',
    price: 225,
    stock: 20,
    category_id: 6,
  },
  {
    product_name: 'Jordan 11 Retro Playoffs Bred (2019)',
    price: 614,
    stock: 20,
    category_id: 6,
  },
  {
    product_name: 'Jordan 11 Retro Concord (2018)',
    price: 438,
    stock: 20,
    category_id: 6,
  },
  {
    product_name: 'Jordan 11 Retro Space Jam (2016)',
    price: 383,
    stock: 20,
    category_id: 6,
  },
  {
    product_name: 'Jordan 11 Retro Jubilee 25th Anniversary',
    price: 261,
    stock: 20,
    category_id: 6,
  },
  {
    product_name: 'Jordan 11 Retro Gamma Blue ',
    price: 661,
    stock: 20,
    category_id: 6,
  },

];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
