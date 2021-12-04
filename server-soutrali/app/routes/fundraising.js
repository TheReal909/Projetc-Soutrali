const express = require('express');
const fundraisingController = require('../controllers/fundraisingController');

const router = express.Router();

router
    .get('/', fundraisingController.getAllFundraising)
    .get('/:uuid', fundraisingController.getOneFundRaising)
    .post('/', fundraisingController.createFundraising);


    
module.exports = router;