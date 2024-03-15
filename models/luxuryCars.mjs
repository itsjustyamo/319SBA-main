import mongoose from 'mongoose';

const luxuryCarsSchema = new mongoose.Schema({
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
    enum: ['trucks', 'luxuryCars', 'regularCars'],
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
} , { collection: 'luxuryCars' });

const Cars = mongoose.model('luxuryCars', luxuryCarsSchema);

// Create a model from the schema
 const luxuryCarsModel = mongoose.model('luxuryCarsModel', luxuryCarsSchema);

const newluxuryCar = new luxuryCarsModel({
    "name": "Suss",
    "color": "Gold",
    "yearBuilt": "2018",
    "forSale": "true"
  });

carsModel.createCollection();

module.exports = mongoose.model('luxuryCarsModel', luxuryCarsSchema);