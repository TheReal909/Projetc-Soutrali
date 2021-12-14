"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class FundRaiser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, { foreignKey: "userId", as: "user" });
    }
  }
  FundRaiser.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fundRaiserName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      photoUrl: {
        type: DataTypes.STRING,
      },
      fundRaiserType: {
        type: DataTypes.ENUM("SelfFundraiser", "Charity"),
        allowNull: false,
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
      },
      //should be added by admin while signing partnership.
      nameOfInstitution: {
        type: DataTypes.ENUM("UNICEF", "RED CROSS", "WHATEVER"),
        // defaultValue:"NO DATA",
      },
      moneyGoal: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      actualBalance: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "fundraisers",
      modelName: "Fundraiser",
    }
  );
  return FundRaiser;
};
