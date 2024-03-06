const mongoose = require('mongoose');

const luxuryCarSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  forSale: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Define indexes
luxuryCarSchema.index({ make: 1 }); // Index for make field
luxuryCarSchema.index({ year: 1 }); // Index for year field

const LuxuryCar = mongoose.model('LuxuryCar', luxuryCarSchema);

module.exports = LuxuryCar;