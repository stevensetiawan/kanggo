'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order_transaction.belongsTo(models.User, {
        foreignKey: 'user_id'
      })
      Order_transaction.belongsTo(models.Product, {
        foreignKey: 'product_id'
      })
    }
  };
  Order_transaction.init({
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      validate: {
        isNumeric: {
          msg: 'Must be filled by integer'
        }
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      validate: {
        isNumeric: {
          msg: 'Must be filled by integer'
        }
      }
    },    
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      validate: {
        isNumeric: {
          msg: 'Must be filled by integer'
        }
      }
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaulValue: null,
      validate: {
        isNumeric: {
          msg: 'must be filled by float'
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'pending',
      validate: {
        notEmpty: {
          msg: 'Status must be filled'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Order_transaction',
    underscored: true
  });
  return Order_transaction;
};