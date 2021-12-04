const Sequelize = require("sequelize");
const Model = require("../../models");
const bcrypt = require('bcrypt');

exports.getAll = async (req, res) => {
  try {
    const allUsers = await Model.User.findAll();
    console.log("Users found !");
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOneUser = async (req, res) => {
  try {
    const uuid = req.params.uuid;
    const user = await Model.User.findOne({
      where: { uuid },
    });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createUser = async (req, res) => {
  try {
    const user_object = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      typeOfUser: req.body.typeOfUser,
      password: req.body.password,
      password2: req.body.password2
    };
    for (let att in user_object) {
      console.log(att)
    };
    // verify the request body , don't allow empty field
    if(
      !user_object.firstName ||
      !user_object.lastName ||
      !user_object.email ||
      !user_object.typeOfUser ||
      !user_object.password ||
      !user_object.password2    
    ) {
      console.log("Empty field somewhere");
      res.status(400).send({
        message: "All the field need to be filed",
      });
      return;
    }

    // verify that the email is not already taken by another user.
    const email = await Model.User.findOne({
      where: {
        email: user_object.email,
      },
    });
    if (email) {
      console.log("oups, email in use");
      res.status(400).send({
        message: "Email already taken",
      });
      return;
    }

    // confirm password
    if (user_object.password !== user_object.password2) {
      console.log("Should be the same password");
      res.status(400).send({
        message: "Mismatch password",
      });
      return;
    }

    var salt = bcrypt.genSaltSync(10);
    var hashedPassword = bcrypt.hashSync(user_object.password, salt);

    // should hide password, id and all sensitive data
    const createdUser = {
      firstName: user_object.firstName,
      lastName: user_object.lastName,
      email: user_object.email,
      typeOfUser: user_object.typeOfUser,
      password: hashedPassword, //to hide
      passwordSalt: salt, // to hide
    };

    console.log(typeof createdUser.typeOfUser);

    try {
      const user = await Model.User.create(createdUser);
      console.log("User created !");
      return res.status(201).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    console.log("user deleted");
    return await Model.User.destroy({
      where: { uuid: req.params.uuid },
    }).status(200);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.editUser = async (req, res) => {
  try {
    const user_object = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      typeOfUser: req.body.typeOfUser,
    };

    try {
      const updatedUser = await Model.User.update(user_object, {
        where: { uuid: req.params.uuid },
      });
      console.log("User updated !");
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
