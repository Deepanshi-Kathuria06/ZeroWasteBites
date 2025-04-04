const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    donorType: {
        type: String,
        enum: ['individual', 'organization'],
        default: 'individual'
    },
    organizationName: {
        type: String,
        required: [true, 'Organization/Individual name is required']
    },
    foodType: {
        type: String,
        required: [true, 'Food type is required']
    },
    quantity: {
        type: String,
        required: [true, 'Quantity is required']
    },
    pickupTime: {
        type: Date,
        required: [true, 'Pickup time is required']
    },
    expiryDate: {
        type: Date,
        required: [true, 'Expiry date is required']
    },
    pickupLocation: {
        type: String,
        required: [true, 'Pickup location is required']
    },
    foodCategory: {
        type: String,
        enum: ['vegetarian', 'non-vegetarian', 'vegan', 'gluten-free'],
        default: 'vegetarian'
    },
    foodImage: {
        type: String
    },
    additionalNotes: {
        type: String
    },
    status: {
        type: String,
        enum: ['available', 'reserved', 'claimed'],
        default: 'available'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Donation', donationSchema);