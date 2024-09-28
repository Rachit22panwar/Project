const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema(
    {
        payment: {},
        buyer: {
            type: mongoose.ObjectId,
            ref: "users",
        },
    }, { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
