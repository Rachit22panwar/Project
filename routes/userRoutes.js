const express = require('express');
const { getAllUsersController } = require('../controller/userController.js');
const { isAdmin } = require('../middleware/authMiddleware.js');
const router = express.Router();

// Route to get all users (admin-only access)
router.get('/all-users',isAdmin, getAllUsersController);

module.exports = router;
