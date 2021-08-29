'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.Order_transaction, {
        targetKey: 'id',
        foreignKey: 'id'
      })
    }
  };
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name must be filled with name'
        }
      }
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaulValue: null,
      validate: {
        isNumeric: {
          msg: 'must be filled by float'
        }
      }
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaulValue: null,
      validate: {
        isNumeric: {
          msg: 'must be filled by float'
        }
      }
    }
  }, {
    sequelize,
    tableName: 'Products',
    modelName: 'Product',
    underscored: true
  });
  return Product;
};