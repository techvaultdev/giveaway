const express = require('express');
const router = express.Router();
const UserEntry = require('../models/UserEntry');
const connectDB = require('../config/db');

// POST /api/entry — Register a new giveaway entry
router.post('/entry', async (req, res) => {
  try {
    // Ensure the MongoDB Atlas connection is ready before database writes
    await connectDB();

    const { name, email, instagramHandle } = req.body || {};

    if (!name || !email || !instagramHandle) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required.',
      });
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const normalizedName = String(name).trim();
    const normalizedInstagramHandle = String(instagramHandle).trim();

    if (!normalizedName || !normalizedEmail || !normalizedInstagramHandle) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    const existingEntry = await UserEntry.findOne({ email: normalizedEmail });
    if (existingEntry) {
      return res.status(400).json({
        success: false,
        message: 'You have already entered the giveaway!',
      });
    }

    const ipAddress =
      req.headers['x-forwarded-for'] ||
      req.headers['x-real-ip'] ||
      req.connection?.remoteAddress ||
      req.ip ||
      null;

    const newEntry = new UserEntry({
      name: normalizedName,
      email: normalizedEmail,
      instagramHandle: normalizedInstagramHandle,
      ipAddress,
    });

    await newEntry.save();

    return res.status(201).json({
      success: true,
      message: 'Your entry has been submitted successfully!',
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'You have already entered the giveaway!',
      });
    }

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors || {}).map((val) => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ') || 'Validation error',
      });
    }

    console.error('Entry submission error:', error);

    return res.status(500).json({
      success: false,
      message: error.message || 'Server error',
    });
  }
});

module.exports = router;
