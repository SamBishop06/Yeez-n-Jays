

// TODO:add a field called 'tags' and that could be a string of data
// product.findAll (where clause)- where 'tags in' - this should be in the routes files

// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      // Quick patch. Allows deletion of category.
      //allowNull: true, // If allowNull not set to true, you cant delete a category.
      references: {
        model: 'category',
        key: 'id',
      },
    },
    //tags: {
    //type: DataTypes.STRING, // Store tags as a comma-separated string
    //allowNull: true,
    //references: {
    //model: 'tag',
    //key: 'tag_name',
    //},
    //},
    // Add a field for storing image URLs //TODO: can I add uri? images
    //image_url: {
    //type: DataTypes.STRING,
    //allowNull: true, // Allow products to have no image
    //},
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
