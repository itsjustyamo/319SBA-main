import mongoose from 'mongoose';

const trucksSchema = new mongoose.Schema({
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
} , { collection: 'trucks' });

const Cars = mongoose.model('trucks', trucksSchema);

// Create a model from the schema
 const trucksModel = mongoose.model('trucksModel', trucksSchema);

const newTrucks = new trucksModel({
    "name": "Suss",
    "color": "Gold",
    "yearBuilt": "2018",
    "forSale": "true"
  });

carsModel.createCollection();

module.exports = mongoose.model('trucksModel', trucksSchema);