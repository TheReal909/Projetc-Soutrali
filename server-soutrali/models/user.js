'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    // the exact field that i want to hide to the public, here i want to hide the id
    // toJSON(){
    //   return {...this.get(), id: undefined};
    // }
  };
  User.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'should not be null'},
        notEmpty: {
          msg: 'please, enter a name'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'please enter a valid email'
        }
      }
    },
    typeOfUser: {
      type: DataTypes.ENUM('Individual', 'Organisation'),
      allowNull: false
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
    },
    passwordSalt: {
      type: DataTypes.STRING,
    }

  }, {
    sequelize,
    tableName: 'user',
    modelName: 'User',
  });
  return User;
};