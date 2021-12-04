'use strict';
const {
  Model
} = require('sequelize');
// const fundraiser = require('./fundraiser');

const PR0TECTED_ATTRIBUTES = ['password', 'passwordSalt', 'id']


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Fundraiser, {as: 'fundraiser'})
    }
    // the exact field that i want to hide to the public, here i want to hide the id
    // toJSON(){
    //   return {...this.get(), id: undefined};
    // }

    // shoudl use for let..of.. to iterate over the values of the object.
    // toJSON(){
    //   let attributes = Object.assign({}, this.get());
    //   for(let a of PR0TECTED_ATTRIBUTES){
    //     delete attributes[a];
    //   }
    //   return attributes;
    // }
  };
  User.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
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
          msg: 'please, enter your lastname'
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
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};