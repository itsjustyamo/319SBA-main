const express = require('express');
const router = express.Router();
const RegularCar = require('../models/regularCar');

// Create a new regular car
router.post('/regularCars', async (req, res) => {
  try {
    const newRegularCar = new RegularCar(req.body);
    await newRegularCar.save();
    res.status(201).json(newRegularCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all regular cars
router.get('/regularCars', async (req, res) => {
  try {
    const regularCars = await RegularCar.find();
    res.json(regularCars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single regular car by ID
router.get('/regularCars/:id', async (req, res) => {
  try {
    const regularCar = await RegularCar.findById(req.params.id);
    if (regularCar) {
      res.json(regularCar);
    } else {
      res.status(404).json({ message: "Regular car not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a regular car by ID
router.patch('/regularCars/:id', async (req, res) => {
  try {
    const updatedRegularCar = await RegularCar.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedRegularCar) {
      res.json(updatedRegularCar);
    } else {
      res.status(404).json({ message: "Regular car not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a regular car by ID
router.delete('/regularCars/:id', async (req, res) => {
  try {
    const deletedRegularCar = await RegularCar.findByIdAndDelete(req.params.id);
    if (deletedRegularCar) {
      res.json({ message: "Regular car deleted successfully" });
    } else {
      res.status(404).json({ message: "Regular car not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;