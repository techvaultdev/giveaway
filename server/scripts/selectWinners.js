/**
 * selectWinners.js — Standalone script to randomly pick 3 giveaway winners.
 *
 * Usage:
 *   node scripts/selectWinners.js
 *
 * Requires MONGODB_URI in the .env file at the server root.
 */

require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const mongoose = require('mongoose');
const UserEntry = require('../models/UserEntry');

const NUM_WINNERS = 3;

/**
 * Fisher-Yates (Knuth) shuffle — produces an unbiased random permutation.
 */
function fisherYatesShuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

async function main() {
  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) {
    console.error('❌ MONGODB_URI is not set in .env');
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    const entries = await UserEntry.find({}).lean();
    console.log(`📋 Total entries: ${entries.length}\n`);

    if (entries.length === 0) {
      console.log('⚠️  No entries found. Cannot select winners.');
      await mongoose.disconnect();
      process.exit(0);
    }

    if (entries.length < NUM_WINNERS) {
      console.log(
        `⚠️  Only ${entries.length} entries found. Selecting all as winners.\n`
      );
    }

    const shuffled = fisherYatesShuffle(entries);
    const winners = shuffled.slice(0, Math.min(NUM_WINNERS, entries.length));

    console.log('🎉 ═══════════════════════════════════════');
    console.log('   GIVEAWAY WINNERS');
    console.log('═══════════════════════════════════════════\n');

    winners.forEach((winner, index) => {
      console.log(`🏆 Winner #${index + 1}:`);
      console.log(`   Name:      ${winner.name}`);
      console.log(`   Email:     ${winner.email}`);
      console.log(`   Instagram: @${winner.instagramHandle.replace('@', '')}`);
      console.log(`   Entered:   ${new Date(winner.timestamp).toLocaleString()}`);
      console.log(`   IP:        ${winner.ipAddress || 'N/A'}`);
      console.log('');
    });

    console.log('═══════════════════════════════════════════');
    console.log('✅ Please manually verify Instagram activity for each winner.');

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    await mongoose.disconnect();
    process.exit(1);
  }
}

main();
