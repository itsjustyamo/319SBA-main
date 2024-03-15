import mongoose from 'mongoose';

const carsSchema = new mongoose.Schema({
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
} , { collection: 'cars' });

const Cars = mongoose.model('Cars', carsSchema);

// Create a model from the schema
 const carsModel = mongoose.model('carsModel', carsSchema);

const newCar = new carsModel({
  "name": "Suss",
  "color": "Gold",
  "yearBuilt": "2018",
  "forSale": "true"
});

carsModel.createCollection();

module.exports = mongoose.model('carsModel', carsSchema);
