// import models
//TODO: Do we need the onDelete property for this?
const Product = require('./Product');
const Category = require('.Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

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

// Categories have many Products
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'productTag_products',
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'productTag_products',
  foreignKey: 'tag_id',
  onDelete: 'CASCADE',
});
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
