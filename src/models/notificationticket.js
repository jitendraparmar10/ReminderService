'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notificationticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notificationticket.init({
    subject: {
      type: DataTypes.STRING,allowNull: false
    },
    content: {
      type: DataTypes.STRING,allowNull: false
    },
    receptientEmail:{
      type: DataTypes.STRING,allowNull: false
    },
    status: {
      type: DataTypes.ENUM,allowNull: false,
      values: ["PENDING", "SUCCESS", "FAILED"]
    },
    notificationTime: {
      type: DataTypes.DATE,allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Notificationticket',
  });
  return Notificationticket;
};