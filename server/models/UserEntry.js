const mongoose = require('mongoose');

const userEntrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Please provide a valid email address',
    ],
  },
  instagramHandle: {
    type: String,
    required: [true, 'Instagram username is required'],
    trim: true,
    maxlength: [50, 'Instagram handle cannot exceed 50 characters'],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  ipAddress: {
    type: String,
    default: null,
  },
});

// Index for faster lookups
userEntrySchema.index({ email: 1 });

module.exports = mongoose.model('UserEntry', userEntrySchema);
