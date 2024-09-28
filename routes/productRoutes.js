const express = require('express');
const multer = require('multer');
const { braintreeTokenController, braintreePaymentController, addCourseController } = require('../controller/productController.js');
const { requireSignIn } = require('../middleware/authMiddleware.js');

const router = express.Router();

// Multer setup for both video and image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Uploads/'); // Folder where files are uploaded
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage });

// Route for adding a course
router.post('/add-course', upload.fields([
    { name: 'video', maxCount: 1 },
    { name: 'image', maxCount: 1 }
]), addCourseController);

//payments routes 
//token
router.get('/braintree/token', braintreeTokenController);

//payments
router.post('/braintree/payment', requireSignIn, braintreePaymentController);

module.exports = router;