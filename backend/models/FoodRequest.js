const mongoose = require('mongoose');

const foodRequestSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    foodType: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    foodCategory: {
        type: String,
        enum: ['vegetarian', 'non-vegetarian', 'vegan', 'gluten-free', 'any'],
        required: true
    },
    additionalMessage: {
        type: String
    },
    status: {
        type: String,
        enum: ['pending', 'matched', 'fulfilled'],
        default: 'pending'
    },
    matchedDonation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FoodDonation'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('FoodRequest', foodRequestSchema);