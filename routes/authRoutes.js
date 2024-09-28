const express = require('express');
const { registerController, loginController, testController, getOrdersController } = require('../controller/authController.js');
const { requireSignIn, isAdmin } = require("../middleware/authMiddleware.js");

//router object
const router = express.Router();

//routing
//Regestring || Methos POST
router.post('/register', registerController);

//Login || Method POST
router.post('/login', loginController)

//test routes
router.get('/test', requireSignIn, isAdmin, testController);

//protected user routes
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});

//protected Admin routes
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});

//orders
router.get('/orders', requireSignIn, getOrdersController)

module.exports = router;