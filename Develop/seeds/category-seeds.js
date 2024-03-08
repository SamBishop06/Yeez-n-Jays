const { Category } = require('../models');

const categoryData = [
  {//TODO: Type out all the categories based off of the wireframing within the ''. 
    category_name: '',
  },
  {
    category_name: '',
  },
  {
    category_name: '',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
