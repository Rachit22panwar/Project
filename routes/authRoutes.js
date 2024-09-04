const express = require('express');
const  {registerController, loginController, testController}  = require('../controller/authController');
const {requireSignIn, isAdmin} = require("../middleware/authMiddleware");

//router object
const router = express.Router();

//routing
//Regestring || Methos POST
router.post('/register', registerController);

//Login || Method POST
router.post('/login', loginController)

//test routes
router.get('/test', requireSignIn, isAdmin , testController);

module.exports = router;