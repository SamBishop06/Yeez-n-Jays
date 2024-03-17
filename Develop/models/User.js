const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const argon2 = require('argon2');

class User extends Model {
  async checkPassword(loginPw) {
    return await argon2.verify(this.password, loginPw);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await argon2.hash(newUserData.password, {
          type: argon2.argon2d,
          memoryCost: 2 ** 16,
          hashLength: 50,
        });
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
