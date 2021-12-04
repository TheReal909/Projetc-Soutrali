"use strict";
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("users", {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {msg: 'should not be null'},
          notEmpty: {
            msg: 'please, enter your first name'
          }
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {msg: 'should not be null'},
          notEmpty: {
            msg: 'please, enter your last name'
          }
        }
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      typeOfUser: {
        allowNull: false,
        type: DataTypes.ENUM('Individual', 'Organisation'),
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false
      },
      passwordSalt: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
