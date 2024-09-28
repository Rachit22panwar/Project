const braintree = require("braintree")
const dotenv = require("dotenv");
const orderModel = require('../models/orderModel.js');
const Course = require('../models/courseModel.js');

dotenv.config();


var gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});


// API to handle course creation and video/image upload
const addCourseController = async (req, res) => {
  try {
    const { title, description,price } = req.body;
    const videoUrl = req.files['video'][0].path;  // Video file path
    const imageUrl = req.files['image'][0].path;  // Image file path

    const newCourse = new Course({ title, description,price, videoUrl, imageUrl });
    await newCourse.save();

    res.status(201).json({
      success: true,
      message: 'Course uploaded successfully!',
      course: newCourse,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error uploading course', error });
  }
};



//payment gateway api
//token
const braintreeTokenController = async (req, res) => {
  try {
    gateway.clientToken.generate({}, function (err, response) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(response);
      }
    });
  } catch (error) {
    console.log(error);

  }
};
//payment
const braintreePaymentController = async (req, res) => {
  try {
    const { nonce } = req.body;
    let newTransaction = gateway.transaction.sale({
      amount: "5.00",
      paymentMethodNonce: nonce,
      options: {
        submitForSettlement: true,
      }
    },
      function (error, result) {
        if (result) {
          const order = new orderModel({
            payment: result,
            buyer: req.user._id
          }).save();
          res.json({ ok: true });
        } else {
          res.status(500).send(error);
        }
      });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { addCourseController, braintreeTokenController, braintreePaymentController };