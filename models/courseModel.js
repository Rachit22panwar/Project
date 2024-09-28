const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price : { type:Number, required:true },
    videoUrl: { type: String, required: true },
    imageUrl: { type: String, required: true },  // New field for course image
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', courseSchema);
