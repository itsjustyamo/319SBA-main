import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import truckRouter from './routes/trucks.mjs';
import luxuryCarRouter from './routes/luxuryCars.mjs';
import carRouter from './routes/cars.mjs'; 

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
await mongoose.connect(process.env.MONGO_URI);

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send(`Chose your favourite vehicle`);
});

app.use('/trucks', truckRouter);
app.use('/luxuryCars', luxuryCarRouter);
app.use('/cars', carRouter); 

// Global error handling
app.use((err, req, res, next) => { 
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});