// import models
//TODO: Do we need the onDelete property for this?
const Product = require('./Products');
const Category = require('./Category');
const Tag = require('./Tag'); //Import the tag model
const User = require('./User');
const Cart = require('./Cart');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

//hasMany in this context helps establish and define the one-to-many relationship between Category and Product models, along with the appropriate foreign key constraint and cascading deletion behavior.
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Many-to-many relationship between Product and Tag
//Product.belongsToMany(Tag, {});

// Many-to-many relationship between Tag and Product
//Tag.belongsToMany(Product, {});

//TODO: Set up relationship between Cart and Product and User

module.exports = {
  Product,
  Category,
  Tag,
  User,
  Cart,
  //ProductTag,
};

