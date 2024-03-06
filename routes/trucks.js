const express = require('express');
const router = express.Router();
const Truck = require('../models/truck');

// Create a new truck
router.post('/trucks', async (req, res) => {
  try {
    const newTruck = new Truck(req.body);
    await newTruck.save();
    res.status(201).json(newTruck);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all trucks
router.get('/trucks', async (req, res) => {
  try {
    const trucks = await Truck.find();
    res.json(trucks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single truck by ID
router.get('/trucks/:id', async (req, res) => {
  try {
    const truck = await Truck.findById(req.params.id);
    if (truck) {
      res.json(truck);
    } else {
      res.status(404).json({ message: "Truck not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a truck by ID
router.patch('/trucks/:id', async (req, res) => {
  try {
    const updatedTruck = await Truck.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedTruck) {
      res.json(updatedTruck);
    } else {
      res.status(404).json({ message: "Truck not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a truck by ID
router.delete('/trucks/:id', async (req, res) => {
  try {
    const deletedTruck = await Truck.findByIdAndDelete(req.params.id);
    if (deletedTruck) {
      res.json({ message: "Truck deleted successfully" });
    } else {
      res.status(404).json({ message: "Truck not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;