const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
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
  category: {
    type: String,
    enum: ['trucks', 'luxuryCars', 'regularCars'], // Assuming these are the possible categories
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
carSchema.index({ make: 1 }); // Index for make field
carSchema.index({ year: 1 }); // Index for year field
carSchema.index({ category: 1 }); // Index for category field

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
