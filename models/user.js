'use strict';
const bcrypt = require('../helpers/bcrypt');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Order_transaction, {
        targetKey: 'id',
        foreignKey: 'id'
      })
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Must be filled with email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Password must be filled'
        },
        len: [5, 20],
        isAlphanumeric: {
          msg: 'Password must be contain between alphabet and number'
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name must be filled with name'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    underscored: true,
    hooks: {
      beforeCreate: (user, options) => {
        user.password = bcrypt.hasher(user.password)
      }
    }
  });
  return User;
};