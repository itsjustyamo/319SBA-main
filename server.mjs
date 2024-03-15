import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import carsRoutes from './routes/cars.mjs';
import luxuryCarsRoutes from './routes/luxuryCars.mjs';
import trucksRoutes from './routes/trucks.mjs';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send(`Choose your favourite vehicle`);
});

app.use('/trucks', trucksRoutes);
app.use('/luxuryCars', luxuryCarsRoutes);
app.use('/cars', carsRoutes); 


// // Global error handling
// app.use((err, req, res, next) => { 
//     console.error(err.stack);
//     res.status(500).send('Something went wrong!');
// });
no

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});