const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Dono raste yahan set hain
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

module.exports = router;