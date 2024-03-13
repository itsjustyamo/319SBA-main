import express from 'express';
// const LuxuryCar = require('../models/luxuryCar');
const router = express.Router();
export default router;


// Create a new luxury car
router.post('/luxuryCars', async (req, res) => {
  try {
    const newLuxuryCar = new LuxuryCar(req.body);
    await newLuxuryCar.save();
    res.status(201).json(newLuxuryCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all luxury cars
router.get('/luxuryCars', async (req, res) => {
  try {
    const luxuryCars = await LuxuryCar.find();
    res.json(luxuryCars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single luxury car by ID
router.get('/luxuryCars/:id', async (req, res) => {
  try {
    const luxuryCar = await LuxuryCar.findById(req.params.id);
    if (luxuryCar) {
      res.json(luxuryCar);
    } else {
      res.status(404).json({ message: "Luxury car not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a luxury car by ID
router.patch('/luxuryCars/:id', async (req, res) => {
  try {
    const updatedLuxuryCar = await LuxuryCar.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedLuxuryCar) {
      res.json(updatedLuxuryCar);
    } else {
      res.status(404).json({ message: "Luxury car not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a luxury car by ID
router.delete('/luxuryCars/:id', async (req, res) => {
  try {
    const deletedLuxuryCar = await LuxuryCar.findByIdAndDelete(req.params.id);
    if (deletedLuxuryCar) {
      res.json({ message: "Luxury car deleted successfully" });
    } else {
      res.status(404).json({ message: "Luxury car not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
