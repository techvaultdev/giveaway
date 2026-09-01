const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const entryRoutes = require('./routes/entry');

const app = express();
const PORT = process.env.PORT || 5000;

// ------- Middleware -------
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  })
);

// Body parser middleware (Must be declared BEFORE routes)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Trust proxy for accurate IP capture (Vercel, Render, etc.)
app.set('trust proxy', 1);

// ------- Routes -------
app.use('/api', entryRoutes);

// Health check
app.get('/api/health', async (_req, res) => {
  try {
    await connectDB();
    res.json({ status: 'ok', database: 'connected', timestamp: new Date().toISOString() });
  } catch (err) {
    res.status(500).json({ status: 'error', database: err.message });
  }
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Global error handler
app.use((err, _req, res, _next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({ success: false, message: err.message || 'Internal server error' });
});

// ------- Database & Server Start (Local Development Only) -------
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  }).catch((err) => {
    console.error('Local server startup error:', err.message);
  });
}

module.exports = app;
