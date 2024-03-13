const mongoose = require('mongoose');

const truckSchema = new mongoose.Schema({
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
truckSchema.index({ make: 1 }); // Index for make field
truckSchema.index({ year: 1 }); // Index for year field

const Truck = mongoose.model('Truck', truckSchema);

module.exports = Truck;
