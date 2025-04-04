require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const connectDB = require('./db');
const Donation = require('./models/Donation');

const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// File Upload Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Routes
app.post('/api/donations', upload.single('foodImage'), async (req, res) => {
    try {
        // Format dates properly
        const pickupTime = new Date(req.body.pickupTime);
        const expiryDate = new Date(req.body.expiryDate);

        const newDonation = new Donation({
            ...req.body,
            foodImage: req.file ? req.file.path : null,
            pickupTime,
            expiryDate
        });

        await newDonation.save();
        res.status(201).json({
            success: true,
            data: newDonation,
            message: 'Donation registered successfully'
        });
    } catch (error) {
        console.error('Error saving donation:', error);
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

app.get('/api/donations', async (req, res) => {
    try {
        const donations = await Donation.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: donations.length,
            data: donations
        });
    } catch (error) {
        console.error('Error fetching donations:', error);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});