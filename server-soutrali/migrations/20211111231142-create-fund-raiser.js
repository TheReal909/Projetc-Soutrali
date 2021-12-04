"use strict";
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("fundraisers", {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fundRaiserName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      fundRaiserType: {
        allowNull: false,
        type: DataTypes.ENUM("ForMe", "ForSomeoneElse"),
      },
      category: {
        type: DataTypes.ENUM(
          "Accident & Emergency",
          "Education",
          "Health",
          "Business",
          "Animals",
          "Religion",
          "Funerals",
          "Other"
        ),
        defaultValue: "Choose a category",
        allowNull: false,
      },
      //should be added by admin while signing partnership.
      nameOfInstitution: {
        type: DataTypes.ENUM("UNICEF", "RED CRUSE", "WHATEVER"),
        defaultValue: "Select a NGO name",
      },
      moneyGoal: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      actualBalance: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          // Fundraiser belongsTo User 1:1
          model: "Fundraiser",
          key: "id",
        },
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
    await queryInterface.dropTable("fundRaisers");
  },
};
