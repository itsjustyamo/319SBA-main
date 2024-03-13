import express from 'express';
// const RegularCar = require('../models/car');
const router = express.Router();
export default router;


// Create a new regular car
router.post('/car', async (req, res) => {
  try {
    const newRegularCar = new RegularCar(req.body);
    await newRegularCar.save();
    res.status(201).json(newRegularCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all regular cars
router.get('/car', async (req, res) => {
  try {
    const regularCars = await RegularCar.find();
    res.json(regularCars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single regular car by ID
router.get('/car/:id', async (req, res) => {
  try {
    const regularCar = await RegularCar.findById(req.params.id);
    if (regularCar) {
      res.json(regularCar);
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a regular car by ID
router.patch('/car/:id', async (req, res) => {
  try {
    const updatedRegularCar = await RegularCar.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedRegularCar) {
      res.json(updatedRegularCar);
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a regular car by ID
router.delete('/car/:id', async (req, res) => {
  try {
    const deletedRegularCar = await RegularCar.findByIdAndDelete(req.params.id);
    if (deletedRegularCar) {
      res.json({ message: "Car deleted successfully" });
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
