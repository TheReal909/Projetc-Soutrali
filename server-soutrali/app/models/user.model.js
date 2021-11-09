const bcrypt = require('bcrypt')

        module.exports = function (sequelize, DataTypes) {
            var User = sequelize.define("User", {
              username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                  isUnique: function (value, next) {
                    var self = this;
                    User.find({ where: { username: value } })
                      .then(function (user) {
                        // reject if a different user wants to use the same username
                        if (user && self.id !== user.id) {
                          return next('username already in use!');
                        }
                        return next();
                      })
                      .catch(function (err) {
                        return next(err);
                      });
                  }
                }
              },

              email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                // can use this in the controller on the login part.
                validate: {
                  isUnique: function (value, next) {
                    var self = this;
                    User.find({ where: { email: value } })
                      .then(function (user) {
                        // reject if a different user wants to use the same email
                        if (user && self.id !== user.id) {
                          return next('Email already in use!');
                        }
                        return next();
                      })
                      .catch(function (err) {
                        return next(err);
                      });
                  }
                }
              },

              // 1 individual , 2 association, 3 NGO , ...
              typeOfUser: {
                type: DataTypes.INTEGER,
                allowNull:true,
                defaultValue:null
              },
          
              country: {
                type: DataTypes.STRING,
                allowNull:true,
                defaultValue:null
              },
          
              birthDate:{
                type: DataTypes.DATEONLY,
                allowNull:true,
                defaultValue:null
              },

              password: {
                type: DataTypes.STRING,
                allowNull:true,
                defaultValue:null
              }
    }, {
        classMethods: {
          generateHash: function (password) {
            return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
          },
  
        },
        instanceMethods: {
          validPassword: function (password) {
            return bcrypt.compareSync(password, this.password);
          }
        }
  
  
      });
