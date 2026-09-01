const express = require('express');
const router = express.Router();
const UserEntry = require('../models/UserEntry');

// POST /api/entry — Register a new giveaway entry
router.post('/entry', async (req, res) => {
  try {
    const { name, email, instagramHandle } = req.body;

    // Validate required fields
    if (!name || !email || !instagramHandle) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required: name, email, and instagramHandle.',
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    // Check for duplicate email
    const existingEntry = await UserEntry.findOne({
      email: email.toLowerCase().trim(),
    });
    if (existingEntry) {
      return res.status(400).json({
        success: false,
        message: 'You have already entered the giveaway!',
      });
    }

    // Capture IP address for anti-spam
    const ipAddress =
      req.headers['x-forwarded-for'] ||
      req.headers['x-real-ip'] ||
      req.connection?.remoteAddress ||
      req.ip ||
      null;

    // Create new entry
    const newEntry = new UserEntry({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      instagramHandle: instagramHandle.trim(),
      ipAddress,
    });

    await newEntry.save();

    return res.status(201).json({
      success: true,
      message: 'Your entry has been submitted successfully!',
    });
  } catch (error) {
    // Handle MongoDB duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'You have already entered the giveaway!',
      });
    }

    console.error('Entry submission error:', error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.',
    });
  }
});

module.exports = router;
