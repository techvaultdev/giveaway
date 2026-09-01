const mongoose = require('mongoose');

// Global cache to prevent multiple connections in serverless environments
let isConnected = false;

// Mongoose connection event listeners for robust debugging
mongoose.connection.on('connected', () => {
  console.log('🟢 Mongoose connected to MongoDB Atlas');
});

mongoose.connection.on('error', (err) => {
  console.error('🔴 Mongoose connection error:', err.message);
});

mongoose.connection.on('disconnected', () => {
  console.log('🟡 Mongoose disconnected from MongoDB');
});

const connectDB = async () => {
  // 1. Connection Caching for Serverless (Vercel/Render)
  if (isConnected) {
    console.log('⚡ Using existing MongoDB connection');
    return;
  }

  // Fallback state from previous connection attempt if mongoose maintains it
  if (mongoose.connection.readyState === 1) {
    isConnected = true;
    console.log('⚡ Using existing MongoDB connection (ready state)');
    return;
  }

  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error('MONGODB_URI is not defined in the environment variables');
    }

    // 2. Initial connection
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000, // Fail fast if IP is not whitelisted
    });

    isConnected = !!conn.connections[0].readyState;

    console.log(`✅ MongoDB Initialized: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB. Check credentials or Atlas Network Access (IP Whitelist).');
    console.error('Error Details:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
