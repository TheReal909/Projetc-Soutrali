'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fundRaiser extends Model {
    
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      this.belongsTo(User, {foreignKey : 'userId'})
    }
  };
  fundRaiser.init({
    name: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    description: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    fundRaiserType: {
      type: DataTypes.ENUM('ForMe', 'ForSomeoneElse'),
      allowNull: false
    },
    category: {
      type: DataTypes.ENUM('Education', 'Health', 'Entrep'),
      allowNull: false
    }, 
    moneyGoal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'fundraiser',
    modelName: 'fundRaiser',
  });
  return fundRaiser;
};