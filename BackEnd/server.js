import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import destinationsRoutes from './routes/Routes.Destinations.js';
import packagesRoutes from './routes/Routes.Top-selling.js';

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// API Routes
app.use('/api/destinations', destinationsRoutes); // Routes for travel destinations
app.use('/api/packages/top-selling', packagesRoutes); // Routes for top-selling packages

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected');
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch((err) => console.log(err));

