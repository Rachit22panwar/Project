const userModel = require('../models/userModel');

// Controller to get all users
const getAllUsersController = async (req, res) => {
    try {
        const users = await userModel.find();  // Fetch all users from the database
        res.status(200).json({
            success: true,
            message: "All users retrieved successfully",
            users,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error while fetching users',
            error,
        });
    }
};

module.exports = { getAllUsersController };
