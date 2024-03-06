import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import truckRouter from './routes/trucks.js';
import luxuryCarRouter from './routes/luxuryCars.js';
import regularCarRouter from './routes/regularCars.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
    res.send(`We are RTT-125, and we are the best`);
});

app.use('/trucks', truckRouter);
app.use('/luxuryCars', luxuryCarRouter);
app.use('/regularCars', regularCarRouter);

// Global error handling
app.use((err, _req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});