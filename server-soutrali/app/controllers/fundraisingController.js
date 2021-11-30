const Sequelize = require("sequelize");
const Model = require("../../models");

 //those are small CRUD api to start with, as we continue, we will had custom functionalities
// should 2 factors auth (phone number !)

exports.getAllFundraising = async (req, res) => {
    try {
      const all = await Model.Fundraiser.findAll(all);
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
  // exports.createFundraising = async (req, res) => {
  //     const fundraiserObject = {
  //         name: req.body.name,
  //         description: req.body.description,
  //         fundRaiserType: req.body.fundRaiserType,
  //         category: req.body.category,
  //         moneyGoal: req.body.moneyGoal,
  //         actualBalance: req.body.actualBalance
  //     }

  //     switch (key) {
  //         case value:
              
  //             break;
      
  //         default:
  //             break;
  //     }




  // }