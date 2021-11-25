'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('fundRaisers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING
      },
      fundRaiserType: {
        allowNull: false,
        type: DataTypes.ENUM('ForMe', 'ForSomeoneElse')
      },
      category: {
        allowNull: false,
        type: DataTypes.ENUM('Education', 'Health', 'Entrep')
      }, 
      moneyGoal: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      actualBalance: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('fundRaisers');
  }
};