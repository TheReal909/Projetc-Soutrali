'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Fundraiser', {
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
        type: DataTypes.ENUM('Accident & Emergency','Education' ,'Health', 'Business', 'Animals', 'Religion', 'Funerals', 'Other'),
        defaultValue: 'Choose a category',
        allowNull: false
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
        allowNull: false,
        references: {         // Fundraiser belongsTo User 1:1
          model: 'Fundraiser',
          key: 'id'
        }
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