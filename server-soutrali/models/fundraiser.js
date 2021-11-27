'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FundRaiser extends Model {
    
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
  FundRaiser.init({
    name: {
      type:  DataTypes.STRING,
      allowNull: false
      
    },
    description: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    fundRaiserType: {
      type: DataTypes.ENUM('ForMe', 'ForSomeoneElse', 'NonProfitOrganization'),
      allowNull: false
    },
    category: {
      type: DataTypes.ENUM('Accident & Emergency','Education', 'Health', 'Business', 'Animals', 'Religion', 'Funerals', 'Other'),
      defaultValue: 'Choose a category',
      allowNull: false
    }, 
    moneyGoal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    actualBalance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

  }, {
    sequelize,
    tableName: 'fundraiser',
    modelName: 'fundRaiser',
  });
  return FundRaiser;
};