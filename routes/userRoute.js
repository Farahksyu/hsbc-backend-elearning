const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/userController.js');

router.get('/user', UsersController.getUsers);

module.exports = router;
