'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Payment.init({
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
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'pending',
      validate: {
        notEmpty: {
          msg: 'Status must be filled'
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
    }
  }, {
    sequelize,
    modelName: 'Payment',
    underscored: true
  });
  return Payment;
};