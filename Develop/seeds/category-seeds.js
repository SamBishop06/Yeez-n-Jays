const { Category } = require('../models');

const categoryData = [
  {//TODO: Type out all the categories based off of the wireframing within the ''
    category_name: 'Sneakers',
  },
  {
    category_name: 'Boost & Boots',
  },
  {
    category_name: 'Foam RNR/Slides',
  },
  {
    category_name: 'Jordan 1s',
  },
  {
    category_name: 'Jordan 4s',
  },
  {
    category_name: 'Jordan 11s',
  },

];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
