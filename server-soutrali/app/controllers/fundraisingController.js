const Sequelize = require("sequelize");
const Model = require("../../models");
// const usersController = require("./usersController");

//those are small CRUD api to start with, as we continue, we will had custom functionalities
// should add 2 factors auth (phone number !)
exports.getAllFundraising = async (req, res) => {
  try {
    const all = await Model.Fundraiser.findAll();
    console.log("Users found !");
    return res.status(200).json(all);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOneFundRaising = async (req, res) => {
  try {
    const uuid = req.params.uuid;
    const one = await Model.Fundraiser.findOne({
      where: { uuid },
    });
    return res.status(200).json(one);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// should create only when authenticate and have an account
exports.createFundraising = async (req, res) => {
  const fundRaiserType = req.body.fundRaiserType;

  if (fundRaiserType == "SelfFundraiser") {
    try {
      const selfFundraiserObject = {
        fundRaiserName: req.body.fundRaiserName,
        description: req.body.description,
        fundRaiserType: fundRaiserType,
        userUuid: req.body.userUuid,
        photoUrl: req.body.photoUrl,
        category: req.body.category,
        moneyGoal: req.body.moneyGoal,
        actualBalance: req.body.actualBalance,
      };
       // check if user exist in the database to allow him to create a fundraiser since there is an association
      const user = await Model.User.findOne({where: {uuid: selfFundraiserObject.userUuid}})

      console.log(user);
      console.log(selfFundraiserObject.fundRaiserName);

      const fundraiser = await Model.Fundraiser.create({
        fundRaiserName: req.body.fundRaiserName,
        description: req.body.description,
        fundRaiserType: fundRaiserType,
        userUuid: req.body.userUuid,
        category: req.body.category,
        moneyGoal: req.body.moneyGoal,
        actualBalance: req.body.actualBalance
        , userId: user.id});
      console.log("Self fundraiser created !");
      console.log(fundraiser);
      return res.status(200).json(fundraiser);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  } else {
    fundRaiserType == "Charity";
    try {
      const charityFundraiser = {
        fundRaiserName: req.body.fundRaiserName,
        description: req.body.description,
        fundRaiserType: fundRaiserType,
        userUuid: req.body.userUuid,
        nameOfInstitution: req.body.nameOfInstitution,
        moneyGoal: req.body.moneyGoal,
        actualBalance: req.body.actualBalance,
      };
  
      const user = await Model.User.findOne({where: {uuid: charityFundraiser.userUuid}})
      console.log(user)

      // create cannot take an object i don't know why :(
      const fundraiser = await Model.Fundraiser.create({
        fundRaiserName: req.body.fundRaiserName,
        description: req.body.description,
        fundRaiserType: fundRaiserType,
        userUuid: req.body.userUuid,
        nameOfInstitution: req.body.nameOfInstitution,
        moneyGoal: req.body.moneyGoal,
        actualBalance: req.body.actualBalance
        ,userId: user.id});
      console.log("Charity fundraiser created !");
      console.log(fundraiser);
      return res.status(200).json(fundraiser);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
};

// methods for createFundraiserViaHomePage
exports.createFundraiserViaHomePage = async (req, res) => {};
