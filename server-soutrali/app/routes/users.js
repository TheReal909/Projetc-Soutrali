const express = require('express');
const controller = require('../controllers/usersController');

const router = express.Router();

router
    .get('/', controller.getAll)
    .get('/:uuid', controller.getOneUser)
    .post('/', controller.createUser)
    .put('/:uuid', controller.editUser)
    .delete('/:uuid', controller.deleteUser);


    
module.exports = router;